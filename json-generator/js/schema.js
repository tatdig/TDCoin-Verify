var json_schema = {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/root.json",
  "type": "object",
  "title": "The Root ",
  "required": [
    "DOC_TYPE",
    "ORG_ISSUER",
    "ORG_RECIPIENT",
    "DOCUMENT",
    "PRODUCT"
  ],
  "properties": {
    "DOC_TYPE": {
      "$id": "#/properties/DOC_TYPE",
      "type": "integer",
      "title": "The Doc_type ",
      "default": 0,
      "examples": [
        0
      ]
    },
    "ORG_ISSUER": {
      "$id": "#/properties/ORG_ISSUER",
      "type": "object",
      "title": "The ORG_ISSUER",
      "required": [
        "NAME",
        "WWW",
        "EMAIL",
        "PHONE",
        "FAX",
        "COUNTRY",
        "SUB_COUNTRY",
        "ADDRESS"
      ],
      "properties": {
        "NAME": {
          "$id": "#/properties/ORG_ISSUER/properties/NAME",
          "type": "string",
          "title": "The Name",
          "default": "",
          "examples": [
            "SOME ORG NAME LTD"
          ],
          "pattern": "^(.*)$"
        },
        "WWW": {
          "$id": "#/properties/ORG_ISSUER/properties/WWW",
          "type": "string",
          "title": "The issuer Www URL",
          "default": "",
          "examples": [
            "https://www.SOMEISSUERNAMELTD.org/"
          ],
          "pattern": "^(.*)$"
        },
        "EMAIL": {
          "$id": "#/properties/ORG_ISSUER/properties/EMAIL",
          "type": "string",
          "title": "The Email",
          "default": "",
          "examples": [
            "info@SOMEISSUERNAMELTD.org"
          ],
          "pattern": "^(.*)$"
        },
        "PHONE": {
          "$id": "#/properties/ORG_ISSUER/properties/PHONE",
          "type": "string",
          "title": "The Phone",
          "default": "",
          "examples": [
            "+00000000000"
          ],
          "pattern": "^(.*)$"
        },
        "FAX": {
          "$id": "#/properties/ORG_ISSUER/properties/FAX",
          "type": "string",
          "title": "The Fax",
          "default": "",
          "examples": [
            "+00000000000"
          ],
          "pattern": "^(.*)$"
        },
        "COUNTRY": {
          "$id": "#/properties/ORG_ISSUER/properties/COUNTRY",
          "type": "string",
          "title": "The Country",
          "default": "",
          "examples": [
            "SOME COUNTRY"
          ],
          "pattern": "^(.*)$"
        },
        "SUB_COUNTRY": {
          "$id": "#/properties/ORG_ISSUER/properties/SUB_COUNTRY",
          "type": "string",
          "title": "The Sub_country",
          "default": "",
          "examples": [
            "SOME SUB_COUNTRY like state or province ..."
          ],
          "pattern": "^(.*)$"
        },
        "ADDRESS": {
          "$id": "#/properties/ORG_ISSUER/properties/ADDRESS",
          "type": "array",
          "title": "The Address",
          "items": {
            "$id": "#/properties/ORG_ISSUER/properties/ADDRESS/items",
            "type": "string",
            "minItems": 1,
            "maxItems": 2,
            "title": "The Address lines",
            "default": "",
            "examples": [
              "SOME ADDRESS OF SOME ORG NAME LTD",
              "SOME ADDRESS EXTRA OF SOME ORG NAME LTD"
            ],
            "pattern": "^(.*)$"
          }
        }
      }
    },
    "ORG_RECIPIENT": {
      "$id": "#/properties/ORG_RECIPIENT",
      "type": "object",
      "title": "The Org_recipient",
      "required": [
        "NAME",
        "WWW",
        "EMAIL",
        "PHONE",
        "FAX",
        "COUNTRY",
        "SUB_COUNTRY",
        "ADDRESS"
      ],
      "properties": {
        "NAME": {
          "$id": "#/properties/ORG_RECIPIENT/properties/NAME",
          "type": "string",
          "title": "The Name",
          "default": "",
          "examples": [
            "SOME ORG NAME LTD"
          ],
          "pattern": "^(.*)$"
        },
        "WWW": {
          "$id": "#/properties/ORG_RECIPIENT/properties/WWW",
          "type": "string",
          "title": "The Www",
          "default": "",
          "examples": [
            "https://www.SOMERECIPIENTNAMELTD.org/"
          ],
          "pattern": "^(.*)$"
        },
        "EMAIL": {
          "$id": "#/properties/ORG_RECIPIENT/properties/EMAIL",
          "type": "string",
          "title": "The Email",
          "default": "",
          "examples": [
            "info@SOMERECIPIENTNAMELTD.org"
          ],
          "pattern": "^(.*)$"
        },
        "PHONE": {
          "$id": "#/properties/ORG_RECIPIENT/properties/PHONE",
          "type": "string",
          "title": "The Phone",
          "default": "",
          "examples": [
            "+00000000000"
          ],
          "pattern": "^(.*)$"
        },
        "FAX": {
          "$id": "#/properties/ORG_RECIPIENT/properties/FAX",
          "type": "string",
          "title": "The Fax",
          "default": "",
          "examples": [
            "+00000000000"
          ],
          "pattern": "^(.*)$"
        },
        "COUNTRY": {
          "$id": "#/properties/ORG_RECIPIENT/properties/COUNTRY",
          "type": "string",
          "title": "The Country",
          "default": "",
          "examples": [
            "SOME COUNTRY"
          ],
          "pattern": "^(.*)$"
        },
        "SUB_COUNTRY": {
          "$id": "#/properties/ORG_RECIPIENT/properties/SUB_COUNTRY",
          "type": "string",
          "title": "The Sub_country",
          "default": "",
          "examples": [
            "SOME SUB_COUNTRY like state or province ..."
          ],
          "pattern": "^(.*)$"
        },
        "ADDRESS": {
          "$id": "#/properties/ORG_RECIPIENT/properties/ADDRESS",
          "type": "array",
          "title": "The Address",
          "items": {
            "$id": "#/properties/ORG_RECIPIENT/properties/ADDRESS/items",
            "type": "string",
            "minItems": 1,
            "maxItems": 2,
            "title": "The Address lines",
            "default": "",
            "examples": [
              "SOME ADDRESS OF SOME ORG NAME LTD",
              "SOME ADDRESS EXTRA OF SOME ORG NAME LTD"
            ],
            "pattern": "^(.*)$"
          }
        }
      }
    },
    "DOCUMENT": {
      "$id": "#/properties/DOCUMENT",
      "type": "object",
      "title": "The Document",
      "required": [
        "DOC_ISSUE_DATE",
        "DOC_EXP_DATE",
      ],
      "properties": {
        "DOC_ISSUE_DATE": {
          "$id": "#/properties/DOCUMENT/properties/DOC_ISSUE_DATE",
          "type": "integer",
          "title": "The Doc_issue_date",
          "default": 0,
          "examples": [
            1570067537
          ]
        },
        "DOC_ID": {
          "$id": "#/properties/DOCUMENT/properties/DOC_ID",
          "type": "string",
          "title": "The Doc_id",
          "default": "",
          "examples": [
            "SOME_ID_OF_CERT......"
          ],
          "pattern": "^(.*)$"
        },
        "DOC_LEVEL": {
          "$id": "#/properties/DOCUMENT/properties/DOC_LEVEL",
          "type": "string",
          "title": "The Doc_level",
          "default": "",
          "examples": [
            "???......."
          ],
          "pattern": "^(.*)$"
        },
        "DOC_EXP_DATE": {
          "$id": "#/properties/DOCUMENT/properties/DOC_EXP_DATE",
          "type": "integer",
          "title": "The Doc_exp_date",
          "default": 0,
          "examples": [
            1664761920
          ]
        },
        "ADDL_DOC": {
          "$id": "#/properties/DOCUMENT/properties/ADDL_DOC",
          "type": "array",
          "title": "The Addl_doc",
          "items": {
            "$id": "#/properties/DOCUMENT/properties/ADDL_DOC/items",
            "type": "string",
            "title": "The Items",
            "default": "",
            "examples": [
              "SOME TDCOIN TXID REFERENCE TO ADDITIONAL CERTIFICATION",
              "tdcoin-verify://8daa2e5b5a9ae8bc3c12a46abd6a37dc11fae46...1da7e08a83c90e247f149a",
              "..."
            ],
            "pattern": "^(.*)$"
          }
        }
      }
    },
    "PRODUCT": {
      "$id": "#/properties/PRODUCT",
      "type": "object",
      "title": "The Product",
      "required": [
        "NAME",
        "DESCRIPTION",
        "AGE_RESTRICTION",
        "COUNTRY_OF_ORIGIN",
        "WWW",
        "QR_PRODUCT_IMAGE_URL",
        "PRODUCT_IMAGES"
      ],
      "properties": {
        "NAME": {
          "$id": "#/properties/PRODUCT/properties/NAME",
          "type": "string",
          "title": "The Name",
          "default": "",
          "examples": [
            "SOME PRODUCT NAME"
          ],
          "pattern": "^(.*)$"
        },
        "DESCRIPTION": {
          "$id": "#/properties/PRODUCT/properties/DESCRIPTION",
          "type": "string",
          "title": "The Description",
          "default": "",
          "examples": [
            "SOME DESC ................................................................................."
          ],
          "pattern": "^(.*)$"
        },
        "AGE_RESTRICTION": {
          "$id": "#/properties/PRODUCT/properties/AGE_RESTRICTION",
          "type": "integer",
          "title": "The Age_restriction",
          "default": 0,
          "examples": [
            14
          ]
        },
        "CATEGORY": {
          "$id": "#/properties/PRODUCT/properties/CATEGORY",
          "type": "array",
          "title": "The Category",
          "items": {
            "$id": "#/properties/PRODUCT/properties/CATEGORY/items",
            "type": "string",
            "title": "The Items",
            "default": "",
            "examples": [
              "CAT1...........",
              "CAT2..........",
              "CAT3...........",
              "CAT4...........",
              "CAT5..........."
            ],
            "pattern": "^(.*)$"
          }
        },
        "INGREDIENTS": {
          "$id": "#/properties/PRODUCT/properties/INGREDIENTS",
          "type": "array",
          "title": "The Ingredients",
          "items": {
            "$id": "#/properties/PRODUCT/properties/INGREDIENTS/items",
            "type": "string",
            "title": "The Items",
            "default": "",
            "examples": [
              "wheat",
              "egg",
              "milk",
              "..."
            ],
            "pattern": "^(.*)$"
          }
        },
        "ENERGY": {
          "$id": "#/properties/PRODUCT/properties/ENERGY",
          "type": "object",
          "title": "The Energy",
          "required": [
            "calories",
            "joules",
            "..."
          ],
          "properties": {
            "calories": {
              "$id": "#/properties/PRODUCT/properties/ENERGY/properties/calories",
              "type": "integer",
              "title": "The Calories",
              "default": 0,
              "examples": [
                534
              ]
            },
            "joules": {
              "$id": "#/properties/PRODUCT/properties/ENERGY/properties/joules",
              "type": "integer",
              "title": "The Joules",
              "default": 0,
              "examples": [
                2000
              ]
            },
            "...": {
              "$id": "#/properties/PRODUCT/properties/ENERGY/properties/...",
              "type": "integer",
              "title": "The ...",
              "default": 0,
              "examples": [
                0
              ]
            }
          }
        },
        "DIET": {
          "$id": "#/properties/PRODUCT/properties/DIET",
          "type": "array",
          "title": "The Diet",
          "items": {
            "$id": "#/properties/PRODUCT/properties/DIET/items",
            "type": "string",
            "title": "The Items",
            "default": "",
            "examples": [
              "...",
              "..."
            ],
            "pattern": "^(.*)$"
          }
        },
        "FAITH": {
          "$id": "#/properties/PRODUCT/properties/FAITH",
          "type": "array",
          "title": "The Faith",
          "items": {
            "$id": "#/properties/PRODUCT/properties/FAITH/items",
            "type": "string",
            "title": "The Items",
            "default": "",
            "examples": [
              "neutral",
              "muslim",
              "jewish",
              "cristian",
              "..."
            ],
            "pattern": "^(.*)$"
          }
        },
        "COUNTRY_OF_ORIGIN": {
          "$id": "#/properties/PRODUCT/properties/COUNTRY_OF_ORIGIN",
          "type": "string",
          "title": "The Country_of_origin",
          "default": "",
          "examples": [
            "SOME COUNTRY like Tatar to be able to write made in TATAR"
          ],
          "pattern": "^(.*)$"
        },
        "WWW": {
          "$id": "#/properties/PRODUCT/properties/WWW",
          "type": "string",
          "title": "The www product URL",
          "default": "",
          "examples": [
            "https://www.SOMERECIPIENTNAMELTD.org/.../PRODUCT_NAME.html"
          ],
          "pattern": "^(.*)$"
        },
        "QR_PRODUCT_IMAGE_URL": {
          "$id": "#/properties/PRODUCT/properties/QR_PRODUCT_IMAGE_URL",
          "type": "string",
          "title": "The Qr_product_image_url",
          "default": "",
          "examples": [
            "https://www.SOMEISSUERNAMELTD.org/PRODUCT_NAME/qr_IMAGE.svg"
          ],
          "pattern": "^(.*)$"
        },
        "PRODUCT_IMAGES": {
          "$id": "#/properties/PRODUCT/properties/PRODUCT_IMAGES",
          "type": "array",
          "title": "The Product_images",
          "items": {
            "$id": "#/properties/PRODUCT/properties/PRODUCT_IMAGES/items",
            "type": "string",
            "minItems": 3,
            "maxItems": 5,
            "title": "Images of product URLs",
            "default": "",
            "examples": [
              "Images to help identify product",
              "https://www.SOMERECIPIENTNAMELTD.org/PRODUCT_NAME/IMAGE1.svg",
              "https://www.SOMERECIPIENTNAMELTD.org/PRODUCT_NAME/IMAGE2.png",
              "https://www.SOMERECIPIENTNAMELTD.org/PRODUCT_NAME/IMAGE3.jpg",
              "https://www.SOMERECIPIENTNAMELTD.org/PRODUCT_NAME/IMAGE4.tiff",
              "https://www.SOMERECIPIENTNAMELTD.org/PRODUCT_NAME/IMAGE5.bmp",
              "..."
            ],
            "pattern": "^(.*)$"
          }
        }
      }
    }
  }
}
;