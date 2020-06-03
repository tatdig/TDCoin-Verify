# Fields description for json template

Skipped obvious fields

# Mandatory fields:

DOC_TYPE- document type decraration 0 - is Certificate "integer"

ORG_ISSUER- declaraton of issuing organization "object"

ORG_ISSUER->SUB_COUNTRY- state, province, republic or territory "string"

DOCUMENT- document declarations "object"

DOCUMENT->DOC_ISSUE_DATE- declaration of issue date of document "unix timestamp, long"

DOCUMENT->DOC_EXP_DATE- declaration of expiration date of document "unix timestamp, long"

PRODUCT->AGE_RESTRICTION- not restricted starting from age "integer" (If product object is declared)

PRODUCT->QR_PRODUCT_IMAGE_URL- qr-image URL "string" (If product object is declared)

PRODUCT->PRODUCT_IMAGES- pictures URLs of product "array of strings" (If product object is declared)


# Optional fields:

ORG_RECIPIENT- declaration of recipient organization if not declared then issuer == recipient

PRODUCT- "object"

PRODUCT->CATEGORY- "array of strings"

PRODUCT->INGREDIENTS- "array of strings"

PRODUCT->ENERGY- "array of objects"

PRODUCT->DIET- list of compatible diets "array of strings"

PRODUCT->FAITH- "array of strings"

DOCUMENT->DOC_ID- issuers internal document identification

DOCUMENT->ADDL_DOC- additional certificates for example ingredients "array of strings"


to be continue
