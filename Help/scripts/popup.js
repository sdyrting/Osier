/////////////////////////////////////////////////////////
//
// Global operations
//
/////////////////////////////////////////////////////////

var g_bIsClosed = true;

var bIsNav = (document.layers) ? true : false;
var bIsIE  = (document.all)    ? true : false;

if ( bIsNav ) popupLayer = document.popupDiv;
if ( bIsIE )  popupLayer = popupDiv.style;

document.onmousemove = Popup_Move;
if( bIsNav ) document.captureEvents(Event.MOUSEMOVE);

initPopupStyles();


/////////////////////////////////////////////////////////
//
// Function definitions
//
/////////////////////////////////////////////////////////


function initPopupStyles()
{
    popupLayer.width      = "150";
    popupLayer.height     = "30";
    popupLayer.visibility = ( bIsNav ) ? "hide" : "hidden";
}


function Popup_Open( strMsg, iTipWidth, iTipHeight )
{   
    if( String( iTipWidth ) == 'undefined' )
    {
        iTipWidth = 150;
    }
    if( String( iTipHeight ) == 'undefined' )
    {
        iTipHeight = 20;
    }
    
    content="<table width=" + iTipWidth + " height=" + iTipHeight + " border=0 cellpadding=1 cellspacing=0 bgcolor=#000000><tr><td>" +
            "<table width=100% border=0 cellpadding=2 cellspacing=0 bgcolor=#fffe97><tr><td class='clsTip'>" + strMsg + "</td></tr></table></td></tr></table>";

    if( bIsNav )
    {
        popupLayer.document.write(content);
        popupLayer.document.close();
        
        //
        // BUGBUG - Need to find some better way to set the width and height. For example, if 
        // the height is not specified, 20 is the default and the value Netscape sees, but
        // the actual size might be bigger. In this case, the code for re-positioning
        // the tool tip vertically will to work correctly, i.e., the tooltip might still
        // be cut-off.  
        //
        popupLayer.width  = iTipWidth;
        popupLayer.height = iTipHeight;
        popupLayer.visibility = "show";
    }
    
    if( bIsIE )
    {
        popupDiv.innerHTML     = content;
        popupLayer.pixelWidth  = iTipWidth;
        popupLayer.pixelHeight = iTipHeight;

        repositionTip();
        popupDiv.style.visibility = "visible";
    }
    
    g_bIsClosed = false;
}


function repositionTip( e )
{    
    //
    // Use coordinates with respect to the html document itself 
    //
	var xPos = ( bIsNav ) ? ( e.pageX + 10 ) : ( document.body.scrollLeft + window.event.x + 10 );
	var yPos = ( bIsNav ) ? ( e.pageY + 10 ) : ( document.body.scrollTop + window.event.y + 10  );
	
	var newX = xPos;
	var newY = yPos;
	
	//
	// Netscape: Use page-relative coordinates to determine if the tool tip will be cut-off, 
	// if so update the location where it will be displayed. Note that window.innerWidth
	// and window.innerHeight include the width and height of the scrollbars, respectively.
	//
	// IE: Use client coordinates to determine if the tool tip will be cut-off, if so
	// update the location where it will be displayed.
	//
	var endPosOfTip        = ( bIsNav ) ? ( e.pageX + parseInt( document.popupDiv.width  ) ) :
	                                      ( window.event.clientX + popupDiv.offsetWidth    );
	                                     
	var bottomPosOfTip     = ( bIsNav ) ? ( e.pageY + parseInt( document.popupDiv.height ) ) :
	                                      ( window.event.clientY + popupDiv.offsetHeight   );
	
	var clientWindowWidth  = ( bIsNav ) ? ( window.pageXOffset + window.innerWidth         ) :
	                                      ( document.body.clientWidth                      );
	
	var clientWindowHeight = ( bIsNav ) ? ( window.pageYOffset + window.innerHeight        ) :
	                                      ( document.body.clientHeight                     ); 
	
	if( endPosOfTip > clientWindowWidth )
	{
		newX -= ( ( bIsNav ) ? ( parseInt( document.popupDiv.document.width ) + 10 ) :
		                       ( popupDiv.offsetWidth + 10 ) );
	}       
	
	if( bottomPosOfTip > clientWindowHeight )
	{
		newY -= ( ( bIsNav ) ? ( parseInt( document.popupDiv.document.height ) + 10 ) :
		                       ( popupDiv.offsetHeight + 10 ) );
	}      
    
	//
	// Reposition x and y coordinates as needed 
	//
    popupLayer.left = newX;  
    popupLayer.top  = newY; 
}


function Popup_Move( e )
{
    repositionTip( e );
}


function Popup_Close()
{
    if( g_bIsClosed == false )
    {   
        popupLayer.visibility = ( bIsNav ) ? "hide" : "hidden";
        g_bIsClosed = true;
    }
}


function Popup_DoNothing()
{
    return ;

}