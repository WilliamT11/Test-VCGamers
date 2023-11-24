# Test-VCGamers

<h3>Test Case:<h3></h3>
1. Login
    | Case | Expected | Actual |
    | ---  | --- | --- |
    | Verify Login with no input | Show Error Message |  Show Error Message |
    | Verify Login with email is null | Show Error Message |  Button Disabled |
    | Verify Login with password is null | Show Error Message |  Button Disabled |
    | Login with email not yet verified | Show Error Message |  Show Error Message |
    | Login Success | Show Div Profile |  Show Div Profile |
    | Verify Login with wrong format email | Show Error Message |  Show Error Message |
    | Go to Register Page | Show Header Register |  Show Header Register |
    | Go to Reset Page | Show Header Reset |  Show Header Reset |

2. Register

    | Case | Expected | Actual |
    | ---  | --- | --- |
    | Verify Register with no input | Button Disabled |  Button Disabled |
    | Go to Login Page | Show Header Login |  Show Header Login |
    | Verify Register with email is null | Button Disabled |  Button Disabled |
    | Verify Register with password is null | Button Disabled |  Button Disabled |
    | Verify Register with confirm password is null | Button Disabled |  Button Disabled |
    | Verify Register with phone number is null | Button Disabled |  Button Disabled |
    | Verify Register with wrong format email | Show Error Message |  Show Error Message |
    | Verify Register with password length less than 6 | Show Error Message | Show Error Message |
    | Verify Register with password length greater than 30 | Show Error Message |  Show Error Message |
    | Verify Register with password not same with confirm password | Button Disabled |  Button Disabled |
    | Verify Register with phone number length less than 10 | Show Error Message |  Show Error Message |
    | Verify Register with phone number length greater than 25 | Show Error Message |  Error Message not same with case less than 10 |
    | Register Succes | Show Success Message |  Show Success Message |

3. Search

    | Case | Expected | Actual |
    | ---  | --- | --- |
    | Successful Product Search | Show List Item |  Show Message Produk tidak ditemukan |
    | Empty Search | Show List Item |  Show List Item |
    | Invalid product Search | Show Message Produk tidak ditemukan |  Show Message Produk tidak ditemukan |

<h3>Masukan:<h3></h3>
  
1. Pada element seperti button tidak ada id/name

2. Pada error message terdapat spasi dan enter
   
3. Pada error message phone number less than 10 != error message phone number greater than 25
   
4. Pada search product, keyword yang harus ditulis apa
