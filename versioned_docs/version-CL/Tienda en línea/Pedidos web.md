---
sidebar_position: 40
title: Pedidos web
description: Crear, editar y listar pedidos web
slug: /pedidos-web
---

# Pedidos web
Éste recurso te permitirá listar, editar y generar pedidos asociados a tu panel de ecommerce.

Cómo funciona la interfaz de Bsale, mira éstos videos:

- Uso ecommerce [Ver](https://www.youtube.com/playlist?list=PLPUKtN2zmQABzAPgGclvL1lBXMPNqi8Mb) 

:::info
La url base para ambiente de desarrollo y pruebas del ecommerce es  **https://api.bsale.io/**.
:::

## Carros
Un registro de carros, es la colección de productos de un ecommerce, usado para asociarlos a un checkout.

:::note
Los carros no reservan stock.
:::

### Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js 
{
    "code": "200",
    "href": "https://api.bsale.io/v1/cart/7674/detail.json",
    "count": 2,
    "limit": 0,
    "offset": 20,
    "data": [
        {
            "id": 22218,
            "quantity": 1,
            "unitValue": 13000,
            "netUnitValue": 10924.3697478992,
            "discount": 23.08,
            "itemName": "Pantalon Maevn 9726 Celeste XL",
            "total": 10000,
            "discountId": 28,
            "image": "https://dojiw2m9tvv09.cloudfront.net/2414/product/9726_redpanda_cbl_main3869.jpg",
            "idVarianteProducto": 7562,
            "sku": "190480011099",
            "link": "/product/pantalon-maevn-9726-celeste",
            "productWebId": 760,
            "cartId": 7674,
            "taxList": [
                1
            ],
            "shipping": {
                "id": 4781,
                "weight": 0.4,
                "width": 0,
                "deph": 0,
                "length": 0,
                "match": 0
            },
            "name": "Pantalon Maevn 9726 Celeste XL",
            "value": 13000,
            "cd_q": 1,
            "cd_unit_value": 13000,
            "cd_discount": 23.08,
            "cd_item_name": "Pantalon Maevn 9726 Celeste XL",
            "cd_sub_total": 10000,
            "cd_id": 22218,
            "cd_id_discount": 28,
            "cd_image": "https://dojiw2m9tvv09.cloudfront.net/2414/product/9726_redpanda_cbl_main3869.jpg",
            "id_variante_producto": 7562,
            "codigo_variante_producto": "190480011099",
            "href": "https://api.bsale.io/v1/cart/7674/detail/22218.json"
        },
        {
            "id": 22220,
            "quantity": 1,
            "unitValue": 18000,
            "netUnitValue": 15126.0504201681,
            "discount": 55.5555,
            "itemName": "Blusa Wonderwink 103A Celeste XL",
            "total": 8000,
            "discountId": 64,
            "image": "https://dojiw2m9tvv09.cloudfront.net/2414/product/103_ceil_016614.jpg",
            "idVarianteProducto": 1358,
            "sku": "889610024343",
            "link": "/product/top-hombre-celeste-wonderwink-103a",
            "productWebId": 739,
            "cartId": 7674,
            "taxList": [
                1
            ],
            "shipping": {
                "id": 2788,
                "weight": 0.4,
                "width": 0,
                "deph": 0,
                "length": 0,
                "match": 0
            },
            "name": "Blusa Wonderwink 103A Celeste XL",
            "value": 18000,
            "cd_q": 1,
            "cd_unit_value": 18000,
            "cd_discount": 55.5555,
            "cd_item_name": "Blusa Wonderwink 103A Celeste XL",
            "cd_sub_total": 8000,
            "cd_id": 22220,
            "cd_id_discount": 64,
            "cd_image": "https://dojiw2m9tvv09.cloudfront.net/2414/product/103_ceil_016614.jpg",
            "id_variante_producto": 1358,
            "codigo_variante_producto": "889610024343",
            "href": "https://api.bsale.io/v1/cart/7674/detail/22220.json"
        }
    ],
    "previous": "https://api.bsale.io/v1/cart/7674/detail.json?limit=0&offset=-20"
}
```

#### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **token** | Si no viene lo crea.
| **id** | Identificador único del item del carro | String |
| **quantity** | Cantidad de item que se lleva el carro | String |
| **unitValue** | Valor bruto del producto | String |
| **netUnitValue** | Valor neto del producto | String |
| **discount** | Descuento | Integer |
| **itemName** | Nombre del item | String |
| **total** | Total en bruto de este item| String |
| **discountId** | Id del descuento | | 
| **image** | Url imagen | Integer |
| **idVarianteProducto** | Id de la variante del producto | Integer |
| **sku** | SKU de la variante | Integer |
| **link** | url del producto | Integer |
| **cartId** | Id del carro | Integer |
| **productWebId** | Id del producto en el market | |
| **cartId** | Id del carro | Integer |
| **taxList** | Lista de id impuesto | Integer |
| **url** | Url del detalle del carro | String |

### GET detalle un carro
- GET `/v1/cart/:cartId/detail.json` retornará los detalles de un carro

#### Ejemplo
- `GET /v1/cart/7674/detail.json`

```json 
{
  "code": "200",
  "href": "https://api.bsale.io/v1/cart/110/detail.json",
  "count": 1,
  "limit": 0,
  "offset": 20,
  "data": [
    {
      "id": 70,
      "quantity": 1,
      "unitValue": 3990,
      "netUnitValue": 3990,
      "discount": 0,
      "total": 3990,
      "image": "https://dojiw2m9tvv09.cloudfront.net/33250/product/calugas-100g2449.png",
      "idVarianteProducto": 297,
      "sku": "1610222211159",
      "link": "/product/caja-calugas-reales-100gr",
      "productWebId": 43,
      "cartId": 110,
      "taxList": [
        1
      ],
      "shipping": {
        "id": 145,
        "weight": 0,
        "width": 0,
        "deph": 0,
        "length": 0,
        "match": 1
      },
      "value": 3990,
      "cd_q": 1,
      "cd_unit_value": 3990,
      "cd_discount": 0,
      "cd_sub_total": 3990,
      "cd_id": 70,
      "cd_id_discount": 0,
      "cd_image": "https://dojiw2m9tvv09.cloudfront.net/33250/product/calugas-reales-100g2449.png",
      "id_variante_producto": 297,
      "codigo_variante_producto": "1610222211159",
      "href": "https://api.bsale.io/v1/cart/110/detail/70.json"
    }
  ],
  "previous": "https://api.bsale.io/v1/cart/110/detail.json?limit=0&offset=-20"
}
```

### POST un carro
- POST `/v1/cart/new.json ` 

Para crear una variante, se debe enviar un JSON con la siguiente estructura:
#### Ejemplo JSON

##### Envío
```json
{
  "cartDetails": [
    {
      "quantity": 1,
      "unitValue": 13700,
      "image": "https://dev09.cloudfront.net/1680/product/prds-059963.jpg",
      "idVarianteProducto": 4622,
      "itemName": "Caja Calugas 200gr ",
      "productWebId": 10,
      "discount": 0
    }
  ]
}
```
- **quantity**, Cantidad a agregar al carro (Integer).
- **unitValue**, obligatorio (Integer).
- **image**,  url imagen asociada al producto del carro
- **idVarianteProducto**, id variante web asociada al carro (Integer)
- **productWebId**, Id producto web  (Integer)
- **ItemName**, Nombre del ítem agregado (String).

##### Respuesta
```json
{
  "code": "200",
  "data": {
    "id": 67,
    "createAt": 1657747898,
    "cartDetails": [
      {
        "id": 246,
        "quantity": 1,
        "unitValue": 6800,
        "netUnitValue": 5714.28571428571,
        "discount": 0,
        "itemName": "Croustillant",
        "total": 6800,
        "image": "https://dojiw2m9tvv09.cloudfront.net/12050/product/mixtochico5210.jpg",
        "idVarianteProducto": 550,
        "sku": "CH-CROU-CLE",
        "link": "/product/croustillant",
        "productWebId": 34,
        "cartId": 67,
        "taxList": [
          1
        ],
        "shipping": {
          "id": 98,
          "weight": 0.25,
          "width": 8,
          "deph": 5,
          "length": 22,
          "match": 0
        },
        "name": "Croustillant",
        "value": 6800,
        "cd_q": 1,
        "cd_unit_value": 6800,
        "cd_discount": 0,
        "cd_item_name": "Croustillant",
        "cd_sub_total": 6800,
        "cd_id": 246,
        "cd_id_discount": 0,
        "cd_image": "https://dojiw2m9tvv09.cloudfront.net/12050/product/mixtochico5210.jpg",
        "id_variante_producto": 550,
        "codigo_variante_producto": "CH-CROU-CLE",
        "href": "https://api.bsale.io/v1/cart/67/detail/246.json"
      }
    ],
    "url": "https://api.bsale.io/v1/cart/67.json"
  }
}
```

### POST un carro desde sesión
Para asignar un carro a una sesión, se debe generar una llamada desde el navegador a la id de carro creado en el POST:

- `/cart/setonsession/:id_cart`

Para  leer un carro de una sesión, se debe generar una llamada desde el navegador 

- `/cart/getfromsession`

### PUT un carro
- PUT `/v1/cart/:cart_id.json` 

- **cart_id**, Corresponde al id del carro.
- **id**, en el body se debe indicar el id del detalle carro que se desea editar, si no se indica se agrega un detalle al carro.

Se debe enviar un Json con la siguiente estructura: 
#### Ejemplo JSON

##### Envío
```json
{
  "cartDetails": [
    {
      "id": 21,
      "quantity": 1,
      "unitValue": 13700,
      "image": "https://dev09.cloudfront.net/1680/product/prds-059963.jpg",
      "idVarianteProducto": 4622,
      "itemName": "Caja Calugas 200gr ",
      "productWebId": 10,
      "discount": 0
    }
  ]
}
```
##### Respuesta
```json
{
  "code": "200",
  "data": {
    "id": 67,
    "createAt": 1657747898,
    "cartDetails": [
      {
        "id": 246,
        "quantity": 1,
        "unitValue": 6800,
        "netUnitValue": 5714.28571428571,
        "discount": 0,
        "itemName": "Croustillant",
        "total": 6800,
        "image": "https://dojiw2m9tvv09.cloudfront.net/12050/product/mixtochico5210.jpg",
        "idVarianteProducto": 550,
        "sku": "CH-CROU-CLE",
        "link": "/product/croustillant",
        "productWebId": 34,
        "cartId": 67,
        "taxList": [
          1
        ],
        "shipping": {
          "id": 98,
          "weight": 0.25,
          "width": 8,
          "deph": 5,
          "length": 22,
          "match": 0
        },
        "name": "Croustillant",
        "value": 6800,
        "cd_q": 1,
        "cd_unit_value": 6800,
        "cd_discount": 0,
        "cd_item_name": "Croustillant",
        "cd_sub_total": 6800,
        "cd_id": 246,
        "cd_id_discount": 0,
        "cd_image": "https://dojiw2m9tvv09.cloudfront.net/12050/product/mixtochico5210.jpg",
        "id_variante_producto": 550,
        "codigo_variante_producto": "CH-CROU-CLE",
        "href": "https://api.bsale.io/v1/cart/67/detail/246.json"
      }
    ],
    "url": "https://api.bsale.io/v1/cart/67.json"
  }
}
```

### DELETE un carro
- DELETE `/v1/cart/:cart_id/detail/:id.json` 
Cambia el estado del carro

- **cart_id**, Corresponde al id del carro.
- **id**, corresponde al id del detalle de carro, para eliminar el carro, se debe eliminar cada detalle contenido en el carro

```json
{
   "code": 200,
   "data": "Cart detail successfully deleted"
}
```

## Checkout
Un registro checkout es la relación de un carro y un pedido.

:::note
Considera que un checkout está relacionado a un documento pre-venta. Osea, debes **Referenciar su id, número y token**. 
:::

### Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /checkout/43.json"
{
  "code": 200,
  "data": {
    "id": 43,
    "token": "628699ed3b62ddc5cc8fa71204b39384a9281556",
    "clientName": "Usuario",
    "clientLastName": "Pruebas",
    "clientEmail": "test@imaginex.cl",
    "clientPhone": "+560000010",
    "id_tipo_documento_tributario": 1,
    "clientCountry": "Chile",
    "clientState": "Región Metropolitana",
    "extrasUserData": {
      "user_rut": "11111111-9",
      "razon_social": "Rzon Social",
      "giro_cliente": "Gro Cliente",
      "direccion": "Dirección",
      "ciudad": "Ciudad",
      "comuna": "Comuna"
    },
    "clientStreet": "las condes",
    "clientCityZone": "Las Condes",
    "clientPostcode": "5220000",
    "clientBuildingNumber": "123",
    "cartId": 43,
    "cartDetails": [
      "https://api.bsale.io/v1/cart/43/detail.json"
    ],
    "spcId": 2,
    "ptId": 2,
    "payUrl": "https://bcash.bsalemarket.com/bank/v1",
    "createAt": 1586794547,
    "shippingCost": 0,
    "isMafs": 0,
    "discountCost": 0,
    "active": 1,
    "shippingComment": "Entrega en portería o llamar al número de referencia",
    "totalCart": 29990,
    "pickStoreId": 0,
    "id_venta_documento_tributario": 9,
    "documentNumber": 4,
    "documentToken": "58fa1b313e09",
    "storeId": 1,
    "marketId": 1,
    "isService": 0,
    "withdrawStore": 0,
    "payProcess": "for_validate",
    "ptName": "Transferencia Bancaria",
    "stName": "Envios durante el día (Ver condiciones)",
    "total": 29990,
    "url": "https://api.bsale.io/v1/checkout/43.json",
    "orderStatus": 0
  }
}
```

#### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **id**   | identificador único del tipo de producto   | Integer |
| **token**   |   Hash identificador único del checkout | String |
| **clientName**   |   Nombre del cliente | String |
| **clientLastName**   |    Apellido del cliente | String |
| **clientEmail**   | Email del cliente | String |
| **clientPhone**   | Telefono del cliente | String |
| **id_tipo_documento_tributario**   | Id del tipo documento tributario | Integer |
| **clientCountry**   | Pais del cliente | String |
| **clientState**   | Región del cliente | String |
| **extrasUserData**   | Datos extras del documento tributario (hash).
| **clientStreet**   | Calle del cliente | Integer |
| **clientCityZone**   | Comuna del cliente | Integer |
| **clientPostcode**   | Código postal del cliente | Integer |
| **clientBuildingNumber**   | Numero de dirección del cliente | Integer |
| **cartId**   | Id del carro | Integer |
| **cartDetails**   | Detalle del carro | |
| **spcId**   | Id del costo del shipping | Integer |
| **ptId**   | Id del medio de pago | Integer |
| **createAt**   | Fecha de creación | Integer |
| **isMafs**   | El despacho es gratuito | Boolean |
| **active**   | Activo | Boolean |
| **shippingComment**   | Comentario del despacho | Integer |
| **totalCart**   | Total bruto del carro | Integer |
| **pickName**   | Nombre del que retira el pedido | Integer |
| **pickCode**   | Rut del que retira el pedido | Integer |
| **pickStoreId**   | Oficina donde se retira el pedido | Integer |
| **id_venta_documento_tributario**   | Id del documento tributario | Integer |
| **documentNumber**   | Numero de documento | Integer |
| **documentToken**   | Token del documento | Integer |
| **storeId**   | Oficina que se genera el documento tributario| Integer |
| **marketId**   | Id del market | Integer |
| **isService**   | Indica si todos los producto del checkout son servicios | Integer |
| **payProcess**   | Proceso del pedido | Integer |
| **payError**   | Código de error | Integer |
| **payResponse**   | Mensaje de error del medio de pago | Integer |
| **integrationDetail**   | Url de integración del sistema | String |
| **url**   | Url del checkout | String |

### GET listar checkout's
- GET `/v1/markets/checkout/list.json` retornará todos los checkout's creados.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **token**, Corresponde al token único asociado a un checkout.
- **clientName**,  Permite filtro por  el nombre del cliente
- **clientEmail**, Permite filtro por el email del cliente
- **marketId**,  Corresponde al ID del market 
  
#### Ejemplos
- `GET /v1/markets/checkout/list.json?token=1c659e3ee5ba6ad93b8b5eadb9921ae4b0e76e76`
- `GET /v1/markets/checkout/list.json?marketId=1`

```json title="Response /checkout/list.json"
{
  "code": 200,
  "href": "https://api.bsale.io/v1/checkout.json",
  "count": 40,
  "limit": 3,
  "offset": 0,
  "data": [
    {
      "id": 2,
      "token": "c25056283b55705e9df35099c2c371e34576ec44",
      "clientName": "ESTEBAN",
      "clientLastName": "BAHAMONDE",
      "clientEmail": "ebahamonde@yopmail.com",
      "clientPhone": "09",
      "dynamicAttributes": [],
      "cartId": 2,
      "cartDetails": [
        "https://api.bsale.io/v1/cart/2/detail.json"
      ],
      "ptId": 2,
      "createAt": 1574708468,
      "shippingCost": 0,
      "isMafs": 0,
      "discountCost": 0,
      "active": 1,
      "shippingComment": "NOTA ADICIONAL",
      "totalCart": 52990,
      "pickStoreId": 1,
      "pickName": "ESTEBAN BAHAMONDE",
      "pickCode": "1-9",
      "id_venta_documento_tributario": 0,
      "documentNumber": 0,
      "storeId": 1,
      "marketId": 1,
      "isService": 0,
      "withdrawStore": 1,
      "payProcess": "success",
      "total": 52990,
      "clientId": 24,
      "url": "https://api.bsale.io/v1/checkout/2.json",
      "orderStatus": 0
    },
    {
      "id": 3,
      "token": "daf2b384e405d83b5b7a5a3d3b77be37cd676e42",
      "clientName": "jhon",
      "clientLastName": "Calvalerri",
      "clientEmail": "jc@yopmail.com",
      "clientPhone": "09",
      "dynamicAttributes": [],
      "cartId": 3,
      "cartDetails": [
        "https://api.bsale.io/v1/cart/3/detail.json"
      ],
      "ptId": 2,
      "createAt": 1574709073,
      "shippingCost": 0,
      "isMafs": 0,
      "discountCost": 0,
      "active": 1,
      "shippingComment": "hh",
      "totalCart": 52990,
      "pickStoreId": 1,
      "pickName": "E A",
      "pickCode": "1-9",
      "id_venta_documento_tributario": 1,
      "documentNumber": 1,
      "documentToken": "26fccb8145ca",
      "storeId": 1,
      "marketId": 1,
      "isService": 0,
      "withdrawStore": 1,
      "payProcess": "for_validate",
      "total": 52990,
      "clientId": 24,
      "url": "https://api.bsale.io/v1/checkout/3.json",
      "orderStatus": 0
    },
    {
      "id": 4,
      "token": "ec84df556ca017f82053d0eac9215aba21419068",
      "clientName": "ashe",
      "clientLastName": "alvarado",
      "clientEmail": "hector@yopmail.com",
      "clientPhone": "0991",
      "clientCountry": "Chile",
      "clientState": "SUR",
      "clientCity": "",
      "dynamicAttributes": [],
      "clientStreet": "001",
      "clientCityZone": "Punta Arenas",
      "clientPostcode": "5220000",
      "clientBuildingNumber": "002",
      "cartId": 4,
      "cartDetails": [
        "https://api.bsale.io/v1/cart/4/detail.json"
      ],
      "spcId": 1,
      "ptId": 2,
      "createAt": 1574709331,
      "shippingCost": 0,
      "isMafs": 0,
      "discountCost": 0,
      "active": 1,
      "shippingComment": "Llamar antes de llegar",
      "totalCart": 52990,
      "pickStoreId": 0,
      "id_venta_documento_tributario": 2,
      "documentNumber": 2,
      "documentToken": "2edbee52a5bb",
      "storeId": 1,
      "marketId": 1,
      "isService": 0,
      "withdrawStore": 0,
      "payProcess": "success",
      "stName": "INICIAL",
      "total": 52990,
      "clientId": 24,
      "url": "https://api.bsale.io/v1/checkout/4.json",
      "orderStatus": 0
    }
  ],
  "next": "https://api.bsale.io/v1/checkout.json?limit=3&offset=3"
}
```
### GET un checkout
- GET `/v2/token/checkout/:token.json ` retornará un checkout.

#### Parámetros
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.

#### Ejemplos
- `GET /v2/token/checkout/628699ed3b62ddc5cc8fa71204b39384e9281556.json`

```json title="Response /v2/token/checkout/628699ed3b62ddc5cc8fe71204b39384a9281556.json"
{
    "code": 200,
    "data": {
        "id": 43,
        "token": "628699ed3b62ddc5cc8fa71204b39384a9281556",
        "clientName": "Armando",
        "clientLastName": "Castillos",
        "clientEmail": "pruebas@imaginex-bsale.cl",
        "clientPhone": "+90000001",
        "id_tipo_documento_tributario": 1,
        "clientCountry": "Chile",
        "clientState": "Región Metropolitana",
        "extrasUserData": {
            "user_rut": "12345678-9",
            "razon_social": "Castillos SA",
            "giro_cliente": "Construcción",
            "direccion": "Las nubes #8000",
            "ciudad": "San Pedro",
            "comuna": "San Pedro"
        },
        "clientStreet": "las condes",
        "clientCityZone": "Las Condes",
        "clientPostcode": "5220000",
        "clientBuildingNumber": "123",
        "cartId": 43,
        "cartDetails": [
            "https://api.bsale.io/v1/cart/43/detail.json"
        ],
        "spcId": 2,
        "ptId": 2,
        "payUrl": "https://bcash.bsalemarket.com/bank/v1",
        "createAt": 1586794547,
        "shippingCost": 0,
        "isMafs": 0,
        "discountCost": 0,
        "active": 1,
        "shippingComment": "Tocar el timbre",
        "totalCart": 29990,
        "pickStoreId": 0,
        "id_venta_documento_tributario": 9,
        "documentNumber": 4,
        "documentToken": "58fa1b313e09",
        "storeId": 1,
        "marketId": 1,
        "isService": 0,
        "withdrawStore": 0,
        "payProcess": "for_validate",
        "ptName": "Transferencia Bancaria",
        "stName": "Envios ultra rápidos (flash)",
        "total": 29990,
        "url": "https://api.bsale.io/v1/checkout/43.json",
        "orderStatus": 0,
        "currency": {
            "decimals": 0,
            "symbol": null,
            "decimalSeparator": null
        }
    }
}
```

### POST un checkout
- POST `/v1/checkout.json` 

:::tip
La creación de un checkout referencia a un documento pre-venta (pedido web, pedido mercado libre, orden.. etc). Dado que se debe referenciar en el checkout su `id_venta_documento_tributario`, `documentNumber` y `documentToken`.
:::

Para crear una variante, se debe enviar un JSON con la siguiente estructura:
#### Ejemplo JSON

##### Envío
```json
{
    "clientName": "Benito",
    "clientLastName": "Gonzalez",
    "clientEmail": " ",
    "clientPhone": "",
    "id_venta_documento_tributario": 2,
    "documentNumber": 1,
    "documentToken": "909a3f08ab89",
    "clientCountry": "Chile",
    "clientState": "Región Metropolitana",
    "ptId": 2,
    "payProcess": "for_validate",
    "extrasUserData": {
        "user_rut": "11111111-9",
        "razon_social": "Rzon Social",
        "giro_cliente": "Gro Clien",
        "direccion": "Direccn",
        "ciudad": "Ciudd",
        "comuna": "Cmna"
    },
    "clientStreet": "las condes",
    "clientCityZone": "Las Condes",
    "clientPostcode": "ss",
    "clientBuildingNumber": "123",
    "cartDetails": [
        {
            "quantity": 1,
            "unitValue": 29990,
            "name": "Ejemplo Producto 1 Variante 2 Lt",
            "image": "https://test.bsalemarket.com/assets/bsale/v1.2/images/no-image.png",
            "idVarianteProducto": 2,
            "productWebId": 1
        }
    ]
}
```
- **token**, Si no viene lo crea.
- **id_venta_documento_tributario**, Si viene valida que exista.
- **cartId**, Si no viene lo crea, Si viene valida que exista .
- **cartDetails**, Utiliza las reglas del carro.
- **spcId**, Si viene valida que exista .
- **ptId**, Id forma de pago tienda en línea. Si viene valida que exista.  Id's:
  - **1**, webpay
  - **2**, transferencia bancaria
  - **6**, transferencia electrónica
- **createAt**, Fecha de creación del post, Bsale lo genera.
- **payProcess**, Estado del pago asociado al checkout
  - **success**, pago realizado
  - **for_validate**, pago pendiente de validación
- **totalCart**, Si no viene se calcula .
- **pickStoreId**, Id tienda para retiro .
- **shippingCost**, valor del despacho.
- **pickName**, Nombre del que retira el pedido
- **pickCode**, Rut del que retira el pedido 
- **shippingComment**, Comentario del despacho.
- **id_venta_documento_tributario**, Si viene valida que exista. (Referencia id del pedido)
- **id_tipo_documento_tributario**, Id de tipo documento que desea generar. 
- **documentNumber**, Si viene valida que exista. (Referencia número del pedido)
- **documentToken**, Si viene valida que exista. (Referencia token del pedido)
- **storeId**, Id tienda ecommerce (Debe ser igual a marketId).
- **marketId**, Id de tienda en línea. Si viene valida que exista.
- **isService**, Si no viene se calcula .
- **withdrawStore**, Retiro en tienda (1) o despacho a domicilio (0)

##### Respuesta
```json
{
  "code": "200",
  "data": {
    "id": 141,
    "token": "5115f635235b69f957cef79a049864fb4fb167ef",
    "clientName": "José",
    "clientLastName": "Del Río",
    "clientEmail": "j@delrio.com",
    "clientPhone": "+569000001",
    "clientCountry": "Chile",
    "clientState": "Región Metropolitana",
    "extrasUserData": {
      "user_rut": "11111111-9",
      "razon_social": "Rzon Social",
      "giro_cliente": "Gro Clien",
      "direccion": "Direccn",
      "ciudad": "Ciudd",
      "comuna": "Cmna"
    },
    "clientStreet": "las condes",
    "clientCityZone": "Las Condes",
    "clientPostcode": "ss",
    "clientBuildingNumber": "123",
    "cartId": 226,
    "cartDetails": [
      {
        "id": 231,
        "quantity": 1,
        "unitValue": 29990,
        "netUnitValue": 25201.6806722689,
        "discount": 0,
        "total": 29990,
        "image": "https://d09.cloudfront.net/1680/product/home223.jpg",
        "idVarianteProducto": 252,
        "sku": "1586793957901",
        "cartId": 226,
        "taxList": [
          1
        ],
        "shipping": {
          "id": 102,
          "weight": 1,
          "width": 1,
          "deph": 1,
          "length": 1,
          "match": 1
        },
        "value": 29990,
        "cd_q": 1,
        "cd_unit_value": 29990,
        "cd_discount": 0,
        "cd_sub_total": 29990,
        "cd_id": 231,
        "cd_id_discount": 0,
        "cd_image": "https://d09.cloudfront.net/1680/product/home223.jpg",
        "id_variante_producto": 252,
        "codigo_variante_producto": "1586793957901",
        "href": "https://api.bsale.io/v1/cart/226/detail/231.json"
      }
    ],
    "ptId": 1,
    "createAt": 1635431808,
    "shippingCost": 0,
    "isMafs": 0,
    "discountCost": 0,
    "active": 1,
    "totalCart": 29990,
    "pickStoreId": 0,
    "id_venta_documento_tributario": 176,
    "documentNumber": 176,
    "documentToken": "8f4f09ed382c",
    "isService": 0,
    "withdrawStore": 0,
    "payProcess": "for_validate",
    "total": 29990,
    "url": "https://api.bsale.io/v1/checkout/141.json"
  }
}
```

### PUT un checkout
- PUT `/v1/markets/checkout/:id.json` 

Se debe enviar un Json con la siguiente estructura: 
#### Ejemplo JSON

##### Envío
```json
{
    "clientName": "Esteban",
    "clientLastName": "Pruebas",
    "clientEmail": "ebahamonde@imaginex.cl",
    "clientPhone": "+90000001",
    "id_tipo_documento_tributario": 1,
    "clientCountry": "Chile",
    "clientState": "Región Metropolitana",
    "id_venta_documento_tributario": 0,
    "documentNumber": 154,
    "documentToken": "5ea75c552f50",
}
```
##### Respuesta
```json
{
  "code": "200",
  "data": {
    "id": 141,
    "token": "5115f635235b69f957cef79a049864fb4fb167ef",
    "clientName": "José",
    "clientLastName": "Del Río",
    "clientEmail": "j@delrio.com",
    "clientPhone": "+569000001",
    "clientCountry": "Chile",
    "clientState": "Región Metropolitana",
    "extrasUserData": {
      "user_rut": "11111111-9",
      "razon_social": "Rzon Social",
      "giro_cliente": "Gro Clien",
      "direccion": "Direccn",
      "ciudad": "Ciudd",
      "comuna": "Cmna"
    },
    "clientStreet": "las condes",
    "clientCityZone": "Las Condes",
    "clientPostcode": "ss",
    "clientBuildingNumber": "123",
    "cartId": 226,
    "cartDetails": [
      {
        "id": 231,
        "quantity": 1,
        "unitValue": 29990,
        "netUnitValue": 25201.6806722689,
        "discount": 0,
        "total": 29990,
        "image": "https://d09.cloudfront.net/1680/product/home223.jpg",
        "idVarianteProducto": 252,
        "sku": "1586793957901",
        "cartId": 226,
        "taxList": [
          1
        ],
        "shipping": {
          "id": 102,
          "weight": 1,
          "width": 1,
          "deph": 1,
          "length": 1,
          "match": 1
        },
        "value": 29990,
        "cd_q": 1,
        "cd_unit_value": 29990,
        "cd_discount": 0,
        "cd_sub_total": 29990,
        "cd_id": 231,
        "cd_id_discount": 0,
        "cd_image": "https://d09.cloudfront.net/1680/product/home223.jpg",
        "id_variante_producto": 252,
        "codigo_variante_producto": "1586793957901",
        "href": "https://api.bsale.io/v1/cart/226/detail/231.json"
      }
    ],
    "ptId": 1,
    "createAt": 1635431808,
    "shippingCost": 0,
    "isMafs": 0,
    "discountCost": 0,
    "active": 1,
    "totalCart": 29990,
    "pickStoreId": 0,
    "id_venta_documento_tributario": 176,
    "documentNumber": 176,
    "documentToken": "8f4f09ed382c",
    "isService": 0,
    "withdrawStore": 0,
    "payProcess": "for_validate",
    "total": 29990,
    "url": "https://api.bsale.io/v1/checkout/141.json"
  }
}
```

### DELETE un checkout
- DELETE `/v1/variants/2110.json` 
Cambia el estado del checkout

```json
{
  "code": "200",
  "data": {
    "id": 5358,
    "token": "c401b6d0b6e4a10884fe0909b83f249e9a03dffa",
    "clientName": "adsa",
    "clientLastName": "asdasd",
    "clientEmail": "benjamind@imaginex.cl",
    "clientPhone": "123123",
    "id_tipo_documento_tributario": 1,
    "clientCountry": "Chile",
    "clientState": "Región Metropolitana",
    "extrasUserData": {
      "user_rut": "19",
      "razon_social": "asdas",
      "giro_cliente": "asd",
      "direccion": "asd",
      "ciudad": "asd",
      "comuna": "asd"
    },
    "clientStreet": "las condes",
    "clientCityZone": "Las Condes",
    "clientPostcode": "ss",
    "clientBuildingNumber": "123",
    "cartId": 6804,
    "cartDetails": [
      "https://bsale-ecommerce-benjamin007.c9users.io:8081/v1/cart/6804/detail.json"
    ],
    "spcId": 342,
    "ptId": 1,
    "createAt": 1506425440,
    "shippingCost": 0,
    "isMafs": 1,
    "active": 0,
    "shippingComment": "",
    "totalCart": 147949,
    "pickStoreId": 0,
    "pickName": "",
    "pickCode": "",
    "id_venta_documento_tributario": 0,
    "documentNumber": 0,
    "storeId": 2,
    "marketId": 1,
    "isService": 0,
    "withdrawStore": 0,
    "payProcess": "pending",
    "integrationDetail": "https://dojiw2m9tvv09.cloudfront.net/1680/product/home-productos-059963.jpg",
    "url": "https://bsale-ecommerce-benjamin007.c9users.io:8081/v1/checkout/5358.json"
  }
}
```