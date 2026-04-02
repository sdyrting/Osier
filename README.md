
<!-- README.md is generated from README.Rmd. Please edit that file -->

# Osier

<!-- badges: start -->

<!-- badges: end -->

Osier is a software library for preparing and analysing demographic
data.

## Excel

The addin `ExcelOSR` provides an Excel interface to Osier. To install
it, follow these steps:

1.  Determine whether your version of Excel is 32-bit or 64-bit: For
    versions prior to Excel 2013, go to File-\>Help-\>About Excel. For
    Excel 2013 or later, go to File-\>Account-\>About Excel.
2.  Download and unzip the appropriate file (eg
    `Osier10_Win32_20250725.zip` for 32-bit Excel,
    `Osier10_x64_20250725.zip` for 64-bit Excel).
3.  Open Excel and install the addin `ExcelOSR\ExcelOSR.xla`.
4.  Close and restart Excel.

Help pages and example spreadsheets can be accessed via the Osier
dropdown menu on the Add-ins tab. I recommend users select the Manual
Calculation Option in Excel Options-\>Formulas.

## R

The package `RprojOSR` provides an R interface to Osier. You can install
it from its binary package:

``` r
install.packages('./RprojOSR_1.0.0.zip')
```
