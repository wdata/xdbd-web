/*
*  存放数据：
* */
/*
 *  x、y轴各一维度，一度量 2维度；颜色，标签
 * */
var dataA2 = {
    "code": 0,
    "success": true,
    "message": "操作成功！",
    "timestamp": 1513132686892,
    "data": {
        "dimValues": {
            "d65cb6070e7c4b08a895e20a224cd7c7": [
                "办公用品",
                "家具",
                "技术"
            ],
            "b963fc4b129048bba7a3529d5dd35acb": [
                "广东省",
                "江苏省"
            ],
            "7ebf1c3d924249ed9b8dd18f37151aef": [
                "东亚"
            ]
        },
        "meaMaxMin": {
            "5d4e0324434246fb8fa0f300bcb9cb22": {
                "max": 1371.42,
                "min": 74.52
            }
        },
        "records": [
            {
                "category": "办公用品",
                "sales_amount": 96.36,
                "province": "广东省",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 74.52,
                "province": "江苏省",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 1371.42,
                "province": "广东省",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 897.372,
                "province": "江苏省",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 634.5,
                "province": "广东省",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 954.36,
                "province": "江苏省",
                "region": "东亚"
            }
        ],
        "queryJson": {
            "biSetId": "2fd9366eb8644dee871a7d5964e42ca6",
            "dataModelId": "d39bbee2d74d4c62925d55fa1f588dbc",
            "limit": null,
            "x": [
                {
                    "fieldId": "d65cb6070e7c4b08a895e20a224cd7c7",
                    "field": "category",
                    "fieldAlias": "类别",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "y": [
                {
                    "fieldId": "5d4e0324434246fb8fa0f300bcb9cb22",
                    "field": "sales_amount",
                    "fieldAlias": "销售额",
                    "order": "ASC",
                    "baseDataType": 4,
                    "dataType": 4,
                    "dimMea": 1,
                    "disCon": 1,
                    "aggregation": null
                }
            ],
            "colour": [
                {
                    "fieldId": "b963fc4b129048bba7a3529d5dd35acb",
                    "field": "province",
                    "fieldAlias": "省",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "size": [],
            "angle": [],
            "detail": [],
            "label": [
                {
                    "fieldId": "7ebf1c3d924249ed9b8dd18f37151aef",
                    "field": "region",
                    "fieldAlias": "地区",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "filter": [
                {
                    "fieldId": "b963fc4b129048bba7a3529d5dd35acb",
                    "field": "province",
                    "fieldAlias": "省",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "listFilter": {
                        "operator": "IN",
                        "values": [
                            "广东省",
                            "江苏省"
                        ]
                    },
                    "textFilter": null,
                    "conditionFilter": null,
                    "advancedFilter": null,
                    "numericFilter": null,
                    "dateFilter": null
                }
            ]
        },
        "drawHelper": {
            "meaAxis": "y"
        }
    }
}
/*
 *  x、y轴各一维度，一度量  3维度：颜色、尺寸、标签
 * */
var dataA3 = {
    "code": 0,
    "success": true,
    "message": "操作成功！",
    "timestamp": 1513132633835,
    "data": {
        "dimValues": {
            "d65cb6070e7c4b08a895e20a224cd7c7": [
                "办公用品",
                "家具",
                "技术"
            ],
            "b963fc4b129048bba7a3529d5dd35acb": [
                "广东省",
                "江苏省"
            ],
            "7ebf1c3d924249ed9b8dd18f37151aef": [
                "东亚"
            ],
            "bb03db66322842dca0bb60b24e4e7898": [
                "公司",
                "家庭办公室",
                "消费者"
            ]
        },
        "meaMaxMin": {
            "5d4e0324434246fb8fa0f300bcb9cb22": {
                "max": 1371.42,
                "min": 44.28
            }
        },
        "records": [
            {
                "category": "办公用品",
                "sales_amount": 96.36,
                "province": "广东省",
                "market_segment": "公司",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 348.81,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 148.56,
                "province": "广东省",
                "market_segment": "消费者",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 74.52,
                "province": "江苏省",
                "market_segment": "公司",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 336,
                "province": "江苏省",
                "market_segment": "家庭办公室",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 44.28,
                "province": "江苏省",
                "market_segment": "消费者",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 323.46,
                "province": "广东省",
                "market_segment": "公司",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 101.4,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 1371.42,
                "province": "广东省",
                "market_segment": "消费者",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 148.92,
                "province": "江苏省",
                "market_segment": "公司",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 509.4,
                "province": "江苏省",
                "market_segment": "家庭办公室",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 897.372,
                "province": "江苏省",
                "market_segment": "消费者",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 634.5,
                "province": "广东省",
                "market_segment": "公司",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 86.88,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 494.64,
                "province": "广东省",
                "market_segment": "消费者",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 973.32,
                "province": "江苏省",
                "market_segment": "公司",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 712.8,
                "province": "江苏省",
                "market_segment": "家庭办公室",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 954.36,
                "province": "江苏省",
                "market_segment": "消费者",
                "region": "东亚"
            }
        ],
        "queryJson": {
            "biSetId": "2fd9366eb8644dee871a7d5964e42ca6",
            "dataModelId": "d39bbee2d74d4c62925d55fa1f588dbc",
            "limit": null,
            "x": [
                {
                    "fieldId": "d65cb6070e7c4b08a895e20a224cd7c7",
                    "field": "category",
                    "fieldAlias": "类别",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "y": [
                {
                    "fieldId": "5d4e0324434246fb8fa0f300bcb9cb22",
                    "field": "sales_amount",
                    "fieldAlias": "销售额",
                    "order": "ASC",
                    "baseDataType": 4,
                    "dataType": 4,
                    "dimMea": 1,
                    "disCon": 1,
                    "aggregation": null
                }
            ],
            "colour": [
                {
                    "fieldId": "b963fc4b129048bba7a3529d5dd35acb",
                    "field": "province",
                    "fieldAlias": "省",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "size": [
                {
                    "fieldId": "bb03db66322842dca0bb60b24e4e7898",
                    "field": "market_segment",
                    "fieldAlias": "细分市场",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "angle": [],
            "detail": [],
            "label": [
                {
                    "fieldId": "7ebf1c3d924249ed9b8dd18f37151aef",
                    "field": "region",
                    "fieldAlias": "地区",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "filter": [
                {
                    "fieldId": "b963fc4b129048bba7a3529d5dd35acb",
                    "field": "province",
                    "fieldAlias": "省",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "listFilter": {
                        "operator": "IN",
                        "values": [
                            "广东省",
                            "江苏省"
                        ]
                    },
                    "textFilter": null,
                    "conditionFilter": null,
                    "advancedFilter": null,
                    "numericFilter": null,
                    "dateFilter": null
                }
            ]
        },
        "drawHelper": {
            "meaAxis": "y"
        }
    }
}
/*
 *  x、y轴各一维度，一度量  4维度：颜色、尺寸、细分、标签
 * */
var dataA4 = {
    "code": 0,
    "success": true,
    "message": "操作成功！",
    "timestamp": 1513132727097,
    "data": {
        "dimValues": {
            "d65cb6070e7c4b08a895e20a224cd7c7": [
                "办公用品",
                "家具",
                "技术"
            ],
            "b963fc4b129048bba7a3529d5dd35acb": [
                "广东省",
                "江苏省"
            ],
            "e8c46f4ac23b409c971e45c90cc0ed74": [
                "Foshan",
                "Guangzhou",
                "Jiangmen",
                "Licheng",
                "Luoyang",
                "Shantou",
                "Shenzhen",
                "Yangjiang",
                "Zhuhai",
                "Chaozhou",
                "Donghai",
                "Heyuan",
                "Huizhou",
                "Jieyang",
                "Wuchuan",
                "Dongguan",
                "Lianzhou",
                "Meizhou",
                "Shanwei",
                "Xinyi",
                "Zhanjiang",
                "Changshu",
                "Changzhou",
                "Jiangyan",
                "Nantong",
                "Suzhou",
                "Taizhou",
                "Xinghua",
                "Yancheng",
                "Yangzhou",
                "Huaiyin",
                "Qidong",
                "Taixing",
                "Wuxi",
                "Xuzhou",
                "Gaoyou",
                "Jiangdu",
                "Zhenjiang",
                "Chengjiang",
                "Zhaoqing"
            ],
            "7ebf1c3d924249ed9b8dd18f37151aef": [
                "东亚"
            ],
            "bb03db66322842dca0bb60b24e4e7898": [
                "公司",
                "家庭办公室",
                "消费者"
            ]
        },
        "meaMaxMin": {
            "5d4e0324434246fb8fa0f300bcb9cb22": {
                "max": 5049,
                "min": 7.77
            }
        },
        "records": [
            {
                "category": "办公用品",
                "sales_amount": 46.53,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Foshan",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 118.17,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Guangzhou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 38.88,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Jiangmen",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 21.48,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Licheng",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 24.84,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Luoyang",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 185.64,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Shantou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 96.36,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Shenzhen",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 109.32,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Yangjiang",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 27.3,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Zhuhai",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 50.04,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Chaozhou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 829.44,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Donghai",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 7.77,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Heyuan",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 227.64,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Huizhou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 199.92,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Jieyang",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 348.81,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Luoyang",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 263.1,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Shantou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 14.28,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Shenzhen",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 141.12,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Wuchuan",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 181.44,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Zhuhai",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 95.22,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Chaozhou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 32.4,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Dongguan",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 25.92,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Donghai",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 59.4,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Foshan",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 148.56,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Guangzhou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 370.26,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Huizhou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 149.58,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Jiangmen",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 84.78,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Jieyang",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 139.86,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Lianzhou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 372.96,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Luoyang",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 565.02,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Meizhou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 18.09,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Shantou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 62.46,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Shanwei",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 248.52,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Shenzhen",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 96,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Wuchuan",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 1285.05,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Xinyi",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 925.92,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Zhanjiang",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 79.56,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Zhuhai",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 78.75,
                "province": "江苏省",
                "market_segment": "公司",
                "city": "Changshu",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 551.4,
                "province": "江苏省",
                "market_segment": "公司",
                "city": "Changzhou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 79.47,
                "province": "江苏省",
                "market_segment": "公司",
                "city": "Jiangyan",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 67.05,
                "province": "江苏省",
                "market_segment": "公司",
                "city": "Nantong",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 74.52,
                "province": "江苏省",
                "market_segment": "公司",
                "city": "Suzhou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 143.82,
                "province": "江苏省",
                "market_segment": "公司",
                "city": "Taizhou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 89.46,
                "province": "江苏省",
                "market_segment": "公司",
                "city": "Xinghua",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 241.92,
                "province": "江苏省",
                "market_segment": "公司",
                "city": "Yancheng",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 76.74,
                "province": "江苏省",
                "market_segment": "公司",
                "city": "Yangzhou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 155.34,
                "province": "江苏省",
                "market_segment": "家庭办公室",
                "city": "Huaiyin",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 336,
                "province": "江苏省",
                "market_segment": "家庭办公室",
                "city": "Qidong",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 78.84,
                "province": "江苏省",
                "market_segment": "家庭办公室",
                "city": "Taixing",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 99,
                "province": "江苏省",
                "market_segment": "家庭办公室",
                "city": "Taizhou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 17.88,
                "province": "江苏省",
                "market_segment": "家庭办公室",
                "city": "Wuxi",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 218.64,
                "province": "江苏省",
                "market_segment": "家庭办公室",
                "city": "Xinghua",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 17.88,
                "province": "江苏省",
                "market_segment": "家庭办公室",
                "city": "Xuzhou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 44.28,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Changzhou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 3670.8,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Gaoyou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 632.07,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Huaiyin",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 68.67,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Jiangdu",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 39.48,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Nantong",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 138.39,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Suzhou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 703.35,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Wuxi",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 126.54,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Xinghua",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 485.55,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Xuzhou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 340.62,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Yancheng",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 107.55,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Yangzhou",
                "region": "东亚"
            },
            {
                "category": "办公用品",
                "sales_amount": 39.45,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Zhenjiang",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 884.52,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Guangzhou",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 2436.672,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Jiangmen",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 94.8,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Licheng",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 617.55,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Luoyang",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 18.9,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Meizhou",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 323.46,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Shantou",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 361.86,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Shenzhen",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 286.32,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Zhanjiang",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 173.79,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Zhuhai",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 316.44,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Guangzhou",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 1289.76,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Heyuan",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 101.4,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Jiangmen",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 344.61,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Jieyang",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 441,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Shantou",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 173.34,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Shenzhen",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 250.2,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Xinyi",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 506.88,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Zhuhai",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 87.9,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Chaozhou",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 1961.82,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Dongguan",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 1371.42,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Guangzhou",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 666.72,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Huizhou",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 284.4,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Jieyang",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 1444.548,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Luoyang",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 100.65,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Shantou",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 914.28,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Shanwei",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 246.9,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Shenzhen",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 171.42,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Wuchuan",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 1038.492,
                "province": "江苏省",
                "market_segment": "公司",
                "city": "Changshu",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 222.36,
                "province": "江苏省",
                "market_segment": "公司",
                "city": "Changzhou",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 986.202,
                "province": "江苏省",
                "market_segment": "公司",
                "city": "Jiangyan",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 547.11,
                "province": "江苏省",
                "market_segment": "公司",
                "city": "Nantong",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 148.92,
                "province": "江苏省",
                "market_segment": "公司",
                "city": "Suzhou",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 1021.14,
                "province": "江苏省",
                "market_segment": "公司",
                "city": "Wuxi",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 2491.2,
                "province": "江苏省",
                "market_segment": "公司",
                "city": "Xinghua",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 159.6,
                "province": "江苏省",
                "market_segment": "公司",
                "city": "Yancheng",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 991.92,
                "province": "江苏省",
                "market_segment": "家庭办公室",
                "city": "Chengjiang",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 114.3,
                "province": "江苏省",
                "market_segment": "家庭办公室",
                "city": "Huaiyin",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 509.4,
                "province": "江苏省",
                "market_segment": "家庭办公室",
                "city": "Licheng",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 191.61,
                "province": "江苏省",
                "market_segment": "家庭办公室",
                "city": "Wuxi",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 94.8,
                "province": "江苏省",
                "market_segment": "家庭办公室",
                "city": "Xinghua",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 710.76,
                "province": "江苏省",
                "market_segment": "家庭办公室",
                "city": "Xuzhou",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 401.04,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Changshu",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 1444.128,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Gaoyou",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 496.53,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Jiangdu",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 190.17,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Qidong",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 5049,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Wuxi",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 897.372,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Xuzhou",
                "region": "东亚"
            },
            {
                "category": "家具",
                "sales_amount": 2472.66,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Yancheng",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 166.89,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Foshan",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 88.26,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Guangzhou",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 379.08,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Huizhou",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 207.6,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Jiangmen",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 855.75,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Luoyang",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 122.13,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Shantou",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 634.5,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Shenzhen",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 130.74,
                "province": "广东省",
                "market_segment": "公司",
                "city": "Yangjiang",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 785.61,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Jiangmen",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 639.96,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Jieyang",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 86.88,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Shanwei",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 176.88,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Shenzhen",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 354.15,
                "province": "广东省",
                "market_segment": "家庭办公室",
                "city": "Zhuhai",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 373.59,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Chaozhou",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 511.65,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Donghai",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 1324.35,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Guangzhou",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 1272.48,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Jiangmen",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 726.39,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Jieyang",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 369.45,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Lianzhou",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 3216.24,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Luoyang",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 45.42,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Shantou",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 604.5,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Shanwei",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 122.76,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Shenzhen",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 236.1,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Wuchuan",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 494.64,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Xinyi",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 723.66,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Zhanjiang",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 760.38,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Zhaoqing",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 203.55,
                "province": "广东省",
                "market_segment": "消费者",
                "city": "Zhuhai",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 381.63,
                "province": "江苏省",
                "market_segment": "公司",
                "city": "Changzhou",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 973.32,
                "province": "江苏省",
                "market_segment": "公司",
                "city": "Zhenjiang",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 185.28,
                "province": "江苏省",
                "market_segment": "家庭办公室",
                "city": "Huaiyin",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 712.8,
                "province": "江苏省",
                "market_segment": "家庭办公室",
                "city": "Licheng",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 317.94,
                "province": "江苏省",
                "market_segment": "家庭办公室",
                "city": "Xinghua",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 954.36,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Changzhou",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 170.04,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Gaoyou",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 259.74,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Jiangdu",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 1501.2,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Xuzhou",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 1274.88,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Yangzhou",
                "region": "东亚"
            },
            {
                "category": "技术",
                "sales_amount": 1274.16,
                "province": "江苏省",
                "market_segment": "消费者",
                "city": "Zhenjiang",
                "region": "东亚"
            }
        ],
        "queryJson": {
            "biSetId": "2fd9366eb8644dee871a7d5964e42ca6",
            "dataModelId": "d39bbee2d74d4c62925d55fa1f588dbc",
            "limit": null,
            "x": [
                {
                    "fieldId": "d65cb6070e7c4b08a895e20a224cd7c7",
                    "field": "category",
                    "fieldAlias": "类别",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "y": [
                {
                    "fieldId": "5d4e0324434246fb8fa0f300bcb9cb22",
                    "field": "sales_amount",
                    "fieldAlias": "销售额",
                    "order": "ASC",
                    "baseDataType": 4,
                    "dataType": 4,
                    "dimMea": 1,
                    "disCon": 1,
                    "aggregation": null
                }
            ],
            "colour": [
                {
                    "fieldId": "b963fc4b129048bba7a3529d5dd35acb",
                    "field": "province",
                    "fieldAlias": "省",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "size": [
                {
                    "fieldId": "bb03db66322842dca0bb60b24e4e7898",
                    "field": "market_segment",
                    "fieldAlias": "细分市场",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "angle": [],
            "detail": [
                {
                    "fieldId": "e8c46f4ac23b409c971e45c90cc0ed74",
                    "field": "city",
                    "fieldAlias": "城市",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "label": [
                {
                    "fieldId": "7ebf1c3d924249ed9b8dd18f37151aef",
                    "field": "region",
                    "fieldAlias": "地区",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "filter": [
                {
                    "fieldId": "b963fc4b129048bba7a3529d5dd35acb",
                    "field": "province",
                    "fieldAlias": "省",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "listFilter": {
                        "operator": "IN",
                        "values": [
                            "广东省",
                            "江苏省"
                        ]
                    },
                    "textFilter": null,
                    "conditionFilter": null,
                    "advancedFilter": null,
                    "numericFilter": null,
                    "dateFilter": null
                }
            ]
        },
        "drawHelper": {
            "meaAxis": "y"
        }
    }
};
/*
 *  x、y轴各一维度，一度量  1维度1度量：颜色：维度，尺寸：度量
 * */
var dataB2 = {
    "code": 0,
    "success": true,
    "message": "操作成功！",
    "timestamp": 1513331448220,
    "data": {
        "dimValues": {
            "d65cb6070e7c4b08a895e20a224cd7c7": [
                "办公用品",
                "家具",
                "技术"
            ],
            "b963fc4b129048bba7a3529d5dd35acb": [
                "广东省",
                "江苏省",
                "江西省",
                "浙江省",
                "湖南省"
            ]
        },
        "meaMaxMin": {
            "dece75dd220047d89363add87f241906": {
                "max": 370.86,
                "min": -205.188
            },
            "5d4e0324434246fb8fa0f300bcb9cb22": {
                "max": 2076.606,
                "min": 72
            }
        },
        "records": [
            {
                "category": "办公用品",
                "sales_amount": 96.36,
                "province": "广东省",
                "profit": 12.48
            },
            {
                "category": "办公用品",
                "sales_amount": 74.52,
                "province": "江苏省",
                "profit": 10.35
            },
            {
                "category": "办公用品",
                "sales_amount": 72,
                "province": "江西省",
                "profit": 4.32
            },
            {
                "category": "办公用品",
                "sales_amount": 146.52,
                "province": "浙江省",
                "profit": 40.95
            },
            {
                "category": "办公用品",
                "sales_amount": 161.91,
                "province": "湖南省",
                "profit": 43.65
            },
            {
                "category": "家具",
                "sales_amount": 1371.42,
                "province": "广东省",
                "profit": 137.07
            },
            {
                "category": "家具",
                "sales_amount": 897.372,
                "province": "江苏省",
                "profit": -205.188
            },
            {
                "category": "家具",
                "sales_amount": 219.78,
                "province": "江西省",
                "profit": 59.34
            },
            {
                "category": "家具",
                "sales_amount": 2076.606,
                "province": "浙江省",
                "profit": 59.1660000000001
            },
            {
                "category": "家具",
                "sales_amount": 377.37,
                "province": "湖南省",
                "profit": 162.12
            },
            {
                "category": "技术",
                "sales_amount": 634.5,
                "province": "广东省",
                "profit": 272.7
            },
            {
                "category": "技术",
                "sales_amount": 954.36,
                "province": "江苏省",
                "profit": 343.53
            },
            {
                "category": "技术",
                "sales_amount": 940.32,
                "province": "江西省",
                "profit": 141.03
            },
            {
                "category": "技术",
                "sales_amount": 756.9,
                "province": "浙江省",
                "profit": 370.86
            },
            {
                "category": "技术",
                "sales_amount": 483.6,
                "province": "湖南省",
                "profit": 28.92
            }
        ],
        "queryJson": {
            "biSetId": "2fd9366eb8644dee871a7d5964e42ca6",
            "dataModelId": "d39bbee2d74d4c62925d55fa1f588dbc",
            "limit": null,
            "x": [
                {
                    "fieldId": "d65cb6070e7c4b08a895e20a224cd7c7",
                    "field": "category",
                    "fieldAlias": "类别",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "y": [
                {
                    "fieldId": "5d4e0324434246fb8fa0f300bcb9cb22",
                    "field": "sales_amount",
                    "fieldAlias": "销售额",
                    "order": "ASC",
                    "baseDataType": 4,
                    "dataType": 4,
                    "dimMea": 1,
                    "disCon": 1,
                    "aggregation": null
                }
            ],
            "colour": [
                {
                    "fieldId": "b963fc4b129048bba7a3529d5dd35acb",
                    "field": "province",
                    "fieldAlias": "省",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "size": [
                {
                    "fieldId": "dece75dd220047d89363add87f241906",
                    "field": "profit",
                    "fieldAlias": "利润",
                    "order": "ASC",
                    "baseDataType": 4,
                    "dataType": 4,
                    "dimMea": 1,
                    "disCon": 1,
                    "aggregation": null
                }
            ],
            "angle": [],
            "detail": [],
            "label": [],
            "filter": [
                {
                    "fieldId": "b963fc4b129048bba7a3529d5dd35acb",
                    "field": "province",
                    "fieldAlias": "省",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "listFilter": {
                        "operator": "IN",
                        "values": [
                            "广东省",
                            "江苏省",
                            "湖南省",
                            "浙江省",
                            "江西省"
                        ]
                    },
                    "textFilter": null,
                    "conditionFilter": null,
                    "advancedFilter": null,
                    "numericFilter": null,
                    "dateFilter": null
                }
            ]
        },
        "drawHelper": {
            "meaAxis": "y"
        }
    }
}
/*
 *  x、y轴各一维度，一度量  1维度2度量：颜色：维度，尺寸：度量，标签：度量
 * */
var dataB3 = {
    "code": 0,
    "success": true,
    "message": "操作成功！",
    "timestamp": 1513391419657,
    "data": {
        "dimValues": {
            "d65cb6070e7c4b08a895e20a224cd7c7": [
                "办公用品",
                "家具",
                "技术"
            ],
            "b963fc4b129048bba7a3529d5dd35acb": [
                "广东省",
                "江苏省",
                "江西省",
                "浙江省",
                "湖南省"
            ]
        },
        "meaMaxMin": {
            "dece75dd220047d89363add87f241906": {
                "max": 370.86,
                "min": -205.188
            },
            "5d4e0324434246fb8fa0f300bcb9cb22": {
                "max": 2076.606,
                "min": 72
            },
            "7d1ef4c1759240f9bb9297652f7f63a9": {
                "max": 7,
                "min": 2
            }
        },
        "records": [
            {
                "category": "办公用品",
                "sales_amount": 96.36,
                "province": "广东省",
                "profit": 12.48,
                "sales_count": 4
            },
            {
                "category": "办公用品",
                "sales_amount": 74.52,
                "province": "江苏省",
                "profit": 10.35,
                "sales_count": 3
            },
            {
                "category": "办公用品",
                "sales_amount": 72,
                "province": "江西省",
                "profit": 4.32,
                "sales_count": 3
            },
            {
                "category": "办公用品",
                "sales_amount": 146.52,
                "province": "浙江省",
                "profit": 40.95,
                "sales_count": 3
            },
            {
                "category": "办公用品",
                "sales_amount": 161.91,
                "province": "湖南省",
                "profit": 43.65,
                "sales_count": 3
            },
            {
                "category": "家具",
                "sales_amount": 1371.42,
                "province": "广东省",
                "profit": 137.07,
                "sales_count": 3
            },
            {
                "category": "家具",
                "sales_amount": 897.372,
                "province": "江苏省",
                "profit": -205.188,
                "sales_count": 4
            },
            {
                "category": "家具",
                "sales_amount": 219.78,
                "province": "江西省",
                "profit": 59.34,
                "sales_count": 2
            },
            {
                "category": "家具",
                "sales_amount": 2076.606,
                "province": "浙江省",
                "profit": 59.1660000000001,
                "sales_count": 6
            },
            {
                "category": "家具",
                "sales_amount": 377.37,
                "province": "湖南省",
                "profit": 162.12,
                "sales_count": 7
            },
            {
                "category": "技术",
                "sales_amount": 634.5,
                "province": "广东省",
                "profit": 272.7,
                "sales_count": 5
            },
            {
                "category": "技术",
                "sales_amount": 954.36,
                "province": "江苏省",
                "profit": 343.53,
                "sales_count": 3
            },
            {
                "category": "技术",
                "sales_amount": 940.32,
                "province": "江西省",
                "profit": 141.03,
                "sales_count": 3
            },
            {
                "category": "技术",
                "sales_amount": 756.9,
                "province": "浙江省",
                "profit": 370.86,
                "sales_count": 2
            },
            {
                "category": "技术",
                "sales_amount": 483.6,
                "province": "湖南省",
                "profit": 28.92,
                "sales_count": 4
            }
        ],
        "queryJson": {
            "biSetId": "2fd9366eb8644dee871a7d5964e42ca6",
            "dataModelId": "d39bbee2d74d4c62925d55fa1f588dbc",
            "limit": null,
            "x": [
                {
                    "fieldId": "d65cb6070e7c4b08a895e20a224cd7c7",
                    "field": "category",
                    "fieldAlias": "类别",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "y": [
                {
                    "fieldId": "5d4e0324434246fb8fa0f300bcb9cb22",
                    "field": "sales_amount",
                    "fieldAlias": "销售额",
                    "order": "ASC",
                    "baseDataType": 4,
                    "dataType": 4,
                    "dimMea": 1,
                    "disCon": 1,
                    "aggregation": null
                }
            ],
            "colour": [
                {
                    "fieldId": "b963fc4b129048bba7a3529d5dd35acb",
                    "field": "province",
                    "fieldAlias": "省",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "size": [
                {
                    "fieldId": "dece75dd220047d89363add87f241906",
                    "field": "profit",
                    "fieldAlias": "利润",
                    "order": "ASC",
                    "baseDataType": 4,
                    "dataType": 4,
                    "dimMea": 1,
                    "disCon": 1,
                    "aggregation": null
                }
            ],
            "angle": [],
            "detail": [],
            "label": [
                {
                    "fieldId": "7d1ef4c1759240f9bb9297652f7f63a9",
                    "field": "sales_count",
                    "fieldAlias": "数量",
                    "order": "ASC",
                    "baseDataType": 4,
                    "dataType": 4,
                    "dimMea": 1,
                    "disCon": 1,
                    "aggregation": null
                }
            ],
            "filter": [
                {
                    "fieldId": "b963fc4b129048bba7a3529d5dd35acb",
                    "field": "province",
                    "fieldAlias": "省",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "listFilter": {
                        "operator": "IN",
                        "values": [
                            "广东省",
                            "江苏省",
                            "湖南省",
                            "浙江省",
                            "江西省"
                        ]
                    },
                    "textFilter": null,
                    "conditionFilter": null,
                    "advancedFilter": null,
                    "numericFilter": null,
                    "dateFilter": null
                }
            ]
        },
        "drawHelper": {
            "meaAxis": "y"
        }
    }
}
/*
 *  x、y轴各一维度，一度量  2度量：颜色：度量，尺寸：度量
 * */
var dataB4 = {
    "code": 0,
    "success": true,
    "message": "操作成功！",
    "timestamp": 1513410461160,
    "data": {
        "dimValues": {
            "d65cb6070e7c4b08a895e20a224cd7c7": [
                "办公用品",
                "家具",
                "技术"
            ]
        },
        "meaMaxMin": {
            "dece75dd220047d89363add87f241906": {
                "max": 272.7,
                "min": 4.32
            },
            "5d4e0324434246fb8fa0f300bcb9cb22": {
                "max": 634.5,
                "min": 72
            },
            "7d1ef4c1759240f9bb9297652f7f63a9": {
                "max": 5,
                "min": 2
            }
        },
        "records": [
            {
                "category": "办公用品",
                "sales_amount": 72,
                "sales_count": 3,
                "profit": 4.32
            },
            {
                "category": "家具",
                "sales_amount": 219.78,
                "sales_count": 2,
                "profit": 59.34
            },
            {
                "category": "技术",
                "sales_amount": 634.5,
                "sales_count": 5,
                "profit": 272.7
            }
        ],
        "queryJson": {
            "biSetId": "2fd9366eb8644dee871a7d5964e42ca6",
            "dataModelId": "d39bbee2d74d4c62925d55fa1f588dbc",
            "limit": null,
            "x": [
                {
                    "fieldId": "d65cb6070e7c4b08a895e20a224cd7c7",
                    "field": "category",
                    "fieldAlias": "类别",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "y": [
                {
                    "fieldId": "5d4e0324434246fb8fa0f300bcb9cb22",
                    "field": "sales_amount",
                    "fieldAlias": "销售额",
                    "order": "ASC",
                    "baseDataType": 4,
                    "dataType": 4,
                    "dimMea": 1,
                    "disCon": 1,
                    "aggregation": null
                }
            ],
            "colour": [
                {
                    "fieldId": "7d1ef4c1759240f9bb9297652f7f63a9",
                    "field": "sales_count",
                    "fieldAlias": "数量",
                    "order": "ASC",
                    "baseDataType": 4,
                    "dataType": 4,
                    "dimMea": 1,
                    "disCon": 1,
                    "aggregation": null
                }
            ],
            "size": [
                {
                    "fieldId": "dece75dd220047d89363add87f241906",
                    "field": "profit",
                    "fieldAlias": "利润",
                    "order": "ASC",
                    "baseDataType": 4,
                    "dataType": 4,
                    "dimMea": 1,
                    "disCon": 1,
                    "aggregation": null
                }
            ],
            "angle": [],
            "detail": [],
            "label": [],
            "filter": [
                {
                    "fieldId": "b963fc4b129048bba7a3529d5dd35acb",
                    "field": "province",
                    "fieldAlias": "省",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "listFilter": {
                        "operator": "IN",
                        "values": [
                            "广东省",
                            "江苏省",
                            "湖南省",
                            "浙江省",
                            "江西省"
                        ]
                    },
                    "textFilter": null,
                    "conditionFilter": null,
                    "advancedFilter": null,
                    "numericFilter": null,
                    "dateFilter": null
                }
            ]
        },
        "drawHelper": {
            "meaAxis": "y"
        }
    }
}
/*
 *  x、y轴各一维度，一度量 1维度
 * */
var stackDataA1 = {
    "code": 0,
    "success": true,
    "message": "操作成功！",
    "timestamp": 1513584241314,
    "data": {
        "dimValues": {
            "d65cb6070e7c4b08a895e20a224cd7c7": [
                "办公用品",
                "家具",
                "技术"
            ],
            "7ebf1c3d924249ed9b8dd18f37151aef": [
                "东亚",
                "东南亚",
                "东欧",
                "东非",
                "中亚",
                "中美洲",
                "中非",
                "加勒比海",
                "加拿大",
                "北欧",
                "北非",
                "南亚",
                "南欧",
                "南美",
                "南部非洲",
                "大洋洲",
                "美国东部",
                "美国中部",
                "美国南部",
                "美国西部",
                "西亚",
                "西欧",
                "西非"
            ]
        },
        "meaMaxMin": {
            "5d4e0324434246fb8fa0f300bcb9cb22": {
                "max": 2624.04,
                "min": 9.618
            }
        },
        "records": [
            {
                "region": "东亚",
                "sales_amount": 197.28,
                "category": "办公用品"
            },
            {
                "region": "东亚",
                "sales_amount": 307.23,
                "category": "家具"
            },
            {
                "region": "东亚",
                "sales_amount": 1422.24,
                "category": "技术"
            },
            {
                "region": "东南亚",
                "sales_amount": 121.074,
                "category": "办公用品"
            },
            {
                "region": "东南亚",
                "sales_amount": 600.84,
                "category": "家具"
            },
            {
                "region": "东南亚",
                "sales_amount": 589.815,
                "category": "技术"
            },
            {
                "region": "东欧",
                "sales_amount": 27.18,
                "category": "办公用品"
            },
            {
                "region": "东欧",
                "sales_amount": 408.42,
                "category": "家具"
            },
            {
                "region": "东欧",
                "sales_amount": 2570.76,
                "category": "技术"
            },
            {
                "region": "东非",
                "sales_amount": 44.94,
                "category": "办公用品"
            },
            {
                "region": "东非",
                "sales_amount": 459.39,
                "category": "家具"
            },
            {
                "region": "东非",
                "sales_amount": 84.96,
                "category": "技术"
            },
            {
                "region": "中亚",
                "sales_amount": 204.18,
                "category": "办公用品"
            },
            {
                "region": "中亚",
                "sales_amount": 47.88,
                "category": "家具"
            },
            {
                "region": "中亚",
                "sales_amount": 91.152,
                "category": "技术"
            },
            {
                "region": "中美洲",
                "sales_amount": 13.08,
                "category": "办公用品"
            },
            {
                "region": "中美洲",
                "sales_amount": 210.64,
                "category": "家具"
            },
            {
                "region": "中美洲",
                "sales_amount": 326.18632,
                "category": "技术"
            },
            {
                "region": "中非",
                "sales_amount": 62.61,
                "category": "办公用品"
            },
            {
                "region": "中非",
                "sales_amount": 166.71,
                "category": "家具"
            },
            {
                "region": "中非",
                "sales_amount": 143.1,
                "category": "技术"
            },
            {
                "region": "加勒比海",
                "sales_amount": 42.72,
                "category": "办公用品"
            },
            {
                "region": "加勒比海",
                "sales_amount": 529.32,
                "category": "家具"
            },
            {
                "region": "加勒比海",
                "sales_amount": 153.40752,
                "category": "技术"
            },
            {
                "region": "加拿大",
                "sales_amount": 20.16,
                "category": "办公用品"
            },
            {
                "region": "加拿大",
                "sales_amount": 25.23,
                "category": "家具"
            },
            {
                "region": "加拿大",
                "sales_amount": 266.25,
                "category": "技术"
            },
            {
                "region": "北欧",
                "sales_amount": 79.2,
                "category": "办公用品"
            },
            {
                "region": "北欧",
                "sales_amount": 2624.04,
                "category": "家具"
            },
            {
                "region": "北欧",
                "sales_amount": 388.92,
                "category": "技术"
            },
            {
                "region": "北非",
                "sales_amount": 62.16,
                "category": "办公用品"
            },
            {
                "region": "北非",
                "sales_amount": 125.34,
                "category": "家具"
            },
            {
                "region": "北非",
                "sales_amount": 357.36,
                "category": "技术"
            },
            {
                "region": "南亚",
                "sales_amount": 11.4,
                "category": "办公用品"
            },
            {
                "region": "南亚",
                "sales_amount": 361.2,
                "category": "家具"
            },
            {
                "region": "南亚",
                "sales_amount": 1039.32,
                "category": "技术"
            },
            {
                "region": "南欧",
                "sales_amount": 36.72,
                "category": "办公用品"
            },
            {
                "region": "南欧",
                "sales_amount": 854.28,
                "category": "家具"
            },
            {
                "region": "南欧",
                "sales_amount": 28.17,
                "category": "技术"
            },
            {
                "region": "南美",
                "sales_amount": 35.44,
                "category": "办公用品"
            },
            {
                "region": "南美",
                "sales_amount": 252.16,
                "category": "家具"
            },
            {
                "region": "南美",
                "sales_amount": 344.64,
                "category": "技术"
            },
            {
                "region": "南部非洲",
                "sales_amount": 23.04,
                "category": "办公用品"
            },
            {
                "region": "南部非洲",
                "sales_amount": 111.12,
                "category": "家具"
            },
            {
                "region": "南部非洲",
                "sales_amount": 245.13,
                "category": "技术"
            },
            {
                "region": "大洋洲",
                "sales_amount": 35.883,
                "category": "办公用品"
            },
            {
                "region": "大洋洲",
                "sales_amount": 397.143,
                "category": "家具"
            },
            {
                "region": "大洋洲",
                "sales_amount": 504.54,
                "category": "技术"
            },
            {
                "region": "美国东部",
                "sales_amount": 9.618,
                "category": "办公用品"
            },
            {
                "region": "美国东部",
                "sales_amount": 71.372,
                "category": "家具"
            },
            {
                "region": "美国东部",
                "sales_amount": 45,
                "category": "技术"
            },
            {
                "region": "美国中部",
                "sales_amount": 68.81,
                "category": "办公用品"
            },
            {
                "region": "美国中部",
                "sales_amount": 190.92,
                "category": "家具"
            },
            {
                "region": "美国中部",
                "sales_amount": 1097.544,
                "category": "技术"
            },
            {
                "region": "美国南部",
                "sales_amount": 22.368,
                "category": "办公用品"
            },
            {
                "region": "美国南部",
                "sales_amount": 261.96,
                "category": "家具"
            },
            {
                "region": "美国南部",
                "sales_amount": 74.112,
                "category": "技术"
            },
            {
                "region": "美国西部",
                "sales_amount": 14.62,
                "category": "办公用品"
            },
            {
                "region": "美国西部",
                "sales_amount": 48.86,
                "category": "家具"
            },
            {
                "region": "美国西部",
                "sales_amount": 907.152,
                "category": "技术"
            },
            {
                "region": "西亚",
                "sales_amount": 29.28,
                "category": "办公用品"
            },
            {
                "region": "西亚",
                "sales_amount": 24.99,
                "category": "家具"
            },
            {
                "region": "西亚",
                "sales_amount": 122.91,
                "category": "技术"
            },
            {
                "region": "西欧",
                "sales_amount": 25.26,
                "category": "办公用品"
            },
            {
                "region": "西欧",
                "sales_amount": 268.164,
                "category": "家具"
            },
            {
                "region": "西欧",
                "sales_amount": 2167.296,
                "category": "技术"
            },
            {
                "region": "西非",
                "sales_amount": 54.66,
                "category": "办公用品"
            },
            {
                "region": "西非",
                "sales_amount": 15.417,
                "category": "家具"
            },
            {
                "region": "西非",
                "sales_amount": 19.593,
                "category": "技术"
            }
        ],
        "queryJson": {
            "biSetId": "2fd9366eb8644dee871a7d5964e42ca6",
            "dataModelId": "d39bbee2d74d4c62925d55fa1f588dbc",
            "limit": null,
            "x": [
                {
                    "fieldId": "7ebf1c3d924249ed9b8dd18f37151aef",
                    "field": "region",
                    "fieldAlias": "地区",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "y": [
                {
                    "fieldId": "5d4e0324434246fb8fa0f300bcb9cb22",
                    "field": "sales_amount",
                    "fieldAlias": "销售额",
                    "order": "ASC",
                    "baseDataType": 4,
                    "dataType": 4,
                    "dimMea": 1,
                    "disCon": 1,
                    "aggregation": null
                }
            ],
            "colour": [
                {
                    "fieldId": "d65cb6070e7c4b08a895e20a224cd7c7",
                    "field": "category",
                    "fieldAlias": "类别",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "size": [],
            "angle": [],
            "detail": [],
            "label": [],
            "filter": []
        },
        "drawHelper": {
            "meaAxis": "y"
        }
    }
}
/*
 * 圆饼图 - 颜色：market（维度），角度：ship_cost（度量）,细分：category（度量）
 * */
var roundCake1 = {
    "code": 0,
    "success": true,
    "message": "操作成功！",
    "timestamp": 1513845351190,
    "data": {
        "dimValues": {
            "d65cb6070e7c4b08a895e20a224cd7c7": [
                "办公用品",
                "家具",
                "技术"
            ],
            "57f63982ee1f4f26bb0c518a1c580469": [
                "亚太地区",
                "拉丁美洲",
                "欧洲",
                "美国",
                "非洲"
            ]
        },
        "meaMaxMin": {
            "5d4e0324434246fb8fa0f300bcb9cb22": {
                "max": 1422.24,
                "min": 13.08
            }
        },
        "records": [
            {
                "market": "亚太地区",
                "sales_amount": 197.28,
                "category": "办公用品"
            },
            {
                "market": "亚太地区",
                "sales_amount": 307.23,
                "category": "家具"
            },
            {
                "market": "亚太地区",
                "sales_amount": 1422.24,
                "category": "技术"
            },
            {
                "market": "拉丁美洲",
                "sales_amount": 13.08,
                "category": "办公用品"
            },
            {
                "market": "拉丁美洲",
                "sales_amount": 252.16,
                "category": "家具"
            },
            {
                "market": "拉丁美洲",
                "sales_amount": 344.64,
                "category": "技术"
            },
            {
                "market": "欧洲",
                "sales_amount": 79.2,
                "category": "办公用品"
            },
            {
                "market": "欧洲",
                "sales_amount": 268.164,
                "category": "家具"
            },
            {
                "market": "欧洲",
                "sales_amount": 388.92,
                "category": "技术"
            },
            {
                "market": "美国",
                "sales_amount": 14.62,
                "category": "办公用品"
            },
            {
                "market": "美国",
                "sales_amount": 261.96,
                "category": "家具"
            },
            {
                "market": "美国",
                "sales_amount": 907.152,
                "category": "技术"
            },
            {
                "market": "非洲",
                "sales_amount": 62.61,
                "category": "办公用品"
            },
            {
                "market": "非洲",
                "sales_amount": 111.12,
                "category": "家具"
            },
            {
                "market": "非洲",
                "sales_amount": 143.1,
                "category": "技术"
            }
        ],
        "queryJson": {
            "biSetId": "2fd9366eb8644dee871a7d5964e42ca6",
            "dataModelId": "d39bbee2d74d4c62925d55fa1f588dbc",
            "limit": null,
            "x": [],
            "y": [],
            "colour": [
                {
                    "fieldId": "57f63982ee1f4f26bb0c518a1c580469",
                    "field": "market",
                    "fieldAlias": "市场",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "size": [],
            "angle": [
                {
                    "fieldId": "5d4e0324434246fb8fa0f300bcb9cb22",
                    "field": "sales_amount",
                    "fieldAlias": "销售额",
                    "order": "ASC",
                    "baseDataType": 4,
                    "dataType": 4,
                    "dimMea": 1,
                    "disCon": 1,
                    "aggregation": null
                }
            ],
            "detail": [
                {
                    "fieldId": "d65cb6070e7c4b08a895e20a224cd7c7",
                    "field": "category",
                    "fieldAlias": "类别",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "label": [],
            "filter": []
        },
        "drawHelper": {
            "meaAxis": null
        }
    }
}
/*
 * 圆饼图 - 颜色：region（维度），角度：sales_amount（度量）,尺寸：discount（度量）
 * */
var roundCake2 = {
    "code": 0,
    "success": true,
    "message": "操作成功！",
    "timestamp": 1514360420424,
    "data": {
        "dimValues": {
            "region0": [
                "东亚",
                "东南亚",
                "东欧",
                "东非",
                "中亚",
                "中美洲",
                "中非",
                "加勒比海",
                "加拿大",
                "北欧",
                "北非",
                "南亚",
                "南欧",
                "南美",
                "南部非洲",
                "大洋洲",
                "美国东部",
                "美国中部",
                "美国南部",
                "美国西部",
                "西亚",
                "西欧",
                "西非"
            ]
        },
        "meaMaxMin": {
            "discount_SUM0": {
                "max": 860.8000000000204,
                "min": 0
            },
            "sales_amount_SUM0": {
                "max": 1731929.6684999943,
                "min": 19311.458999999984
            }
        },
        "records": [
            {
                "region0": "东亚",
                "discount_SUM0": 113.89999999999999,
                "sales_amount_SUM0": 855059.3909999982
            },
            {
                "region0": "东南亚",
                "discount_SUM0": 851.3300000000071,
                "sales_amount_SUM0": 884423.1690000022
            },
            {
                "region0": "东欧",
                "discount_SUM0": 0,
                "sales_amount_SUM0": 310033.4399999998
            },
            {
                "region0": "东非",
                "discount_SUM0": 85.30000000000013,
                "sales_amount_SUM0": 127856.01900000007
            },
            {
                "region0": "中亚",
                "discount_SUM0": 90.30000000000021,
                "sales_amount_SUM0": 19311.458999999984
            },
            {
                "region0": "中美洲",
                "discount_SUM0": 616.4499999999862,
                "sales_amount_SUM0": 1223100.6281600003
            },
            {
                "region0": "中非",
                "discount_SUM0": 0,
                "sales_amount_SUM0": 143630.00999999998
            },
            {
                "region0": "加勒比海",
                "discount_SUM0": 229.41999999999825,
                "sales_amount_SUM0": 324280.86104000127
            },
            {
                "region0": "加拿大",
                "discount_SUM0": 0,
                "sales_amount_SUM0": 66928.17
            },
            {
                "region0": "北欧",
                "discount_SUM0": 331.6999999999999,
                "sales_amount_SUM0": 636779.1569999991
            },
            {
                "region0": "北非",
                "discount_SUM0": 0,
                "sales_amount_SUM0": 233216.6099999998
            },
            {
                "region0": "南亚",
                "discount_SUM0": 138.20000000000002,
                "sales_amount_SUM0": 866572.6769999975
            },
            {
                "region0": "南欧",
                "discount_SUM0": 202.5999999999999,
                "sales_amount_SUM0": 608593.9679999996
            },
            {
                "region0": "南美",
                "discount_SUM0": 549.2880000000031,
                "sales_amount_SUM0": 617223.677879998
            },
            {
                "region0": "南部非洲",
                "discount_SUM0": 0,
                "sales_amount_SUM0": 105191.76000000007
            },
            {
                "region0": "大洋洲",
                "discount_SUM0": 534.099999999992,
                "sales_amount_SUM0": 1100184.612
            },
            {
                "region0": "美国东部",
                "discount_SUM0": 413.99999999999267,
                "sales_amount_SUM0": 678781.2399999979
            },
            {
                "region0": "美国中部",
                "discount_SUM0": 558.3400000000001,
                "sales_amount_SUM0": 501239.8908000005
            },
            {
                "region0": "美国南部",
                "discount_SUM0": 238.54999999999688,
                "sales_amount_SUM0": 391721.9050000003
            },
            {
                "region0": "美国西部",
                "discount_SUM0": 350.19999999999055,
                "sales_amount_SUM0": 725457.8245000006
            },
            {
                "region0": "西亚",
                "discount_SUM0": 860.8000000000204,
                "sales_amount_SUM0": 317106.9599999997
            },
            {
                "region0": "西欧",
                "discount_SUM0": 531.7500000000086,
                "sales_amount_SUM0": 1731929.6684999943
            },
            {
                "region0": "西非",
                "discount_SUM0": 633.500000000002,
                "sales_amount_SUM0": 173878.81200000006
            }
        ],
        "queryJson": {
            "biSetId": "2fd9366eb8644dee871a7d5964e42ca6",
            "dataModelId": "d39bbee2d74d4c62925d55fa1f588dbc",
            "limit": null,
            "x": [],
            "y": [],
            "colour": [
                {
                    "fieldId": "region0",
                    "field": "region",
                    "fieldAlias": "地区",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "size": [
                {
                    "fieldId": "discount_SUM0",
                    "field": "discount",
                    "fieldAlias": "折扣",
                    "order": "ASC",
                    "baseDataType": 4,
                    "dataType": 4,
                    "dimMea": 1,
                    "disCon": 1,
                    "aggregation": "SUM"
                }
            ],
            "angle": [
                {
                    "fieldId": "sales_amount_SUM0",
                    "field": "sales_amount",
                    "fieldAlias": "销售额",
                    "order": "ASC",
                    "baseDataType": 4,
                    "dataType": 4,
                    "dimMea": 1,
                    "disCon": 1,
                    "aggregation": "SUM"
                }
            ],
            "detail": [],
            "label": [],
            "filter": []
        },
        "drawHelper": {
            "meaAxis": null
        }
    }
}
/*
 * 圆饼图 - 颜色：region（维度），角度：sales_amount（度量）,尺寸：discount（度量）,细分：category（维度）,尺寸：market（维度）,
 * */
var roundCake3 = {
    "code": 0,
    "success": true,
    "message": "操作成功！",
    "timestamp": 1514362310662,
    "data": {
        "dimValues": {
            "region0": [
                "东亚",
                "东南亚",
                "东欧",
                "东非",
                "中亚",
                "中美洲",
                "中非",
                "加勒比海",
                "加拿大",
                "北欧",
                "北非",
                "南亚",
                "南欧",
                "南美",
                "南部非洲",
                "大洋洲",
                "美国东部",
                "美国中部",
                "美国南部",
                "美国西部",
                "西亚",
                "西欧",
                "西非"
            ],
            "market0": [
                "亚太地区",
                "欧洲",
                "非洲",
                "拉丁美洲",
                "美国"
            ],
            "category0": [
                "办公用品",
                "家具",
                "技术"
            ]
        },
        "meaMaxMin": {
            "discount_SUM0": {
                "max": 565.6000000000093,
                "min": 0
            },
            "sales_amount_SUM0": {
                "max": 656637.1440000003,
                "min": 3167.574
            }
        },
        "records": [
            {
                "region0": "东亚",
                "discount_SUM0": 66,
                "sales_amount_SUM0": 203284.03500000032,
                "category0": "办公用品",
                "market0": "亚太地区"
            },
            {
                "region0": "东亚",
                "discount_SUM0": 26.400000000000002,
                "sales_amount_SUM0": 336384.59100000036,
                "category0": "家具",
                "market0": "亚太地区"
            },
            {
                "region0": "东亚",
                "discount_SUM0": 21.5,
                "sales_amount_SUM0": 315390.7649999999,
                "category0": "技术",
                "market0": "亚太地区"
            },
            {
                "region0": "东南亚",
                "discount_SUM0": 524.7900000000059,
                "sales_amount_SUM0": 241285.08150000012,
                "category0": "办公用品",
                "market0": "亚太地区"
            },
            {
                "region0": "东南亚",
                "discount_SUM0": 169.79000000000002,
                "sales_amount_SUM0": 313386.7035,
                "category0": "家具",
                "market0": "亚太地区"
            },
            {
                "region0": "东南亚",
                "discount_SUM0": 156.7499999999993,
                "sales_amount_SUM0": 329751.38399999985,
                "category0": "技术",
                "market0": "亚太地区"
            },
            {
                "region0": "东欧",
                "discount_SUM0": 0,
                "sales_amount_SUM0": 103652.61000000004,
                "category0": "办公用品",
                "market0": "欧洲"
            },
            {
                "region0": "东欧",
                "discount_SUM0": 0,
                "sales_amount_SUM0": 98121.89999999997,
                "category0": "家具",
                "market0": "欧洲"
            },
            {
                "region0": "东欧",
                "discount_SUM0": 0,
                "sales_amount_SUM0": 108258.93,
                "category0": "技术",
                "market0": "欧洲"
            },
            {
                "region0": "东非",
                "discount_SUM0": 61.80000000000012,
                "sales_amount_SUM0": 51277.472999999976,
                "category0": "办公用品",
                "market0": "非洲"
            },
            {
                "region0": "东非",
                "discount_SUM0": 10.499999999999998,
                "sales_amount_SUM0": 32395.946999999993,
                "category0": "家具",
                "market0": "非洲"
            },
            {
                "region0": "东非",
                "discount_SUM0": 12.999999999999993,
                "sales_amount_SUM0": 44182.598999999995,
                "category0": "技术",
                "market0": "非洲"
            },
            {
                "region0": "中亚",
                "discount_SUM0": 60.200000000000095,
                "sales_amount_SUM0": 7953.146999999997,
                "category0": "办公用品",
                "market0": "亚太地区"
            },
            {
                "region0": "中亚",
                "discount_SUM0": 11.199999999999998,
                "sales_amount_SUM0": 3167.574,
                "category0": "家具",
                "market0": "亚太地区"
            },
            {
                "region0": "中亚",
                "discount_SUM0": 18.89999999999999,
                "sales_amount_SUM0": 8190.738000000002,
                "category0": "技术",
                "market0": "亚太地区"
            },
            {
                "region0": "中美洲",
                "discount_SUM0": 255.20000000000255,
                "sales_amount_SUM0": 319442.97599999956,
                "category0": "办公用品",
                "market0": "拉丁美洲"
            },
            {
                "region0": "中美洲",
                "discount_SUM0": 268.1999999999986,
                "sales_amount_SUM0": 441987.37000000017,
                "category0": "家具",
                "market0": "拉丁美洲"
            },
            {
                "region0": "中美洲",
                "discount_SUM0": 93.05000000000003,
                "sales_amount_SUM0": 461670.2821600005,
                "category0": "技术",
                "market0": "拉丁美洲"
            },
            {
                "region0": "中非",
                "discount_SUM0": 0,
                "sales_amount_SUM0": 45345.17999999998,
                "category0": "办公用品",
                "market0": "非洲"
            },
            {
                "region0": "中非",
                "discount_SUM0": 0,
                "sales_amount_SUM0": 36594.83999999999,
                "category0": "家具",
                "market0": "非洲"
            },
            {
                "region0": "中非",
                "discount_SUM0": 0,
                "sales_amount_SUM0": 61689.99000000002,
                "category0": "技术",
                "market0": "非洲"
            },
            {
                "region0": "加勒比海",
                "discount_SUM0": 110.00000000000097,
                "sales_amount_SUM0": 89575.41599999994,
                "category0": "办公用品",
                "market0": "拉丁美洲"
            },
            {
                "region0": "加勒比海",
                "discount_SUM0": 73.70000000000014,
                "sales_amount_SUM0": 118372.40000000001,
                "category0": "家具",
                "market0": "拉丁美洲"
            },
            {
                "region0": "加勒比海",
                "discount_SUM0": 45.72000000000009,
                "sales_amount_SUM0": 116333.04504000008,
                "category0": "技术",
                "market0": "拉丁美洲"
            },
            {
                "region0": "加拿大",
                "discount_SUM0": 0,
                "sales_amount_SUM0": 30034.080000000016,
                "category0": "办公用品",
                "market0": "美国"
            },
            {
                "region0": "加拿大",
                "discount_SUM0": 0,
                "sales_amount_SUM0": 10595.279999999997,
                "category0": "家具",
                "market0": "美国"
            },
            {
                "region0": "加拿大",
                "discount_SUM0": 0,
                "sales_amount_SUM0": 26298.81,
                "category0": "技术",
                "market0": "美国"
            },
            {
                "region0": "北欧",
                "discount_SUM0": 212.1999999999991,
                "sales_amount_SUM0": 216127.54200000028,
                "category0": "办公用品",
                "market0": "欧洲"
            },
            {
                "region0": "北欧",
                "discount_SUM0": 68.39999999999999,
                "sales_amount_SUM0": 167682.52500000002,
                "category0": "家具",
                "market0": "欧洲"
            },
            {
                "region0": "北欧",
                "discount_SUM0": 51.100000000000065,
                "sales_amount_SUM0": 252969.09000000003,
                "category0": "技术",
                "market0": "欧洲"
            },
            {
                "region0": "北非",
                "discount_SUM0": 0,
                "sales_amount_SUM0": 85540.40999999999,
                "category0": "办公用品",
                "market0": "非洲"
            },
            {
                "region0": "北非",
                "discount_SUM0": 0,
                "sales_amount_SUM0": 60977.30999999995,
                "category0": "家具",
                "market0": "非洲"
            },
            {
                "region0": "北非",
                "discount_SUM0": 0,
                "sales_amount_SUM0": 86698.88999999998,
                "category0": "技术",
                "market0": "非洲"
            },
            {
                "region0": "南亚",
                "discount_SUM0": 81.5,
                "sales_amount_SUM0": 200402.82000000007,
                "category0": "办公用品",
                "market0": "亚太地区"
            },
            {
                "region0": "南亚",
                "discount_SUM0": 23.699999999999985,
                "sales_amount_SUM0": 314363.26199999993,
                "category0": "家具",
                "market0": "亚太地区"
            },
            {
                "region0": "南亚",
                "discount_SUM0": 33,
                "sales_amount_SUM0": 351806.5950000006,
                "category0": "技术",
                "market0": "亚太地区"
            },
            {
                "region0": "南欧",
                "discount_SUM0": 98.20000000000002,
                "sales_amount_SUM0": 242436.78599999993,
                "category0": "办公用品",
                "market0": "欧洲"
            },
            {
                "region0": "南欧",
                "discount_SUM0": 48.100000000000065,
                "sales_amount_SUM0": 150453.25199999995,
                "category0": "家具",
                "market0": "欧洲"
            },
            {
                "region0": "南欧",
                "discount_SUM0": 56.29999999999999,
                "sales_amount_SUM0": 215703.93,
                "category0": "技术",
                "market0": "欧洲"
            },
            {
                "region0": "南美",
                "discount_SUM0": 311.300000000003,
                "sales_amount_SUM0": 154902.34000000026,
                "category0": "办公用品",
                "market0": "拉丁美洲"
            },
            {
                "region0": "南美",
                "discount_SUM0": 136.19999999999987,
                "sales_amount_SUM0": 251610.85000000018,
                "category0": "家具",
                "market0": "拉丁美洲"
            },
            {
                "region0": "南美",
                "discount_SUM0": 101.78799999999981,
                "sales_amount_SUM0": 210710.48787999994,
                "category0": "技术",
                "market0": "拉丁美洲"
            },
            {
                "region0": "南部非洲",
                "discount_SUM0": 0,
                "sales_amount_SUM0": 28795.859999999975,
                "category0": "办公用品",
                "market0": "非洲"
            },
            {
                "region0": "南部非洲",
                "discount_SUM0": 0,
                "sales_amount_SUM0": 25076.400000000005,
                "category0": "家具",
                "market0": "非洲"
            },
            {
                "region0": "南部非洲",
                "discount_SUM0": 0,
                "sales_amount_SUM0": 51319.499999999985,
                "category0": "技术",
                "market0": "非洲"
            },
            {
                "region0": "大洋洲",
                "discount_SUM0": 302.3999999999949,
                "sales_amount_SUM0": 281713.62600000005,
                "category0": "办公用品",
                "market0": "亚太地区"
            },
            {
                "region0": "大洋洲",
                "discount_SUM0": 115.80000000000061,
                "sales_amount_SUM0": 410468.00400000054,
                "category0": "家具",
                "market0": "亚太地区"
            },
            {
                "region0": "大洋洲",
                "discount_SUM0": 115.90000000000079,
                "sales_amount_SUM0": 408002.9819999999,
                "category0": "技术",
                "market0": "亚太地区"
            },
            {
                "region0": "美国东部",
                "discount_SUM0": 244.89999999999654,
                "sales_amount_SUM0": 205605.2069999999,
                "category0": "办公用品",
                "market0": "美国"
            },
            {
                "region0": "美国东部",
                "discount_SUM0": 92.4,
                "sales_amount_SUM0": 208202.05200000008,
                "category0": "家具",
                "market0": "美国"
            },
            {
                "region0": "美国东部",
                "discount_SUM0": 76.70000000000017,
                "sales_amount_SUM0": 264973.9810000003,
                "category0": "技术",
                "market0": "美国"
            },
            {
                "region0": "美国中部",
                "discount_SUM0": 362.3999999999983,
                "sales_amount_SUM0": 167131.00300000026,
                "category0": "办公用品",
                "market0": "美国"
            },
            {
                "region0": "美国中部",
                "discount_SUM0": 140.0399999999994,
                "sales_amount_SUM0": 163692.57580000002,
                "category0": "家具",
                "market0": "美国"
            },
            {
                "region0": "美国中部",
                "discount_SUM0": 55.900000000000205,
                "sales_amount_SUM0": 170416.3119999999,
                "category0": "技术",
                "market0": "美国"
            },
            {
                "region0": "美国南部",
                "discount_SUM0": 166.9999999999994,
                "sales_amount_SUM0": 125701.58499999993,
                "category0": "办公用品",
                "market0": "美国"
            },
            {
                "region0": "美国南部",
                "discount_SUM0": 39.95000000000001,
                "sales_amount_SUM0": 117248.41200000008,
                "category0": "家具",
                "market0": "美国"
            },
            {
                "region0": "美国南部",
                "discount_SUM0": 31.599999999999934,
                "sales_amount_SUM0": 148771.9079999999,
                "category0": "技术",
                "market0": "美国"
            },
            {
                "region0": "美国西部",
                "discount_SUM0": 177.2999999999987,
                "sales_amount_SUM0": 221031.52500000008,
                "category0": "办公用品",
                "market0": "美国"
            },
            {
                "region0": "美国西部",
                "discount_SUM0": 92.70000000000061,
                "sales_amount_SUM0": 252434.46750000032,
                "category0": "家具",
                "market0": "美国"
            },
            {
                "region0": "美国西部",
                "discount_SUM0": 80.20000000000057,
                "sales_amount_SUM0": 251991.83199999997,
                "category0": "技术",
                "market0": "美国"
            },
            {
                "region0": "西亚",
                "discount_SUM0": 565.6000000000093,
                "sales_amount_SUM0": 109013.55600000006,
                "category0": "办公用品",
                "market0": "亚太地区"
            },
            {
                "region0": "西亚",
                "discount_SUM0": 131.99999999999952,
                "sales_amount_SUM0": 83781.16499999994,
                "category0": "家具",
                "market0": "亚太地区"
            },
            {
                "region0": "西亚",
                "discount_SUM0": 163.19999999999922,
                "sales_amount_SUM0": 124312.23899999994,
                "category0": "技术",
                "market0": "亚太地区"
            },
            {
                "region0": "西欧",
                "discount_SUM0": 286.4999999999982,
                "sales_amount_SUM0": 601443.6449999998,
                "category0": "办公用品",
                "market0": "欧洲"
            },
            {
                "region0": "西欧",
                "discount_SUM0": 117.54999999999905,
                "sales_amount_SUM0": 473848.87950000016,
                "category0": "家具",
                "market0": "欧洲"
            },
            {
                "region0": "西欧",
                "discount_SUM0": 127.70000000000091,
                "sales_amount_SUM0": 656637.1440000003,
                "category0": "技术",
                "market0": "欧洲"
            },
            {
                "region0": "西非",
                "discount_SUM0": 413.6999999999957,
                "sales_amount_SUM0": 55796.610000000015,
                "category0": "办公用品",
                "market0": "非洲"
            },
            {
                "region0": "西非",
                "discount_SUM0": 89.60000000000021,
                "sales_amount_SUM0": 39606.137999999984,
                "category0": "家具",
                "market0": "非洲"
            },
            {
                "region0": "西非",
                "discount_SUM0": 130.20000000000033,
                "sales_amount_SUM0": 78476.06400000001,
                "category0": "技术",
                "market0": "非洲"
            }
        ],
        "queryJson": {
            "biSetId": "2fd9366eb8644dee871a7d5964e42ca6",
            "dataModelId": "d39bbee2d74d4c62925d55fa1f588dbc",
            "limit": null,
            "x": [],
            "y": [],
            "colour": [
                {
                    "fieldId": "region0",
                    "field": "region",
                    "fieldAlias": "地区",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "size": [
                {
                    "fieldId": "discount_SUM0",
                    "field": "discount",
                    "fieldAlias": "折扣",
                    "order": "ASC",
                    "baseDataType": 4,
                    "dataType": 4,
                    "dimMea": 1,
                    "disCon": 1,
                    "aggregation": "SUM"
                }
            ],
            "angle": [
                {
                    "fieldId": "sales_amount_SUM0",
                    "field": "sales_amount",
                    "fieldAlias": "销售额",
                    "order": "ASC",
                    "baseDataType": 4,
                    "dataType": 4,
                    "dimMea": 1,
                    "disCon": 1,
                    "aggregation": "SUM"
                }
            ],
            "detail": [
                {
                    "fieldId": "category0",
                    "field": "category",
                    "fieldAlias": "类别",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "label": [
                {
                    "fieldId": "market0",
                    "field": "market",
                    "fieldAlias": "市场",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "filter": []
        },
        "drawHelper": {
            "meaAxis": null
        }
    }
}
/*
 * 圆饼图 - 颜色：省，尺寸、角度：销售额，标签：省
 * */
var roundCake4 = {
    "code": 0,
    "success": true,
    "message": "操作成功！",
    "timestamp": 1516087459333,
    "data": {
        "levels": [],
        "totalCount": 1084,
        "dimValues": {
            "province1": [
                "丁加奴河",
                "万博",
                "万象省",
                "三角州",
                "三重县",
                "上奥地利",
                "上德梅拉拉-伯比斯",
                "上海",
                "上艾瑟尔",
                "上萨桑德",
                "上马齐亚特拉区",
                "下刚果",
                "下加利福尼亚州",
                "下朱巴",
                "下萨克森州",
                "不列颠哥伦比亚",
                "不来梅",
                "丘基萨卡",
                "丘布特",
                "东京",
                "东佛兰德",
                "东加里曼丹省",
                "东努沙登加拉省",
                "东南苏拉威西省",
                "东南部",
                "东开普省",
                "东开赛",
                "东爪哇省",
                "东部",
                "中吕宋",
                "中国香港特别行政区",
                "中央-卢瓦尔河谷",
                "中央塞尔维亚",
                "中央省",
                "中央邦",
                "中日德兰",
                "中爪哇省",
                "中苏拉威西",
                "中赤道",
                "中部",
                "丹吉尔-得土安",
                "主教-瑙黎",
                "久尔久",
                "乌伊拉",
                "乌兰巴托",
                "乌卡亚利",
                "乌得勒支",
                "乌普沙拉省",
                "乌沙克",
                "乌西马",
                "乔卢特卡",
                "乔科",
                "乔鲁姆",
                "乞力马扎罗",
                "云南省",
                "亚伯达省",
                "亚兹德",
                "亚利桑那",
                "亚历山大省",
                "亚拉奎州",
                "亚松森",
                "亚洛瓦",
                "亚罗斯拉夫尔",
                "亚马孙",
                "亚齐",
                "京畿",
                "京畿道",
                "代尔祖尔",
                "代尼兹利省",
                "仰光",
                "伊万诺-弗兰科夫斯克",
                "伊万诺沃",
                "伊兹密尔",
                "伊利诺伊州",
                "伊卜省",
                "伊卡",
                "伊尔库茨克",
                "伊尔比德",
                "伊尼扬巴内",
                "伊拉姆",
                "伊斯坦布尔",
                "伊斯法罕",
                "伊林加",
                "伊梅列季",
                "伊莫",
                "伊达尔戈州",
                "休达市",
                "伦巴第",
                "伯南布哥",
                "伯尔尼",
                "伯尔齐",
                "佐贺",
                "佛罗里达",
                "佛蒙特州",
                "佩尔尼克州",
                "佩拉维亚",
                "俄亥俄州",
                "俄克拉何马州",
                "俄勒冈州",
                "信德省",
                "俾路支斯坦",
                "克卢日",
                "克察尔特南戈",
                "克尔曼",
                "克尔曼沙阿",
                "克尔谢希尔",
                "克恩滕",
                "克罗斯河",
                "克莱佩达",
                "克雷塔罗",
                "兰巴耶克",
                "关塔那摩",
                "兵库县",
                "内乌肯",
                "内华达州",
                "内夫谢希尔",
                "内布拉斯加州",
                "内格罗河",
                "内罗毕省",
                "内蒙古自治区",
                "冈山",
                "凡城",
                "切尔卡瑟",
                "切尔尼希夫州",
                "列巴普",
                "列日",
                "利古里亚",
                "利沃夫",
                "利贝雷茨",
                "利隆圭",
                "利雅得",
                "利马",
                "利马（市）",
                "别尔哥罗德",
                "加丹加",
                "加兹温",
                "加利福尼亚州",
                "加利西亚",
                "加拉茨",
                "加泰罗尼亚",
                "加济安泰普",
                "加里宁格勒",
                "努瓦克肖特区",
                "勃兰登堡",
                "勃艮第-弗朗士-孔泰",
                "北京",
                "北卡罗莱纳州",
                "北地区",
                "北布拉班特",
                "北方",
                "北方省",
                "北方邦",
                "北桑坦德",
                "北棉兰老",
                "北海道",
                "北苏拉威西",
                "北苏门答腊省",
                "北荷兰",
                "北莱茵-威斯特法伦州",
                "北达科他州",
                "北部-加来海峡-庇卡底",
                "北里奥格兰德",
                "北阿坎德邦",
                "北领地",
                "北马绍纳兰",
                "北黎巴嫩",
                "十八山",
                "千叶县",
                "华盛顿州",
                "南下加利福尼亚",
                "南丹麦",
                "南加里曼丹",
                "南卡罗来纳州",
                "南呼罗珊",
                "南地区",
                "南基伍省",
                "南方",
                "南曼兰",
                "南澳大利亚州",
                "南苏门答腊省",
                "南荷兰省",
                "南达科他州",
                "南部",
                "南都柏林",
                "南里奥格兰德",
                "南马托格罗索",
                "博亚卡",
                "博卢",
                "博尔古",
                "博尔诺",
                "博托沙尼",
                "占碑",
                "卡亚俄",
                "卡什卡达里亚",
                "卡克塔",
                "卡内洛内斯",
                "卡卢加",
                "卡哈马卡",
                "卡塔马卡",
                "卡尔巴拉",
                "卡尔斯省",
                "卡尔达斯",
                "卡巴尔达-巴尔卡里亚",
                "卡巴罗莱",
                "卡拉什-塞维林",
                "卡拉布里亚",
                "卡拉干达",
                "卡拉曼省",
                "卡拉沃沃",
                "卡拉河",
                "卡斯塔莫努",
                "卡斯蒂利亚-拉曼查",
                "卡斯蒂利亚和莱昂",
                "卡杜纳",
                "卡约",
                "卡纳塔克邦",
                "卡耶斯",
                "卡萨拉省",
                "卡萨纳雷",
                "卡诺",
                "卡赫拉曼马拉什",
                "卡迪西亚",
                "卡马圭",
                "卡齐纳",
                "卢塞恩",
                "卢布尔雅那市",
                "卢布斯卡",
                "卢布林省",
                "卢森堡",
                "卢汉斯克",
                "卢瓦尔河地区",
                "卢萨卡",
                "印第安纳州",
                "危地马拉",
                "厄德尔",
                "厄斯帕尔塔",
                "发罗拉",
                "古卢区",
                "古吉拉特邦",
                "古巴圣地亚哥省",
                "台北市",
                "吉兰",
                "吉大港",
                "吉布提",
                "吉扎克",
                "吉斯伯恩",
                "吉林省",
                "吉赞",
                "吉隆坡",
                "君士坦丁",
                "呵叻府（那空叻差是玛）",
                "呼罗珊",
                "哈兰",
                "哈利斯科",
                "哈塔伊",
                "哈尔尤",
                "哈尔科夫",
                "哈拉雷",
                "哈特隆",
                "哈里亚纳邦",
                "哈马丹",
                "哥伦比亚特区",
                "哥罗德诺",
                "啥格勒布",
                "喀土穆",
                "喀布尔省",
                "喀拉拉邦",
                "四川省",
                "国家首都区",
                "图林根州",
                "圣佩得罗-德马科里斯",
                "圣保罗州",
                "圣克里斯托瓦尔",
                "圣克鲁斯",
                "圣凯瑟琳",
                "圣加仑",
                "圣卡塔琳娜",
                "圣地亚哥",
                "圣地亚哥-德尔埃斯特罗",
                "圣埃斯皮里图州",
                "圣多明各",
                "圣安娜",
                "圣斯皮里图斯",
                "圣胡安",
                "圣菲",
                "圣萨尔瓦多",
                "圣费尔南多",
                "圣路易斯",
                "圣路易斯波托西州",
                "圣路易省",
                "圣迈克尔",
                "坎佩切",
                "坎塔布里亚自治区",
                "坎大哈省",
                "坎帕尼亚",
                "坎帕拉",
                "坎特伯雷",
                "坦波夫",
                "埃努古",
                "埃多",
                "埃尔比勒",
                "埃尔祖鲁姆",
                "埃斯基谢希尔",
                "埃斯昆特拉省",
                "埃斯派亚",
                "埃斯特利",
                "埃斯特雷马杜拉",
                "埃诺",
                "埃迪尔内省",
                "埃邦伊",
                "基利斯",
                "基加利",
                "基希讷乌",
                "基戈马",
                "基洛沃赫拉德",
                "基纳",
                "埼玉县",
                "堪萨斯州",
                "塔伊兹",
                "塔噶",
                "塔奇拉",
                "塔尔图省",
                "塔尔诺皮尔",
                "塔巴斯科",
                "塔德莱-艾济拉勒",
                "塔扎-胡塞马-陶纳特",
                "塔拉帕卡",
                "塔拉纳基",
                "塔斯马尼亚州",
                "塔毛利帕斯州",
                "塔波拉",
                "塔里哈",
                "塞图巴尔",
                "塞姆南",
                "塞尔希培",
                "塞得港",
                "塞瓦斯托波尔",
                "塞萨尔",
                "塞阿拉",
                "墨西哥",
                "多哈",
                "多尔日",
                "大分县",
                "大卡萨布兰卡",
                "大吉德州",
                "大波兰",
                "大田广域市",
                "大西洋",
                "大邱广域市",
                "大阪府",
                "大阿克拉",
                "天津",
                "太特",
                "夸拉",
                "夸祖鲁-纳塔尔省",
                "奇南德加",
                "奇瓦瓦州",
                "奇里基",
                "奇马尔特南戈",
                "奥什",
                "奥伊金斯",
                "奥克兰",
                "奥兰",
                "奥塔戈",
                "奥孙",
                "奥尔杜",
                "奥尔金",
                "奥弗涅",
                "奥弗涅-罗讷-阿尔卑斯",
                "奥斯曼尼耶",
                "奥斯陆",
                "奥波莱",
                "奥洛莫乌茨",
                "奥约",
                "奥西耶克-巴拉尼亚",
                "奥贡",
                "奥里萨邦",
                "奥鲁罗省",
                "姆万扎",
                "姆普马兰加",
                "姆特瓦拉",
                "姆贝亚",
                "威尔士",
                "威尼托",
                "威斯康星",
                "宁夏",
                "安卡什",
                "安卡拉",
                "安塔利亚",
                "安大略",
                "安得拉邦",
                "安徽省",
                "安托法加斯塔",
                "安曼",
                "安特卫普",
                "安瑟巴",
                "安索阿特吉",
                "安纳巴",
                "安蒂奥基亚",
                "安达卢西亚",
                "安集延",
                "宝奇",
                "宾夕法尼亚州",
                "宾戈尔",
                "密歇根州",
                "密苏里州",
                "密西西比州",
                "小波兰",
                "尚利乌尔法",
                "尤卡坦州",
                "尼亚姆茨",
                "尼亚美市",
                "尼亚萨",
                "尼代",
                "尼古拉耶夫",
                "尼安萨",
                "尼尼微",
                "尼日尔",
                "尼特拉",
                "尼科西亚",
                "尼阿里河",
                "屈塔希亚",
                "屈米区",
                "山东省",
                "山口县",
                "山西省",
                "岘港",
                "巴什科尔托斯坦",
                "巴伊亚",
                "巴伐利亚",
                "巴伦西亚",
                "巴克乌",
                "巴利阿里群岛",
                "巴勒克埃西尔",
                "巴厘省",
                "巴基",
                "巴塞尔城市",
                "巴士拉",
                "巴布亚",
                "巴拉奥纳",
                "巴拉那",
                "巴拿马",
                "巴斯克自治区",
                "巴格达",
                "巴比伦",
                "巴特曼河",
                "巴特纳",
                "巴甫洛达尔",
                "巴登-符腾堡",
                "巴纳迪尔",
                "巴西利卡塔",
                "巴马科",
                "布什尔",
                "布列塔尼",
                "布勒伊拉",
                "布埃尼",
                "布宜诺斯艾利斯",
                "布宜诺斯艾利斯省",
                "布尔加斯",
                "布尔萨",
                "布拉加",
                "布拉格",
                "布拉瓦约",
                "布拉索夫",
                "布斯克吕",
                "布朗斯克",
                "布泽乌",
                "布海拉",
                "布琼布拉城市省",
                "布达佩斯",
                "布雷斯特",
                "布鲁塞尔",
                "希奥利艾",
                "希尼安加",
                "帕扎尔吉克州",
                "帕拉",
                "帕拉伊巴",
                "帕拉马里博区",
                "帕涅韦日斯",
                "广东省",
                "广岛县",
                "广西省",
                "庆和省",
                "庆尚南道",
                "库姆省",
                "库尔德斯坦",
                "库尔纳",
                "库斯卡特兰",
                "库斯塔奈",
                "库马诺沃",
                "康康行政区",
                "康斯坦察",
                "康涅狄格州",
                "廖内省",
                "建江",
                "开伯尔-普赫图赫瓦省",
                "开塞利省",
                "开罗",
                "弗吉尼亚州",
                "弗拉基米尔",
                "弗朗恰",
                "弗朗西斯科·莫拉桑",
                "弗留利-威尼斯朱利亚",
                "弗罗马格尔",
                "弗里斯兰",
                "彭亨州",
                "得克萨斯州",
                "德伦特",
                "德尔加杜角",
                "德里邦",
                "德雷达瓦",
                "德黑兰",
                "忠清南道",
                "怀俄明州",
                "怀卡托区",
                "恩泽雷科雷",
                "恩特雷里奥斯",
                "恰尔肯德邦",
                "恰帕斯",
                "恰纳卡莱",
                "恰蒂斯加尔邦",
                "惠灵顿",
                "戈亚斯",
                "戈尔日",
                "戈尔韦郡",
                "戈梅利",
                "戈莱斯坦",
                "扎姆法拉",
                "扎波里日亚",
                "托利马",
                "托卡特",
                "托坎廷斯",
                "托斯卡纳",
                "扬博尔州",
                "拉利伯塔德省",
                "拉卡省",
                "拉各斯",
                "拉巴斯",
                "拉巴特-萨累-宰穆尔-扎埃尔",
                "拉斯图纳斯省",
                "拉斯海马酋长国",
                "拉杰沙希",
                "拉潘帕",
                "拉维加",
                "拉罗马纳",
                "拉腊",
                "拉贝河畔乌斯季",
                "拉贾斯坦邦",
                "拉里奥哈",
                "拉齐奥",
                "拜尼苏韦夫",
                "拿曼干州",
                "捷斯",
                "提济乌祖",
                "摩拉维亚-西里西亚州",
                "撒丁岛",
                "文尼察",
                "斯利文",
                "斯基克达",
                "斯塔夫罗波尔边疆区",
                "斯库台",
                "斯德哥尔摩",
                "斯普利特-达尔马提亚",
                "斯科纳",
                "新加坡",
                "新南威尔士",
                "新埃斯帕塔",
                "新墨西哥州",
                "新斯科舍",
                "新泽西州",
                "新疆维吾尔自治区",
                "新罕布什尔州",
                "新莱昂",
                "新西伯利亚州",
                "施蒂里亚",
                "旁遮普邦",
                "日内瓦",
                "日利纳",
                "日惹",
                "日托米尔州",
                "旧扎戈拉州",
                "昆士兰州",
                "昆迪纳马卡",
                "昌迪加尔",
                "明亚",
                "明古鲁",
                "明尼苏达州",
                "普伦蒂湾",
                "普列文州",
                "普利亚",
                "普埃布拉州",
                "普拉霍瓦河",
                "普罗夫迪夫州",
                "普罗旺斯-阿尔卑斯-蔚蓝海岸",
                "普诺",
                "曼尼托巴省",
                "曼尼普尔邦",
                "曼谷",
                "曼齐尼",
                "朗多尼亚",
                "朗格多克-鲁西永-南部-比利牛斯",
                "本地治里邦",
                "本格拉",
                "杜兰戈州",
                "杜卡拉-阿卜达",
                "杜阿尔特省",
                "杰勒法",
                "杰尔",
                "松索纳特",
                "极北部",
                "林堡",
                "林波波",
                "枥木县",
                "柏林",
                "查瓜纳斯",
                "查科",
                "查谟和克什米尔邦",
                "栋加",
                "格拉玛",
                "格拉纳达省",
                "格罗宁根省",
                "格雷罗",
                "格鲁吉亚",
                "桑坦德",
                "梅克伦堡-前波美拉尼亚州",
                "梅克内斯-塔菲拉勒特",
                "梅利利亚市",
                "梅塔",
                "梅尔辛",
                "梅赫丁茨",
                "梅里达州",
                "森美兰",
                "楚卡宗",
                "楠普拉",
                "楠格哈尔",
                "比亚克拉拉",
                "比什凯克",
                "比哈尔邦",
                "比奥比奥",
                "比托拉",
                "比斯特里察-讷瑟乌德",
                "比绍区",
                "比耶",
                "比那尔德里奥",
                "比霍尔",
                "水库",
                "汉堡",
                "江原道",
                "江布尔",
                "江苏省",
                "江西省",
                "沃伦",
                "沃尔恰",
                "沃州",
                "沃罗涅日河",
                "沙劳越",
                "沙巴州",
                "沙维雅-瓦拉迪格",
                "河内市",
                "河北省",
                "河南省",
                "河口湾",
                "河流",
                "法兰德斯布拉班特",
                "法兰西岛",
                "法尔斯",
                "法尤姆",
                "法属圭亚拉",
                "波哥大",
                "波图格萨",
                "波尔图",
                "波尔塔瓦",
                "波德戈里察",
                "波德拉谢省",
                "波托西",
                "波斯尼亚和黑塞哥维那联邦",
                "波美拉尼亚",
                "泰伦加纳邦",
                "泰基尔达",
                "泰布克",
                "泰米尔纳德邦",
                "泽兰",
                "洛斯里奥斯",
                "洛里",
                "洛雷托",
                "洛雷斯坦",
                "津德尔",
                "派桑杜",
                "济加尔",
                "济州",
                "济金绍尔",
                "浙江省",
                "海南省",
                "海尔德兰",
                "海德马克",
                "海法区",
                "湖北省",
                "湖南省",
                "湖大区",
                "滨海",
                "滨海区",
                "滨海和山区",
                "潟湖",
                "澳大利亚首都领地",
                "焦夫",
                "爱尔巴桑",
                "爱知县",
                "爱达荷州",
                "特伦蒂洛-上阿迪杰",
                "特拉华州",
                "特拉布宗",
                "特拉维夫",
                "特莱姆森",
                "特里普拉邦",
                "犹他州",
                "犹太自治州",
                "玛格达莱纳",
                "玛雅贝克",
                "玻利瓦尔",
                "玻利瓦尔州",
                "班加西",
                "班吉",
                "班斯卡-比斯特里察",
                "班顿杜省",
                "瓜亚斯",
                "瓜德罗普岛",
                "瓜纳华托州",
                "瓜纳卡斯特",
                "瓜里科",
                "瓦哈卡",
                "瓦尔加斯",
                "瓦尔帕莱索",
                "瓦尔纳州",
                "甘肃省",
                "田纳西州",
                "甲拉巴松区",
                "白尼罗",
                "皮乌拉",
                "皮埃蒙特",
                "皮奥伊",
                "皮尔森",
                "皮钦查",
                "盖勒马",
                "石勒苏益格-赫尔斯泰因",
                "石川县",
                "神奈川",
                "福井县",
                "福冈",
                "福建省",
                "科克",
                "科利马州",
                "科威特",
                "科尔多瓦",
                "科尔察",
                "科尔特斯",
                "科尼亚",
                "科恰班巴省",
                "科罗拉多",
                "科英布拉",
                "科西嘉岛",
                "科贾埃利",
                "科赫德斯",
                "科连特斯",
                "科迪勒拉区",
                "科阿韦拉州",
                "科隆",
                "穆列什",
                "穆哈拉格",
                "穆尔西亚",
                "穆斯塔加奈姆",
                "突尼斯省",
                "第亚那",
                "第比利斯市",
                "第聂伯罗彼得罗夫斯克",
                "米兰达",
                "米努夫",
                "米却肯州",
                "米纳斯吉拉斯",
                "米苏拉塔",
                "米西奥内斯",
                "索哈杰",
                "索法拉",
                "索科托",
                "索诺拉州",
                "索非亚市",
                "红海",
                "约兹罗",
                "约罗",
                "约贝",
                "纳亚里特",
                "纳尔逊",
                "纳瓦拉",
                "纳米贝省",
                "纳里尼奥",
                "纽约州",
                "纽芬兰",
                "维也纳",
                "维多利亚",
                "维尔纽斯",
                "维捷布斯克",
                "缅因州",
                "罗兹",
                "罗加兰",
                "罗安达",
                "罗德岛",
                "罗赖马",
                "群马县",
                "翁多",
                "翁布里亚",
                "考卡河谷",
                "考纳斯",
                "耶路撒冷",
                "联邦区",
                "联邦首都区",
                "肯塔基",
                "胡内多阿拉",
                "胡宁",
                "胡志明市",
                "胡胡伊",
                "胡齐斯坦",
                "膝部",
                "自由邦省",
                "舒门州",
                "艾奥瓦",
                "艾拉泽",
                "艾斯尤特",
                "艾格瓦特",
                "艾登",
                "艾米利亚-罗马涅",
                "芒杜尔",
                "花拉子模",
                "芹苴",
                "苏克雷省",
                "苏利亚",
                "苏尔汉河",
                "苏恰瓦河",
                "苏斯-马萨-德拉",
                "苏格兰",
                "苏梅",
                "苏黎世",
                "英格兰",
                "茨城县",
                "荷台达",
                "莫克瓜",
                "莫斯科",
                "莫普提区",
                "莫纳加斯",
                "莫罗戈罗",
                "莫诺",
                "莫雷洛斯",
                "莱昂省",
                "莱茵兰-普法尔茨州",
                "萨克森-安哈尔特州",
                "萨克森州",
                "萨卡特卡斯",
                "萨图马雷",
                "萨姆松",
                "萨尔兰州",
                "萨尔特",
                "萨尔茨堡州",
                "萨拉赫丁省",
                "萨斯喀彻温省",
                "萨格勒布市",
                "萨瓦内",
                "蒂巴扎",
                "蒂米什",
                "蒂罗尔",
                "蒙大拿州",
                "蒙得维的亚省",
                "蒙特塞拉多州",
                "蔚山",
                "裂谷",
                "西兰",
                "西加里曼丹",
                "西努沙登加拉省",
                "西北区",
                "西北省",
                "西北部",
                "西南",
                "西南芬兰区",
                "西孟加拉邦",
                "西开普省",
                "西开赛省",
                "西弗兰德省",
                "西弗吉尼亚州",
                "西恩福格斯",
                "西澳大利亚州",
                "西爪哇省",
                "西米沙鄢",
                "西约塔兰",
                "西苏门答腊",
                "西西里岛",
                "西迪贝勒阿巴斯",
                "西部",
                "西部-舍拉拉德-贝尼赫森",
                "西里西亚",
                "西阿格德尔",
                "西马绍纳兰",
                "诺夫哥罗德",
                "诺曼底",
                "谢戈德阿维拉",
                "谢赫村",
                "豪登省",
                "贝凯什州",
                "贝努埃",
                "贝尼",
                "贝沙尔",
                "贝贾亚",
                "贝鲁特",
                "贡贝",
                "贵州省",
                "赛达",
                "赞比西亚",
                "赞詹",
                "赤道",
                "赫尔松",
                "赫拉德茨-克拉洛韦",
                "赫拉特",
                "赫梅利尼茨基",
                "路易斯安那州",
                "车里雅宾斯克",
                "辽宁省",
                "达卡",
                "达吉斯坦",
                "达喀尔",
                "达累斯萨拉姆",
                "迈尔盖卜",
                "迈桑",
                "迪亚巴克尔",
                "迪亚拉",
                "迪兹杰",
                "迪法",
                "那慕儿",
                "邦达马河谷",
                "都拉斯",
                "都柏林",
                "里夫内",
                "里斯本",
                "里泽省",
                "里约热内卢",
                "里萨拉尔达",
                "里韦拉省",
                "重庆",
                "金塔纳·罗奥",
                "金沙萨",
                "金贾",
                "金边市",
                "金迪亚行政区",
                "金迪奥",
                "釜山",
                "铜带",
                "锡卡索",
                "锡尔特省",
                "锡尔纳克",
                "锡比乌",
                "锡瓦斯",
                "锡莱特",
                "锡那罗亚",
                "长崎县",
                "长野",
                "门多萨",
                "阿亚库乔",
                "阿什哈巴德",
                "阿克莫拉",
                "阿克萨赖",
                "阿克里",
                "阿其那那那区",
                "阿劳卡省",
                "阿南布拉",
                "阿基坦-利穆赞-普瓦图-夏朗德",
                "阿塔卡马大区",
                "阿塔科拉",
                "阿夸伊博姆",
                "阿威罗",
                "阿尔及尔",
                "阿尔杰什",
                "阿尔汉格尔斯克",
                "阿尔萨斯–香槟-阿登–洛林",
                "阿尔达比勒",
                "阿尔达汉",
                "阿尤恩",
                "阿布贾",
                "阿布鲁齐",
                "阿德亚曼",
                "阿拉巴马州",
                "阿拉德",
                "阿拉戈斯",
                "阿拉木图",
                "阿拉木图城",
                "阿拉瓜",
                "阿提卡",
                "阿散蒂",
                "阿斯图里亚斯",
                "阿斯塔纳",
                "阿斯旺省",
                "阿斯特拉罕州",
                "阿比亚",
                "阿治曼",
                "阿特兰蒂达",
                "阿特米萨",
                "阿穆尔",
                "阿肯色州",
                "阿苏艾",
                "阿菲永卡拉希萨尔",
                "阿萨姆邦",
                "阿蒂博尼特",
                "阿西尔",
                "阿达纳省",
                "阿达马瓦",
                "阿那拉芒加",
                "阿里卡和帕里纳科塔",
                "阿雷基帕",
                "阿马帕里",
                "阿马西亚",
                "阿鲁沙",
                "阿黎博里",
                "阿齐莫-安德列发那",
                "陕西省",
                "雅加达",
                "雅西",
                "雪兰莪州",
                "霍克湾",
                "霍姆斯",
                "霍尔木兹甘",
                "霍达兰",
                "霍马斯",
                "霹雳州",
                "青年岛",
                "青森县",
                "青海省",
                "静冈县",
                "非斯-布勒曼",
                "韦姆兰",
                "韦拉克鲁斯",
                "韦梅",
                "韦韦特南戈省",
                "顿涅茨克",
                "首尔",
                "香川县",
                "马佐夫舍",
                "马兰热",
                "马哈拉施特拉邦",
                "马坦萨斯",
                "马塔加尔帕",
                "马塞卢区",
                "马尔丁",
                "马尔伯勒",
                "马尔凯",
                "马尼卡",
                "马尼卡兰",
                "马尼萨",
                "马德里",
                "马托格罗索",
                "马拉",
                "马拉喀什-坦西夫特-豪兹",
                "马拉尼昂",
                "马拉穆列什",
                "马拉蒂亚",
                "马拉迪",
                "马提尼克",
                "马斯喀特",
                "马普托",
                "马普托市",
                "马涅马",
                "马特鲁",
                "马纳瓦图-旺阿努伊",
                "马纳维",
                "马萨亚",
                "马萨诸塞州",
                "马赞达兰",
                "马那瓜省",
                "马里兰州",
                "马雷",
                "马鲁古群岛",
                "高原",
                "魁北克",
                "鲁伍马",
                "鸟取县",
                "麦加",
                "麦哲伦和智利南极区",
                "麦地那",
                "麦迪亚",
                "黑森",
                "黑龙江省"
            ],
            "province0": [
                "丁加奴河",
                "万博",
                "万象省",
                "三角州",
                "三重县",
                "上奥地利",
                "上德梅拉拉-伯比斯",
                "上海",
                "上艾瑟尔",
                "上萨桑德",
                "上马齐亚特拉区",
                "下刚果",
                "下加利福尼亚州",
                "下朱巴",
                "下萨克森州",
                "不列颠哥伦比亚",
                "不来梅",
                "丘基萨卡",
                "丘布特",
                "东京",
                "东佛兰德",
                "东加里曼丹省",
                "东努沙登加拉省",
                "东南苏拉威西省",
                "东南部",
                "东开普省",
                "东开赛",
                "东爪哇省",
                "东部",
                "中吕宋",
                "中国香港特别行政区",
                "中央-卢瓦尔河谷",
                "中央塞尔维亚",
                "中央省",
                "中央邦",
                "中日德兰",
                "中爪哇省",
                "中苏拉威西",
                "中赤道",
                "中部",
                "丹吉尔-得土安",
                "主教-瑙黎",
                "久尔久",
                "乌伊拉",
                "乌兰巴托",
                "乌卡亚利",
                "乌得勒支",
                "乌普沙拉省",
                "乌沙克",
                "乌西马",
                "乔卢特卡",
                "乔科",
                "乔鲁姆",
                "乞力马扎罗",
                "云南省",
                "亚伯达省",
                "亚兹德",
                "亚利桑那",
                "亚历山大省",
                "亚拉奎州",
                "亚松森",
                "亚洛瓦",
                "亚罗斯拉夫尔",
                "亚马孙",
                "亚齐",
                "京畿",
                "京畿道",
                "代尔祖尔",
                "代尼兹利省",
                "仰光",
                "伊万诺-弗兰科夫斯克",
                "伊万诺沃",
                "伊兹密尔",
                "伊利诺伊州",
                "伊卜省",
                "伊卡",
                "伊尔库茨克",
                "伊尔比德",
                "伊尼扬巴内",
                "伊拉姆",
                "伊斯坦布尔",
                "伊斯法罕",
                "伊林加",
                "伊梅列季",
                "伊莫",
                "伊达尔戈州",
                "休达市",
                "伦巴第",
                "伯南布哥",
                "伯尔尼",
                "伯尔齐",
                "佐贺",
                "佛罗里达",
                "佛蒙特州",
                "佩尔尼克州",
                "佩拉维亚",
                "俄亥俄州",
                "俄克拉何马州",
                "俄勒冈州",
                "信德省",
                "俾路支斯坦",
                "克卢日",
                "克察尔特南戈",
                "克尔曼",
                "克尔曼沙阿",
                "克尔谢希尔",
                "克恩滕",
                "克罗斯河",
                "克莱佩达",
                "克雷塔罗",
                "兰巴耶克",
                "关塔那摩",
                "兵库县",
                "内乌肯",
                "内华达州",
                "内夫谢希尔",
                "内布拉斯加州",
                "内格罗河",
                "内罗毕省",
                "内蒙古自治区",
                "冈山",
                "凡城",
                "切尔卡瑟",
                "切尔尼希夫州",
                "列巴普",
                "列日",
                "利古里亚",
                "利沃夫",
                "利贝雷茨",
                "利隆圭",
                "利雅得",
                "利马",
                "利马（市）",
                "别尔哥罗德",
                "加丹加",
                "加兹温",
                "加利福尼亚州",
                "加利西亚",
                "加拉茨",
                "加泰罗尼亚",
                "加济安泰普",
                "加里宁格勒",
                "努瓦克肖特区",
                "勃兰登堡",
                "勃艮第-弗朗士-孔泰",
                "北京",
                "北卡罗莱纳州",
                "北地区",
                "北布拉班特",
                "北方",
                "北方省",
                "北方邦",
                "北桑坦德",
                "北棉兰老",
                "北海道",
                "北苏拉威西",
                "北苏门答腊省",
                "北荷兰",
                "北莱茵-威斯特法伦州",
                "北达科他州",
                "北部-加来海峡-庇卡底",
                "北里奥格兰德",
                "北阿坎德邦",
                "北领地",
                "北马绍纳兰",
                "北黎巴嫩",
                "十八山",
                "千叶县",
                "华盛顿州",
                "南下加利福尼亚",
                "南丹麦",
                "南加里曼丹",
                "南卡罗来纳州",
                "南呼罗珊",
                "南地区",
                "南基伍省",
                "南方",
                "南曼兰",
                "南澳大利亚州",
                "南苏门答腊省",
                "南荷兰省",
                "南达科他州",
                "南部",
                "南都柏林",
                "南里奥格兰德",
                "南马托格罗索",
                "博亚卡",
                "博卢",
                "博尔古",
                "博尔诺",
                "博托沙尼",
                "占碑",
                "卡亚俄",
                "卡什卡达里亚",
                "卡克塔",
                "卡内洛内斯",
                "卡卢加",
                "卡哈马卡",
                "卡塔马卡",
                "卡尔巴拉",
                "卡尔斯省",
                "卡尔达斯",
                "卡巴尔达-巴尔卡里亚",
                "卡巴罗莱",
                "卡拉什-塞维林",
                "卡拉布里亚",
                "卡拉干达",
                "卡拉曼省",
                "卡拉沃沃",
                "卡拉河",
                "卡斯塔莫努",
                "卡斯蒂利亚-拉曼查",
                "卡斯蒂利亚和莱昂",
                "卡杜纳",
                "卡约",
                "卡纳塔克邦",
                "卡耶斯",
                "卡萨拉省",
                "卡萨纳雷",
                "卡诺",
                "卡赫拉曼马拉什",
                "卡迪西亚",
                "卡马圭",
                "卡齐纳",
                "卢塞恩",
                "卢布尔雅那市",
                "卢布斯卡",
                "卢布林省",
                "卢森堡",
                "卢汉斯克",
                "卢瓦尔河地区",
                "卢萨卡",
                "印第安纳州",
                "危地马拉",
                "厄德尔",
                "厄斯帕尔塔",
                "发罗拉",
                "古卢区",
                "古吉拉特邦",
                "古巴圣地亚哥省",
                "台北市",
                "吉兰",
                "吉大港",
                "吉布提",
                "吉扎克",
                "吉斯伯恩",
                "吉林省",
                "吉赞",
                "吉隆坡",
                "君士坦丁",
                "呵叻府（那空叻差是玛）",
                "呼罗珊",
                "哈兰",
                "哈利斯科",
                "哈塔伊",
                "哈尔尤",
                "哈尔科夫",
                "哈拉雷",
                "哈特隆",
                "哈里亚纳邦",
                "哈马丹",
                "哥伦比亚特区",
                "哥罗德诺",
                "啥格勒布",
                "喀土穆",
                "喀布尔省",
                "喀拉拉邦",
                "四川省",
                "国家首都区",
                "图林根州",
                "圣佩得罗-德马科里斯",
                "圣保罗州",
                "圣克里斯托瓦尔",
                "圣克鲁斯",
                "圣凯瑟琳",
                "圣加仑",
                "圣卡塔琳娜",
                "圣地亚哥",
                "圣地亚哥-德尔埃斯特罗",
                "圣埃斯皮里图州",
                "圣多明各",
                "圣安娜",
                "圣斯皮里图斯",
                "圣胡安",
                "圣菲",
                "圣萨尔瓦多",
                "圣费尔南多",
                "圣路易斯",
                "圣路易斯波托西州",
                "圣路易省",
                "圣迈克尔",
                "坎佩切",
                "坎塔布里亚自治区",
                "坎大哈省",
                "坎帕尼亚",
                "坎帕拉",
                "坎特伯雷",
                "坦波夫",
                "埃努古",
                "埃多",
                "埃尔比勒",
                "埃尔祖鲁姆",
                "埃斯基谢希尔",
                "埃斯昆特拉省",
                "埃斯派亚",
                "埃斯特利",
                "埃斯特雷马杜拉",
                "埃诺",
                "埃迪尔内省",
                "埃邦伊",
                "基利斯",
                "基加利",
                "基希讷乌",
                "基戈马",
                "基洛沃赫拉德",
                "基纳",
                "埼玉县",
                "堪萨斯州",
                "塔伊兹",
                "塔噶",
                "塔奇拉",
                "塔尔图省",
                "塔尔诺皮尔",
                "塔巴斯科",
                "塔德莱-艾济拉勒",
                "塔扎-胡塞马-陶纳特",
                "塔拉帕卡",
                "塔拉纳基",
                "塔斯马尼亚州",
                "塔毛利帕斯州",
                "塔波拉",
                "塔里哈",
                "塞图巴尔",
                "塞姆南",
                "塞尔希培",
                "塞得港",
                "塞瓦斯托波尔",
                "塞萨尔",
                "塞阿拉",
                "墨西哥",
                "多哈",
                "多尔日",
                "大分县",
                "大卡萨布兰卡",
                "大吉德州",
                "大波兰",
                "大田广域市",
                "大西洋",
                "大邱广域市",
                "大阪府",
                "大阿克拉",
                "天津",
                "太特",
                "夸拉",
                "夸祖鲁-纳塔尔省",
                "奇南德加",
                "奇瓦瓦州",
                "奇里基",
                "奇马尔特南戈",
                "奥什",
                "奥伊金斯",
                "奥克兰",
                "奥兰",
                "奥塔戈",
                "奥孙",
                "奥尔杜",
                "奥尔金",
                "奥弗涅",
                "奥弗涅-罗讷-阿尔卑斯",
                "奥斯曼尼耶",
                "奥斯陆",
                "奥波莱",
                "奥洛莫乌茨",
                "奥约",
                "奥西耶克-巴拉尼亚",
                "奥贡",
                "奥里萨邦",
                "奥鲁罗省",
                "姆万扎",
                "姆普马兰加",
                "姆特瓦拉",
                "姆贝亚",
                "威尔士",
                "威尼托",
                "威斯康星",
                "宁夏",
                "安卡什",
                "安卡拉",
                "安塔利亚",
                "安大略",
                "安得拉邦",
                "安徽省",
                "安托法加斯塔",
                "安曼",
                "安特卫普",
                "安瑟巴",
                "安索阿特吉",
                "安纳巴",
                "安蒂奥基亚",
                "安达卢西亚",
                "安集延",
                "宝奇",
                "宾夕法尼亚州",
                "宾戈尔",
                "密歇根州",
                "密苏里州",
                "密西西比州",
                "小波兰",
                "尚利乌尔法",
                "尤卡坦州",
                "尼亚姆茨",
                "尼亚美市",
                "尼亚萨",
                "尼代",
                "尼古拉耶夫",
                "尼安萨",
                "尼尼微",
                "尼日尔",
                "尼特拉",
                "尼科西亚",
                "尼阿里河",
                "屈塔希亚",
                "屈米区",
                "山东省",
                "山口县",
                "山西省",
                "岘港",
                "巴什科尔托斯坦",
                "巴伊亚",
                "巴伐利亚",
                "巴伦西亚",
                "巴克乌",
                "巴利阿里群岛",
                "巴勒克埃西尔",
                "巴厘省",
                "巴基",
                "巴塞尔城市",
                "巴士拉",
                "巴布亚",
                "巴拉奥纳",
                "巴拉那",
                "巴拿马",
                "巴斯克自治区",
                "巴格达",
                "巴比伦",
                "巴特曼河",
                "巴特纳",
                "巴甫洛达尔",
                "巴登-符腾堡",
                "巴纳迪尔",
                "巴西利卡塔",
                "巴马科",
                "布什尔",
                "布列塔尼",
                "布勒伊拉",
                "布埃尼",
                "布宜诺斯艾利斯",
                "布宜诺斯艾利斯省",
                "布尔加斯",
                "布尔萨",
                "布拉加",
                "布拉格",
                "布拉瓦约",
                "布拉索夫",
                "布斯克吕",
                "布朗斯克",
                "布泽乌",
                "布海拉",
                "布琼布拉城市省",
                "布达佩斯",
                "布雷斯特",
                "布鲁塞尔",
                "希奥利艾",
                "希尼安加",
                "帕扎尔吉克州",
                "帕拉",
                "帕拉伊巴",
                "帕拉马里博区",
                "帕涅韦日斯",
                "广东省",
                "广岛县",
                "广西省",
                "庆和省",
                "庆尚南道",
                "库姆省",
                "库尔德斯坦",
                "库尔纳",
                "库斯卡特兰",
                "库斯塔奈",
                "库马诺沃",
                "康康行政区",
                "康斯坦察",
                "康涅狄格州",
                "廖内省",
                "建江",
                "开伯尔-普赫图赫瓦省",
                "开塞利省",
                "开罗",
                "弗吉尼亚州",
                "弗拉基米尔",
                "弗朗恰",
                "弗朗西斯科·莫拉桑",
                "弗留利-威尼斯朱利亚",
                "弗罗马格尔",
                "弗里斯兰",
                "彭亨州",
                "得克萨斯州",
                "德伦特",
                "德尔加杜角",
                "德里邦",
                "德雷达瓦",
                "德黑兰",
                "忠清南道",
                "怀俄明州",
                "怀卡托区",
                "恩泽雷科雷",
                "恩特雷里奥斯",
                "恰尔肯德邦",
                "恰帕斯",
                "恰纳卡莱",
                "恰蒂斯加尔邦",
                "惠灵顿",
                "戈亚斯",
                "戈尔日",
                "戈尔韦郡",
                "戈梅利",
                "戈莱斯坦",
                "扎姆法拉",
                "扎波里日亚",
                "托利马",
                "托卡特",
                "托坎廷斯",
                "托斯卡纳",
                "扬博尔州",
                "拉利伯塔德省",
                "拉卡省",
                "拉各斯",
                "拉巴斯",
                "拉巴特-萨累-宰穆尔-扎埃尔",
                "拉斯图纳斯省",
                "拉斯海马酋长国",
                "拉杰沙希",
                "拉潘帕",
                "拉维加",
                "拉罗马纳",
                "拉腊",
                "拉贝河畔乌斯季",
                "拉贾斯坦邦",
                "拉里奥哈",
                "拉齐奥",
                "拜尼苏韦夫",
                "拿曼干州",
                "捷斯",
                "提济乌祖",
                "摩拉维亚-西里西亚州",
                "撒丁岛",
                "文尼察",
                "斯利文",
                "斯基克达",
                "斯塔夫罗波尔边疆区",
                "斯库台",
                "斯德哥尔摩",
                "斯普利特-达尔马提亚",
                "斯科纳",
                "新加坡",
                "新南威尔士",
                "新埃斯帕塔",
                "新墨西哥州",
                "新斯科舍",
                "新泽西州",
                "新疆维吾尔自治区",
                "新罕布什尔州",
                "新莱昂",
                "新西伯利亚州",
                "施蒂里亚",
                "旁遮普邦",
                "日内瓦",
                "日利纳",
                "日惹",
                "日托米尔州",
                "旧扎戈拉州",
                "昆士兰州",
                "昆迪纳马卡",
                "昌迪加尔",
                "明亚",
                "明古鲁",
                "明尼苏达州",
                "普伦蒂湾",
                "普列文州",
                "普利亚",
                "普埃布拉州",
                "普拉霍瓦河",
                "普罗夫迪夫州",
                "普罗旺斯-阿尔卑斯-蔚蓝海岸",
                "普诺",
                "曼尼托巴省",
                "曼尼普尔邦",
                "曼谷",
                "曼齐尼",
                "朗多尼亚",
                "朗格多克-鲁西永-南部-比利牛斯",
                "本地治里邦",
                "本格拉",
                "杜兰戈州",
                "杜卡拉-阿卜达",
                "杜阿尔特省",
                "杰勒法",
                "杰尔",
                "松索纳特",
                "极北部",
                "林堡",
                "林波波",
                "枥木县",
                "柏林",
                "查瓜纳斯",
                "查科",
                "查谟和克什米尔邦",
                "栋加",
                "格拉玛",
                "格拉纳达省",
                "格罗宁根省",
                "格雷罗",
                "格鲁吉亚",
                "桑坦德",
                "梅克伦堡-前波美拉尼亚州",
                "梅克内斯-塔菲拉勒特",
                "梅利利亚市",
                "梅塔",
                "梅尔辛",
                "梅赫丁茨",
                "梅里达州",
                "森美兰",
                "楚卡宗",
                "楠普拉",
                "楠格哈尔",
                "比亚克拉拉",
                "比什凯克",
                "比哈尔邦",
                "比奥比奥",
                "比托拉",
                "比斯特里察-讷瑟乌德",
                "比绍区",
                "比耶",
                "比那尔德里奥",
                "比霍尔",
                "水库",
                "汉堡",
                "江原道",
                "江布尔",
                "江苏省",
                "江西省",
                "沃伦",
                "沃尔恰",
                "沃州",
                "沃罗涅日河",
                "沙劳越",
                "沙巴州",
                "沙维雅-瓦拉迪格",
                "河内市",
                "河北省",
                "河南省",
                "河口湾",
                "河流",
                "法兰德斯布拉班特",
                "法兰西岛",
                "法尔斯",
                "法尤姆",
                "法属圭亚拉",
                "波哥大",
                "波图格萨",
                "波尔图",
                "波尔塔瓦",
                "波德戈里察",
                "波德拉谢省",
                "波托西",
                "波斯尼亚和黑塞哥维那联邦",
                "波美拉尼亚",
                "泰伦加纳邦",
                "泰基尔达",
                "泰布克",
                "泰米尔纳德邦",
                "泽兰",
                "洛斯里奥斯",
                "洛里",
                "洛雷托",
                "洛雷斯坦",
                "津德尔",
                "派桑杜",
                "济加尔",
                "济州",
                "济金绍尔",
                "浙江省",
                "海南省",
                "海尔德兰",
                "海德马克",
                "海法区",
                "湖北省",
                "湖南省",
                "湖大区",
                "滨海",
                "滨海区",
                "滨海和山区",
                "潟湖",
                "澳大利亚首都领地",
                "焦夫",
                "爱尔巴桑",
                "爱知县",
                "爱达荷州",
                "特伦蒂洛-上阿迪杰",
                "特拉华州",
                "特拉布宗",
                "特拉维夫",
                "特莱姆森",
                "特里普拉邦",
                "犹他州",
                "犹太自治州",
                "玛格达莱纳",
                "玛雅贝克",
                "玻利瓦尔",
                "玻利瓦尔州",
                "班加西",
                "班吉",
                "班斯卡-比斯特里察",
                "班顿杜省",
                "瓜亚斯",
                "瓜德罗普岛",
                "瓜纳华托州",
                "瓜纳卡斯特",
                "瓜里科",
                "瓦哈卡",
                "瓦尔加斯",
                "瓦尔帕莱索",
                "瓦尔纳州",
                "甘肃省",
                "田纳西州",
                "甲拉巴松区",
                "白尼罗",
                "皮乌拉",
                "皮埃蒙特",
                "皮奥伊",
                "皮尔森",
                "皮钦查",
                "盖勒马",
                "石勒苏益格-赫尔斯泰因",
                "石川县",
                "神奈川",
                "福井县",
                "福冈",
                "福建省",
                "科克",
                "科利马州",
                "科威特",
                "科尔多瓦",
                "科尔察",
                "科尔特斯",
                "科尼亚",
                "科恰班巴省",
                "科罗拉多",
                "科英布拉",
                "科西嘉岛",
                "科贾埃利",
                "科赫德斯",
                "科连特斯",
                "科迪勒拉区",
                "科阿韦拉州",
                "科隆",
                "穆列什",
                "穆哈拉格",
                "穆尔西亚",
                "穆斯塔加奈姆",
                "突尼斯省",
                "第亚那",
                "第比利斯市",
                "第聂伯罗彼得罗夫斯克",
                "米兰达",
                "米努夫",
                "米却肯州",
                "米纳斯吉拉斯",
                "米苏拉塔",
                "米西奥内斯",
                "索哈杰",
                "索法拉",
                "索科托",
                "索诺拉州",
                "索非亚市",
                "红海",
                "约兹罗",
                "约罗",
                "约贝",
                "纳亚里特",
                "纳尔逊",
                "纳瓦拉",
                "纳米贝省",
                "纳里尼奥",
                "纽约州",
                "纽芬兰",
                "维也纳",
                "维多利亚",
                "维尔纽斯",
                "维捷布斯克",
                "缅因州",
                "罗兹",
                "罗加兰",
                "罗安达",
                "罗德岛",
                "罗赖马",
                "群马县",
                "翁多",
                "翁布里亚",
                "考卡河谷",
                "考纳斯",
                "耶路撒冷",
                "联邦区",
                "联邦首都区",
                "肯塔基",
                "胡内多阿拉",
                "胡宁",
                "胡志明市",
                "胡胡伊",
                "胡齐斯坦",
                "膝部",
                "自由邦省",
                "舒门州",
                "艾奥瓦",
                "艾拉泽",
                "艾斯尤特",
                "艾格瓦特",
                "艾登",
                "艾米利亚-罗马涅",
                "芒杜尔",
                "花拉子模",
                "芹苴",
                "苏克雷省",
                "苏利亚",
                "苏尔汉河",
                "苏恰瓦河",
                "苏斯-马萨-德拉",
                "苏格兰",
                "苏梅",
                "苏黎世",
                "英格兰",
                "茨城县",
                "荷台达",
                "莫克瓜",
                "莫斯科",
                "莫普提区",
                "莫纳加斯",
                "莫罗戈罗",
                "莫诺",
                "莫雷洛斯",
                "莱昂省",
                "莱茵兰-普法尔茨州",
                "萨克森-安哈尔特州",
                "萨克森州",
                "萨卡特卡斯",
                "萨图马雷",
                "萨姆松",
                "萨尔兰州",
                "萨尔特",
                "萨尔茨堡州",
                "萨拉赫丁省",
                "萨斯喀彻温省",
                "萨格勒布市",
                "萨瓦内",
                "蒂巴扎",
                "蒂米什",
                "蒂罗尔",
                "蒙大拿州",
                "蒙得维的亚省",
                "蒙特塞拉多州",
                "蔚山",
                "裂谷",
                "西兰",
                "西加里曼丹",
                "西努沙登加拉省",
                "西北区",
                "西北省",
                "西北部",
                "西南",
                "西南芬兰区",
                "西孟加拉邦",
                "西开普省",
                "西开赛省",
                "西弗兰德省",
                "西弗吉尼亚州",
                "西恩福格斯",
                "西澳大利亚州",
                "西爪哇省",
                "西米沙鄢",
                "西约塔兰",
                "西苏门答腊",
                "西西里岛",
                "西迪贝勒阿巴斯",
                "西部",
                "西部-舍拉拉德-贝尼赫森",
                "西里西亚",
                "西阿格德尔",
                "西马绍纳兰",
                "诺夫哥罗德",
                "诺曼底",
                "谢戈德阿维拉",
                "谢赫村",
                "豪登省",
                "贝凯什州",
                "贝努埃",
                "贝尼",
                "贝沙尔",
                "贝贾亚",
                "贝鲁特",
                "贡贝",
                "贵州省",
                "赛达",
                "赞比西亚",
                "赞詹",
                "赤道",
                "赫尔松",
                "赫拉德茨-克拉洛韦",
                "赫拉特",
                "赫梅利尼茨基",
                "路易斯安那州",
                "车里雅宾斯克",
                "辽宁省",
                "达卡",
                "达吉斯坦",
                "达喀尔",
                "达累斯萨拉姆",
                "迈尔盖卜",
                "迈桑",
                "迪亚巴克尔",
                "迪亚拉",
                "迪兹杰",
                "迪法",
                "那慕儿",
                "邦达马河谷",
                "都拉斯",
                "都柏林",
                "里夫内",
                "里斯本",
                "里泽省",
                "里约热内卢",
                "里萨拉尔达",
                "里韦拉省",
                "重庆",
                "金塔纳·罗奥",
                "金沙萨",
                "金贾",
                "金边市",
                "金迪亚行政区",
                "金迪奥",
                "釜山",
                "铜带",
                "锡卡索",
                "锡尔特省",
                "锡尔纳克",
                "锡比乌",
                "锡瓦斯",
                "锡莱特",
                "锡那罗亚",
                "长崎县",
                "长野",
                "门多萨",
                "阿亚库乔",
                "阿什哈巴德",
                "阿克莫拉",
                "阿克萨赖",
                "阿克里",
                "阿其那那那区",
                "阿劳卡省",
                "阿南布拉",
                "阿基坦-利穆赞-普瓦图-夏朗德",
                "阿塔卡马大区",
                "阿塔科拉",
                "阿夸伊博姆",
                "阿威罗",
                "阿尔及尔",
                "阿尔杰什",
                "阿尔汉格尔斯克",
                "阿尔萨斯–香槟-阿登–洛林",
                "阿尔达比勒",
                "阿尔达汉",
                "阿尤恩",
                "阿布贾",
                "阿布鲁齐",
                "阿德亚曼",
                "阿拉巴马州",
                "阿拉德",
                "阿拉戈斯",
                "阿拉木图",
                "阿拉木图城",
                "阿拉瓜",
                "阿提卡",
                "阿散蒂",
                "阿斯图里亚斯",
                "阿斯塔纳",
                "阿斯旺省",
                "阿斯特拉罕州",
                "阿比亚",
                "阿治曼",
                "阿特兰蒂达",
                "阿特米萨",
                "阿穆尔",
                "阿肯色州",
                "阿苏艾",
                "阿菲永卡拉希萨尔",
                "阿萨姆邦",
                "阿蒂博尼特",
                "阿西尔",
                "阿达纳省",
                "阿达马瓦",
                "阿那拉芒加",
                "阿里卡和帕里纳科塔",
                "阿雷基帕",
                "阿马帕里",
                "阿马西亚",
                "阿鲁沙",
                "阿黎博里",
                "阿齐莫-安德列发那",
                "陕西省",
                "雅加达",
                "雅西",
                "雪兰莪州",
                "霍克湾",
                "霍姆斯",
                "霍尔木兹甘",
                "霍达兰",
                "霍马斯",
                "霹雳州",
                "青年岛",
                "青森县",
                "青海省",
                "静冈县",
                "非斯-布勒曼",
                "韦姆兰",
                "韦拉克鲁斯",
                "韦梅",
                "韦韦特南戈省",
                "顿涅茨克",
                "首尔",
                "香川县",
                "马佐夫舍",
                "马兰热",
                "马哈拉施特拉邦",
                "马坦萨斯",
                "马塔加尔帕",
                "马塞卢区",
                "马尔丁",
                "马尔伯勒",
                "马尔凯",
                "马尼卡",
                "马尼卡兰",
                "马尼萨",
                "马德里",
                "马托格罗索",
                "马拉",
                "马拉喀什-坦西夫特-豪兹",
                "马拉尼昂",
                "马拉穆列什",
                "马拉蒂亚",
                "马拉迪",
                "马提尼克",
                "马斯喀特",
                "马普托",
                "马普托市",
                "马涅马",
                "马特鲁",
                "马纳瓦图-旺阿努伊",
                "马纳维",
                "马萨亚",
                "马萨诸塞州",
                "马赞达兰",
                "马那瓜省",
                "马里兰州",
                "马雷",
                "马鲁古群岛",
                "高原",
                "魁北克",
                "鲁伍马",
                "鸟取县",
                "麦加",
                "麦哲伦和智利南极区",
                "麦地那",
                "麦迪亚",
                "黑森",
                "黑龙江省"
            ]
        },
        "meaMaxMin": {
            "sales_amount(SUM)1": {
                "max": 485170.97099999926,
                "min": 3.465
            },
            "sales_amount(SUM)0": {
                "max": 485170.97099999926,
                "min": 3.465
            }
        },
        "records": [
            {
                "province0": "丁加奴河",
                "sales_amount(SUM)0": 1884.24,
                "sales_amount(SUM)1": 1884.24,
                "province1": "丁加奴河"
            },
            {
                "province0": "万博",
                "sales_amount(SUM)0": 3052.65,
                "sales_amount(SUM)1": 3052.65,
                "province1": "万博"
            },
            {
                "province0": "万象省",
                "sales_amount(SUM)0": 590.1336,
                "sales_amount(SUM)1": 590.1336,
                "province1": "万象省"
            },
            {
                "province0": "三角州",
                "sales_amount(SUM)0": 1183.7610000000002,
                "sales_amount(SUM)1": 1183.7610000000002,
                "province1": "三角州"
            },
            {
                "province0": "三重县",
                "sales_amount(SUM)0": 2998.5299999999997,
                "sales_amount(SUM)1": 2998.5299999999997,
                "province1": "三重县"
            },
            {
                "province0": "上奥地利",
                "sales_amount(SUM)0": 6189.839999999999,
                "sales_amount(SUM)1": 6189.839999999999,
                "province1": "上奥地利"
            },
            {
                "province0": "上德梅拉拉-伯比斯",
                "sales_amount(SUM)0": 933.8599999999999,
                "sales_amount(SUM)1": 933.8599999999999,
                "province1": "上德梅拉拉-伯比斯"
            },
            {
                "province0": "上海",
                "sales_amount(SUM)0": 31275.791999999994,
                "sales_amount(SUM)1": 31275.791999999994,
                "province1": "上海"
            },
            {
                "province0": "上艾瑟尔",
                "sales_amount(SUM)0": 4295.621999999999,
                "sales_amount(SUM)1": 4295.621999999999,
                "province1": "上艾瑟尔"
            },
            {
                "province0": "上萨桑德",
                "sales_amount(SUM)0": 2195.7599999999998,
                "sales_amount(SUM)1": 2195.7599999999998,
                "province1": "上萨桑德"
            },
            {
                "province0": "上马齐亚特拉区",
                "sales_amount(SUM)0": 206.07,
                "sales_amount(SUM)1": 206.07,
                "province1": "上马齐亚特拉区"
            },
            {
                "province0": "下刚果",
                "sales_amount(SUM)0": 337.5,
                "sales_amount(SUM)1": 337.5,
                "province1": "下刚果"
            },
            {
                "province0": "下加利福尼亚州",
                "sales_amount(SUM)0": 27013.103960000015,
                "sales_amount(SUM)1": 27013.103960000015,
                "province1": "下加利福尼亚州"
            },
            {
                "province0": "下朱巴",
                "sales_amount(SUM)0": 353.52,
                "sales_amount(SUM)1": 353.52,
                "province1": "下朱巴"
            },
            {
                "province0": "下萨克森州",
                "sales_amount(SUM)0": 56148.23099999997,
                "sales_amount(SUM)1": 56148.23099999997,
                "province1": "下萨克森州"
            },
            {
                "province0": "不列颠哥伦比亚",
                "sales_amount(SUM)0": 9544.38,
                "sales_amount(SUM)1": 9544.38,
                "province1": "不列颠哥伦比亚"
            },
            {
                "province0": "不来梅",
                "sales_amount(SUM)0": 19594.791,
                "sales_amount(SUM)1": 19594.791,
                "province1": "不来梅"
            },
            {
                "province0": "丘基萨卡",
                "sales_amount(SUM)0": 1472.1399999999999,
                "sales_amount(SUM)1": 1472.1399999999999,
                "province1": "丘基萨卡"
            },
            {
                "province0": "丘布特",
                "sales_amount(SUM)0": 1285.8300000000002,
                "sales_amount(SUM)1": 1285.8300000000002,
                "province1": "丘布特"
            },
            {
                "province0": "东京",
                "sales_amount(SUM)0": 17472.63000000001,
                "sales_amount(SUM)1": 17472.63000000001,
                "province1": "东京"
            },
            {
                "province0": "东佛兰德",
                "sales_amount(SUM)0": 12399.449999999997,
                "sales_amount(SUM)1": 12399.449999999997,
                "province1": "东佛兰德"
            },
            {
                "province0": "东加里曼丹省",
                "sales_amount(SUM)0": 16008.034799999996,
                "sales_amount(SUM)1": 16008.034799999996,
                "province1": "东加里曼丹省"
            },
            {
                "province0": "东努沙登加拉省",
                "sales_amount(SUM)0": 4207.7031,
                "sales_amount(SUM)1": 4207.7031,
                "province1": "东努沙登加拉省"
            },
            {
                "province0": "东南苏拉威西省",
                "sales_amount(SUM)0": 9814.038,
                "sales_amount(SUM)1": 9814.038,
                "province1": "东南苏拉威西省"
            },
            {
                "province0": "东南部",
                "sales_amount(SUM)0": 617.46,
                "sales_amount(SUM)1": 617.46,
                "province1": "东南部"
            },
            {
                "province0": "东开普省",
                "sales_amount(SUM)0": 11231.85,
                "sales_amount(SUM)1": 11231.85,
                "province1": "东开普省"
            },
            {
                "province0": "东开赛",
                "sales_amount(SUM)0": 4859.459999999999,
                "sales_amount(SUM)1": 4859.459999999999,
                "province1": "东开赛"
            },
            {
                "province0": "东爪哇省",
                "sales_amount(SUM)0": 50361.27539999996,
                "sales_amount(SUM)1": 50361.27539999996,
                "province1": "东爪哇省"
            },
            {
                "province0": "东部",
                "sales_amount(SUM)0": 10681.889999999996,
                "sales_amount(SUM)1": 10681.889999999996,
                "province1": "东部"
            },
            {
                "province0": "中吕宋",
                "sales_amount(SUM)0": 6238.497000000001,
                "sales_amount(SUM)1": 6238.497000000001,
                "province1": "中吕宋"
            },
            {
                "province0": "中国香港特别行政区",
                "sales_amount(SUM)0": 6147.000000000002,
                "sales_amount(SUM)1": 6147.000000000002,
                "province1": "中国香港特别行政区"
            },
            {
                "province0": "中央-卢瓦尔河谷",
                "sales_amount(SUM)0": 10771.0485,
                "sales_amount(SUM)1": 10771.0485,
                "province1": "中央-卢瓦尔河谷"
            },
            {
                "province0": "中央塞尔维亚",
                "sales_amount(SUM)0": 731.91,
                "sales_amount(SUM)1": 731.91,
                "province1": "中央塞尔维亚"
            },
            {
                "province0": "中央省",
                "sales_amount(SUM)0": 2555.49,
                "sales_amount(SUM)1": 2555.49,
                "province1": "中央省"
            },
            {
                "province0": "中央邦",
                "sales_amount(SUM)0": 27069.779999999988,
                "sales_amount(SUM)1": 27069.779999999988,
                "province1": "中央邦"
            },
            {
                "province0": "中日德兰",
                "sales_amount(SUM)0": 33.678,
                "sales_amount(SUM)1": 33.678,
                "province1": "中日德兰"
            },
            {
                "province0": "中爪哇省",
                "sales_amount(SUM)0": 25363.265400000008,
                "sales_amount(SUM)1": 25363.265400000008,
                "province1": "中爪哇省"
            },
            {
                "province0": "中苏拉威西",
                "sales_amount(SUM)0": 4203.8085,
                "sales_amount(SUM)1": 4203.8085,
                "province1": "中苏拉威西"
            },
            {
                "province0": "中赤道",
                "sales_amount(SUM)0": 1045.6200000000001,
                "sales_amount(SUM)1": 1045.6200000000001,
                "province1": "中赤道"
            },
            {
                "province0": "中部",
                "sales_amount(SUM)0": 23162.01752000001,
                "sales_amount(SUM)1": 23162.01752000001,
                "province1": "中部"
            },
            {
                "province0": "丹吉尔-得土安",
                "sales_amount(SUM)0": 6334.14,
                "sales_amount(SUM)1": 6334.14,
                "province1": "丹吉尔-得土安"
            },
            {
                "province0": "主教-瑙黎",
                "sales_amount(SUM)0": 159.10399999999998,
                "sales_amount(SUM)1": 159.10399999999998,
                "province1": "主教-瑙黎"
            },
            {
                "province0": "久尔久",
                "sales_amount(SUM)0": 253.65,
                "sales_amount(SUM)1": 253.65,
                "province1": "久尔久"
            },
            {
                "province0": "乌伊拉",
                "sales_amount(SUM)0": 1287.4103999999998,
                "sales_amount(SUM)1": 1287.4103999999998,
                "province1": "乌伊拉"
            },
            {
                "province0": "乌兰巴托",
                "sales_amount(SUM)0": 6789.839999999999,
                "sales_amount(SUM)1": 6789.839999999999,
                "province1": "乌兰巴托"
            },
            {
                "province0": "乌卡亚利",
                "sales_amount(SUM)0": 1433.3158799999999,
                "sales_amount(SUM)1": 1433.3158799999999,
                "province1": "乌卡亚利"
            },
            {
                "province0": "乌得勒支",
                "sales_amount(SUM)0": 10222.106999999998,
                "sales_amount(SUM)1": 10222.106999999998,
                "province1": "乌得勒支"
            },
            {
                "province0": "乌普沙拉省",
                "sales_amount(SUM)0": 1340.46,
                "sales_amount(SUM)1": 1340.46,
                "province1": "乌普沙拉省"
            },
            {
                "province0": "乌沙克",
                "sales_amount(SUM)0": 46.92,
                "sales_amount(SUM)1": 46.92,
                "province1": "乌沙克"
            },
            {
                "province0": "乌西马",
                "sales_amount(SUM)0": 17995.02,
                "sales_amount(SUM)1": 17995.02,
                "province1": "乌西马"
            },
            {
                "province0": "乔卢特卡",
                "sales_amount(SUM)0": 5511.099119999999,
                "sales_amount(SUM)1": 5511.099119999999,
                "province1": "乔卢特卡"
            },
            {
                "province0": "乔科",
                "sales_amount(SUM)0": 1186.52592,
                "sales_amount(SUM)1": 1186.52592,
                "province1": "乔科"
            },
            {
                "province0": "乔鲁姆",
                "sales_amount(SUM)0": 487.29599999999994,
                "sales_amount(SUM)1": 487.29599999999994,
                "province1": "乔鲁姆"
            },
            {
                "province0": "乞力马扎罗",
                "sales_amount(SUM)0": 496.77,
                "sales_amount(SUM)1": 496.77,
                "province1": "乞力马扎罗"
            },
            {
                "province0": "云南省",
                "sales_amount(SUM)0": 11112.6,
                "sales_amount(SUM)1": 11112.6,
                "province1": "云南省"
            },
            {
                "province0": "亚伯达省",
                "sales_amount(SUM)0": 6550.860000000001,
                "sales_amount(SUM)1": 6550.860000000001,
                "province1": "亚伯达省"
            },
            {
                "province0": "亚兹德",
                "sales_amount(SUM)0": 567.8100000000001,
                "sales_amount(SUM)1": 567.8100000000001,
                "province1": "亚兹德"
            },
            {
                "province0": "亚利桑那",
                "sales_amount(SUM)0": 35282.001,
                "sales_amount(SUM)1": 35282.001,
                "province1": "亚利桑那"
            },
            {
                "province0": "亚历山大省",
                "sales_amount(SUM)0": 19899.389999999996,
                "sales_amount(SUM)1": 19899.389999999996,
                "province1": "亚历山大省"
            },
            {
                "province0": "亚拉奎州",
                "sales_amount(SUM)0": 908.8026,
                "sales_amount(SUM)1": 908.8026,
                "province1": "亚拉奎州"
            },
            {
                "province0": "亚松森",
                "sales_amount(SUM)0": 503.74,
                "sales_amount(SUM)1": 503.74,
                "province1": "亚松森"
            },
            {
                "province0": "亚洛瓦",
                "sales_amount(SUM)0": 35.46,
                "sales_amount(SUM)1": 35.46,
                "province1": "亚洛瓦"
            },
            {
                "province0": "亚罗斯拉夫尔",
                "sales_amount(SUM)0": 5862.000000000001,
                "sales_amount(SUM)1": 5862.000000000001,
                "province1": "亚罗斯拉夫尔"
            },
            {
                "province0": "亚马孙",
                "sales_amount(SUM)0": 6114.3319200000005,
                "sales_amount(SUM)1": 6114.3319200000005,
                "province1": "亚马孙"
            },
            {
                "province0": "亚齐",
                "sales_amount(SUM)0": 337.5057,
                "sales_amount(SUM)1": 337.5057,
                "province1": "亚齐"
            },
            {
                "province0": "京畿",
                "sales_amount(SUM)0": 5221.586999999999,
                "sales_amount(SUM)1": 5221.586999999999,
                "province1": "京畿"
            },
            {
                "province0": "京畿道",
                "sales_amount(SUM)0": 7445.1929999999975,
                "sales_amount(SUM)1": 7445.1929999999975,
                "province1": "京畿道"
            },
            {
                "province0": "代尔祖尔",
                "sales_amount(SUM)0": 1573.2960000000003,
                "sales_amount(SUM)1": 1573.2960000000003,
                "province1": "代尔祖尔"
            },
            {
                "province0": "代尼兹利省",
                "sales_amount(SUM)0": 1104.2759999999998,
                "sales_amount(SUM)1": 1104.2759999999998,
                "province1": "代尼兹利省"
            },
            {
                "province0": "仰光",
                "sales_amount(SUM)0": 34138.87169999998,
                "sales_amount(SUM)1": 34138.87169999998,
                "province1": "仰光"
            },
            {
                "province0": "伊万诺-弗兰科夫斯克",
                "sales_amount(SUM)0": 662.3699999999999,
                "sales_amount(SUM)1": 662.3699999999999,
                "province1": "伊万诺-弗兰科夫斯克"
            },
            {
                "province0": "伊万诺沃",
                "sales_amount(SUM)0": 1787.1299999999999,
                "sales_amount(SUM)1": 1787.1299999999999,
                "province1": "伊万诺沃"
            },
            {
                "province0": "伊兹密尔",
                "sales_amount(SUM)0": 15161.915999999997,
                "sales_amount(SUM)1": 15161.915999999997,
                "province1": "伊兹密尔"
            },
            {
                "province0": "伊利诺伊州",
                "sales_amount(SUM)0": 80166.10099999986,
                "sales_amount(SUM)1": 80166.10099999986,
                "province1": "伊利诺伊州"
            },
            {
                "province0": "伊卜省",
                "sales_amount(SUM)0": 354.564,
                "sales_amount(SUM)1": 354.564,
                "province1": "伊卜省"
            },
            {
                "province0": "伊卡",
                "sales_amount(SUM)0": 1007.0911999999998,
                "sales_amount(SUM)1": 1007.0911999999998,
                "province1": "伊卡"
            },
            {
                "province0": "伊尔库茨克",
                "sales_amount(SUM)0": 4846.1399999999985,
                "sales_amount(SUM)1": 4846.1399999999985,
                "province1": "伊尔库茨克"
            },
            {
                "province0": "伊尔比德",
                "sales_amount(SUM)0": 158.16,
                "sales_amount(SUM)1": 158.16,
                "province1": "伊尔比德"
            },
            {
                "province0": "伊尼扬巴内",
                "sales_amount(SUM)0": 23.25,
                "sales_amount(SUM)1": 23.25,
                "province1": "伊尼扬巴内"
            },
            {
                "province0": "伊拉姆",
                "sales_amount(SUM)0": 91.35,
                "sales_amount(SUM)1": 91.35,
                "province1": "伊拉姆"
            },
            {
                "province0": "伊斯坦布尔",
                "sales_amount(SUM)0": 31037.46000000001,
                "sales_amount(SUM)1": 31037.46000000001,
                "province1": "伊斯坦布尔"
            },
            {
                "province0": "伊斯法罕",
                "sales_amount(SUM)0": 5072.369999999999,
                "sales_amount(SUM)1": 5072.369999999999,
                "province1": "伊斯法罕"
            },
            {
                "province0": "伊林加",
                "sales_amount(SUM)0": 462.348,
                "sales_amount(SUM)1": 462.348,
                "province1": "伊林加"
            },
            {
                "province0": "伊梅列季",
                "sales_amount(SUM)0": 2162.31,
                "sales_amount(SUM)1": 2162.31,
                "province1": "伊梅列季"
            },
            {
                "province0": "伊莫",
                "sales_amount(SUM)0": 616.2930000000001,
                "sales_amount(SUM)1": 616.2930000000001,
                "province1": "伊莫"
            },
            {
                "province0": "伊达尔戈州",
                "sales_amount(SUM)0": 2177.78,
                "sales_amount(SUM)1": 2177.78,
                "province1": "伊达尔戈州"
            },
            {
                "province0": "休达市",
                "sales_amount(SUM)0": 2589.0660000000003,
                "sales_amount(SUM)1": 2589.0660000000003,
                "province1": "休达市"
            },
            {
                "province0": "伦巴第",
                "sales_amount(SUM)0": 34590.558,
                "sales_amount(SUM)1": 34590.558,
                "province1": "伦巴第"
            },
            {
                "province0": "伯南布哥",
                "sales_amount(SUM)0": 18232.55012,
                "sales_amount(SUM)1": 18232.55012,
                "province1": "伯南布哥"
            },
            {
                "province0": "伯尔尼",
                "sales_amount(SUM)0": 1135.4099999999999,
                "sales_amount(SUM)1": 1135.4099999999999,
                "province1": "伯尔尼"
            },
            {
                "province0": "伯尔齐",
                "sales_amount(SUM)0": 627.6,
                "sales_amount(SUM)1": 627.6,
                "province1": "伯尔齐"
            },
            {
                "province0": "佐贺",
                "sales_amount(SUM)0": 1137.48,
                "sales_amount(SUM)1": 1137.48,
                "province1": "佐贺"
            },
            {
                "province0": "佛罗里达",
                "sales_amount(SUM)0": 89473.708,
                "sales_amount(SUM)1": 89473.708,
                "province1": "佛罗里达"
            },
            {
                "province0": "佛蒙特州",
                "sales_amount(SUM)0": 8929.369999999999,
                "sales_amount(SUM)1": 8929.369999999999,
                "province1": "佛蒙特州"
            },
            {
                "province0": "佩尔尼克州",
                "sales_amount(SUM)0": 14.82,
                "sales_amount(SUM)1": 14.82,
                "province1": "佩尔尼克州"
            },
            {
                "province0": "佩拉维亚",
                "sales_amount(SUM)0": 705.456,
                "sales_amount(SUM)1": 705.456,
                "province1": "佩拉维亚"
            },
            {
                "province0": "俄亥俄州",
                "sales_amount(SUM)0": 78258.13599999993,
                "sales_amount(SUM)1": 78258.13599999993,
                "province1": "俄亥俄州"
            },
            {
                "province0": "俄克拉何马州",
                "sales_amount(SUM)0": 19683.39,
                "sales_amount(SUM)1": 19683.39,
                "province1": "俄克拉何马州"
            },
            {
                "province0": "俄勒冈州",
                "sales_amount(SUM)0": 17431.14999999999,
                "sales_amount(SUM)1": 17431.14999999999,
                "province1": "俄勒冈州"
            },
            {
                "province0": "信德省",
                "sales_amount(SUM)0": 5976.812999999999,
                "sales_amount(SUM)1": 5976.812999999999,
                "province1": "信德省"
            },
            {
                "province0": "俾路支斯坦",
                "sales_amount(SUM)0": 5463.48,
                "sales_amount(SUM)1": 5463.48,
                "province1": "俾路支斯坦"
            },
            {
                "province0": "克卢日",
                "sales_amount(SUM)0": 1272.03,
                "sales_amount(SUM)1": 1272.03,
                "province1": "克卢日"
            },
            {
                "province0": "克察尔特南戈",
                "sales_amount(SUM)0": 7857.089680000002,
                "sales_amount(SUM)1": 7857.089680000002,
                "province1": "克察尔特南戈"
            },
            {
                "province0": "克尔曼",
                "sales_amount(SUM)0": 3837.8399999999997,
                "sales_amount(SUM)1": 3837.8399999999997,
                "province1": "克尔曼"
            },
            {
                "province0": "克尔曼沙阿",
                "sales_amount(SUM)0": 4985.789999999999,
                "sales_amount(SUM)1": 4985.789999999999,
                "province1": "克尔曼沙阿"
            },
            {
                "province0": "克尔谢希尔",
                "sales_amount(SUM)0": 1145.04,
                "sales_amount(SUM)1": 1145.04,
                "province1": "克尔谢希尔"
            },
            {
                "province0": "克恩滕",
                "sales_amount(SUM)0": 11106.330000000002,
                "sales_amount(SUM)1": 11106.330000000002,
                "province1": "克恩滕"
            },
            {
                "province0": "克罗斯河",
                "sales_amount(SUM)0": 1118.3490000000002,
                "sales_amount(SUM)1": 1118.3490000000002,
                "province1": "克罗斯河"
            },
            {
                "province0": "克莱佩达",
                "sales_amount(SUM)0": 121.06799999999998,
                "sales_amount(SUM)1": 121.06799999999998,
                "province1": "克莱佩达"
            },
            {
                "province0": "克雷塔罗",
                "sales_amount(SUM)0": 12189.667599999999,
                "sales_amount(SUM)1": 12189.667599999999,
                "province1": "克雷塔罗"
            },
            {
                "province0": "兰巴耶克",
                "sales_amount(SUM)0": 31.536,
                "sales_amount(SUM)1": 31.536,
                "province1": "兰巴耶克"
            },
            {
                "province0": "关塔那摩",
                "sales_amount(SUM)0": 10942.86356,
                "sales_amount(SUM)1": 10942.86356,
                "province1": "关塔那摩"
            },
            {
                "province0": "兵库县",
                "sales_amount(SUM)0": 3593.91,
                "sales_amount(SUM)1": 3593.91,
                "province1": "兵库县"
            },
            {
                "province0": "内乌肯",
                "sales_amount(SUM)0": 509.076,
                "sales_amount(SUM)1": 509.076,
                "province1": "内乌肯"
            },
            {
                "province0": "内华达州",
                "sales_amount(SUM)0": 16729.102,
                "sales_amount(SUM)1": 16729.102,
                "province1": "内华达州"
            },
            {
                "province0": "内夫谢希尔",
                "sales_amount(SUM)0": 320.736,
                "sales_amount(SUM)1": 320.736,
                "province1": "内夫谢希尔"
            },
            {
                "province0": "内布拉斯加州",
                "sales_amount(SUM)0": 7464.9299999999985,
                "sales_amount(SUM)1": 7464.9299999999985,
                "province1": "内布拉斯加州"
            },
            {
                "province0": "内格罗河",
                "sales_amount(SUM)0": 409.824,
                "sales_amount(SUM)1": 409.824,
                "province1": "内格罗河"
            },
            {
                "province0": "内罗毕省",
                "sales_amount(SUM)0": 7436.700000000002,
                "sales_amount(SUM)1": 7436.700000000002,
                "province1": "内罗毕省"
            },
            {
                "province0": "内蒙古自治区",
                "sales_amount(SUM)0": 13108.11,
                "sales_amount(SUM)1": 13108.11,
                "province1": "内蒙古自治区"
            },
            {
                "province0": "冈山",
                "sales_amount(SUM)0": 145.86,
                "sales_amount(SUM)1": 145.86,
                "province1": "冈山"
            },
            {
                "province0": "凡城",
                "sales_amount(SUM)0": 718.7399999999999,
                "sales_amount(SUM)1": 718.7399999999999,
                "province1": "凡城"
            },
            {
                "province0": "切尔卡瑟",
                "sales_amount(SUM)0": 1008.99,
                "sales_amount(SUM)1": 1008.99,
                "province1": "切尔卡瑟"
            },
            {
                "province0": "切尔尼希夫州",
                "sales_amount(SUM)0": 2794.9200000000005,
                "sales_amount(SUM)1": 2794.9200000000005,
                "province1": "切尔尼希夫州"
            },
            {
                "province0": "列巴普",
                "sales_amount(SUM)0": 644.9580000000001,
                "sales_amount(SUM)1": 644.9580000000001,
                "province1": "列巴普"
            },
            {
                "province0": "列日",
                "sales_amount(SUM)0": 483.24,
                "sales_amount(SUM)1": 483.24,
                "province1": "列日"
            },
            {
                "province0": "利古里亚",
                "sales_amount(SUM)0": 6834.552,
                "sales_amount(SUM)1": 6834.552,
                "province1": "利古里亚"
            },
            {
                "province0": "利沃夫",
                "sales_amount(SUM)0": 4769.94,
                "sales_amount(SUM)1": 4769.94,
                "province1": "利沃夫"
            },
            {
                "province0": "利贝雷茨",
                "sales_amount(SUM)0": 134.01,
                "sales_amount(SUM)1": 134.01,
                "province1": "利贝雷茨"
            },
            {
                "province0": "利隆圭",
                "sales_amount(SUM)0": 366.84,
                "sales_amount(SUM)1": 366.84,
                "province1": "利隆圭"
            },
            {
                "province0": "利雅得",
                "sales_amount(SUM)0": 32958.59999999999,
                "sales_amount(SUM)1": 32958.59999999999,
                "province1": "利雅得"
            },
            {
                "province0": "利马",
                "sales_amount(SUM)0": 64.44,
                "sales_amount(SUM)1": 64.44,
                "province1": "利马"
            },
            {
                "province0": "利马（市）",
                "sales_amount(SUM)0": 11006.512639999995,
                "sales_amount(SUM)1": 11006.512639999995,
                "province1": "利马（市）"
            },
            {
                "province0": "别尔哥罗德",
                "sales_amount(SUM)0": 1166.0400000000002,
                "sales_amount(SUM)1": 1166.0400000000002,
                "province1": "别尔哥罗德"
            },
            {
                "province0": "加丹加",
                "sales_amount(SUM)0": 25337.789999999997,
                "sales_amount(SUM)1": 25337.789999999997,
                "province1": "加丹加"
            },
            {
                "province0": "加兹温",
                "sales_amount(SUM)0": 1129.1699999999998,
                "sales_amount(SUM)1": 1129.1699999999998,
                "province1": "加兹温"
            },
            {
                "province0": "加利福尼亚州",
                "sales_amount(SUM)0": 457687.631500001,
                "sales_amount(SUM)1": 457687.631500001,
                "province1": "加利福尼亚州"
            },
            {
                "province0": "加利西亚",
                "sales_amount(SUM)0": 15173.805,
                "sales_amount(SUM)1": 15173.805,
                "province1": "加利西亚"
            },
            {
                "province0": "加拉茨",
                "sales_amount(SUM)0": 3376.44,
                "sales_amount(SUM)1": 3376.44,
                "province1": "加拉茨"
            },
            {
                "province0": "加泰罗尼亚",
                "sales_amount(SUM)0": 49167.85800000001,
                "sales_amount(SUM)1": 49167.85800000001,
                "province1": "加泰罗尼亚"
            },
            {
                "province0": "加济安泰普",
                "sales_amount(SUM)0": 3514.164,
                "sales_amount(SUM)1": 3514.164,
                "province1": "加济安泰普"
            },
            {
                "province0": "加里宁格勒",
                "sales_amount(SUM)0": 3254.8799999999987,
                "sales_amount(SUM)1": 3254.8799999999987,
                "province1": "加里宁格勒"
            },
            {
                "province0": "努瓦克肖特区",
                "sales_amount(SUM)0": 4020.93,
                "sales_amount(SUM)1": 4020.93,
                "province1": "努瓦克肖特区"
            },
            {
                "province0": "勃兰登堡",
                "sales_amount(SUM)0": 10539.822000000002,
                "sales_amount(SUM)1": 10539.822000000002,
                "province1": "勃兰登堡"
            },
            {
                "province0": "勃艮第-弗朗士-孔泰",
                "sales_amount(SUM)0": 8958.534000000001,
                "sales_amount(SUM)1": 8958.534000000001,
                "province1": "勃艮第-弗朗士-孔泰"
            },
            {
                "province0": "北京",
                "sales_amount(SUM)0": 32304.494999999984,
                "sales_amount(SUM)1": 32304.494999999984,
                "province1": "北京"
            },
            {
                "province0": "北卡罗莱纳州",
                "sales_amount(SUM)0": 55603.16399999997,
                "sales_amount(SUM)1": 55603.16399999997,
                "province1": "北卡罗莱纳州"
            },
            {
                "province0": "北地区",
                "sales_amount(SUM)0": 10456.53,
                "sales_amount(SUM)1": 10456.53,
                "province1": "北地区"
            },
            {
                "province0": "北布拉班特",
                "sales_amount(SUM)0": 15250.218,
                "sales_amount(SUM)1": 15250.218,
                "province1": "北布拉班特"
            },
            {
                "province0": "北方",
                "sales_amount(SUM)0": 1933.86,
                "sales_amount(SUM)1": 1933.86,
                "province1": "北方"
            },
            {
                "province0": "北方省",
                "sales_amount(SUM)0": 1478.46,
                "sales_amount(SUM)1": 1478.46,
                "province1": "北方省"
            },
            {
                "province0": "北方邦",
                "sales_amount(SUM)0": 76295.16000000002,
                "sales_amount(SUM)1": 76295.16000000002,
                "province1": "北方邦"
            },
            {
                "province0": "北桑坦德",
                "sales_amount(SUM)0": 5097.10232,
                "sales_amount(SUM)1": 5097.10232,
                "province1": "北桑坦德"
            },
            {
                "province0": "北棉兰老",
                "sales_amount(SUM)0": 2340.3495000000003,
                "sales_amount(SUM)1": 2340.3495000000003,
                "province1": "北棉兰老"
            },
            {
                "province0": "北海道",
                "sales_amount(SUM)0": 557.22,
                "sales_amount(SUM)1": 557.22,
                "province1": "北海道"
            },
            {
                "province0": "北苏拉威西",
                "sales_amount(SUM)0": 3668.6127000000006,
                "sales_amount(SUM)1": 3668.6127000000006,
                "province1": "北苏拉威西"
            },
            {
                "province0": "北苏门答腊省",
                "sales_amount(SUM)0": 39568.8039,
                "sales_amount(SUM)1": 39568.8039,
                "province1": "北苏门答腊省"
            },
            {
                "province0": "北荷兰",
                "sales_amount(SUM)0": 15219.425999999996,
                "sales_amount(SUM)1": 15219.425999999996,
                "province1": "北荷兰"
            },
            {
                "province0": "北莱茵-威斯特法伦州",
                "sales_amount(SUM)0": 216451.85100000014,
                "sales_amount(SUM)1": 216451.85100000014,
                "province1": "北莱茵-威斯特法伦州"
            },
            {
                "province0": "北达科他州",
                "sales_amount(SUM)0": 919.91,
                "sales_amount(SUM)1": 919.91,
                "province1": "北达科他州"
            },
            {
                "province0": "北部-加来海峡-庇卡底",
                "sales_amount(SUM)0": 65176.78499999999,
                "sales_amount(SUM)1": 65176.78499999999,
                "province1": "北部-加来海峡-庇卡底"
            },
            {
                "province0": "北里奥格兰德",
                "sales_amount(SUM)0": 6966.85872,
                "sales_amount(SUM)1": 6966.85872,
                "province1": "北里奥格兰德"
            },
            {
                "province0": "北阿坎德邦",
                "sales_amount(SUM)0": 7752.329999999999,
                "sales_amount(SUM)1": 7752.329999999999,
                "province1": "北阿坎德邦"
            },
            {
                "province0": "北领地",
                "sales_amount(SUM)0": 14463.480000000003,
                "sales_amount(SUM)1": 14463.480000000003,
                "province1": "北领地"
            },
            {
                "province0": "北马绍纳兰",
                "sales_amount(SUM)0": 3.465,
                "sales_amount(SUM)1": 3.465,
                "province1": "北马绍纳兰"
            },
            {
                "province0": "北黎巴嫩",
                "sales_amount(SUM)0": 1199.85,
                "sales_amount(SUM)1": 1199.85,
                "province1": "北黎巴嫩"
            },
            {
                "province0": "十八山",
                "sales_amount(SUM)0": 743.9399999999999,
                "sales_amount(SUM)1": 743.9399999999999,
                "province1": "十八山"
            },
            {
                "province0": "千叶县",
                "sales_amount(SUM)0": 5421.57,
                "sales_amount(SUM)1": 5421.57,
                "province1": "千叶县"
            },
            {
                "province0": "华盛顿州",
                "sales_amount(SUM)0": 138641.26999999993,
                "sales_amount(SUM)1": 138641.26999999993,
                "province1": "华盛顿州"
            },
            {
                "province0": "南下加利福尼亚",
                "sales_amount(SUM)0": 593.3599999999999,
                "sales_amount(SUM)1": 593.3599999999999,
                "province1": "南下加利福尼亚"
            },
            {
                "province0": "南丹麦",
                "sales_amount(SUM)0": 3140.091,
                "sales_amount(SUM)1": 3140.091,
                "province1": "南丹麦"
            },
            {
                "province0": "南加里曼丹",
                "sales_amount(SUM)0": 536.4834,
                "sales_amount(SUM)1": 536.4834,
                "province1": "南加里曼丹"
            },
            {
                "province0": "南卡罗来纳州",
                "sales_amount(SUM)0": 8481.71,
                "sales_amount(SUM)1": 8481.71,
                "province1": "南卡罗来纳州"
            },
            {
                "province0": "南呼罗珊",
                "sales_amount(SUM)0": 65.49000000000001,
                "sales_amount(SUM)1": 65.49000000000001,
                "province1": "南呼罗珊"
            },
            {
                "province0": "南地区",
                "sales_amount(SUM)0": 3009.0600000000004,
                "sales_amount(SUM)1": 3009.0600000000004,
                "province1": "南地区"
            },
            {
                "province0": "南基伍省",
                "sales_amount(SUM)0": 1585.59,
                "sales_amount(SUM)1": 1585.59,
                "province1": "南基伍省"
            },
            {
                "province0": "南方",
                "sales_amount(SUM)0": 513.12,
                "sales_amount(SUM)1": 513.12,
                "province1": "南方"
            },
            {
                "province0": "南曼兰",
                "sales_amount(SUM)0": 283.26,
                "sales_amount(SUM)1": 283.26,
                "province1": "南曼兰"
            },
            {
                "province0": "南澳大利亚州",
                "sales_amount(SUM)0": 75552.73200000002,
                "sales_amount(SUM)1": 75552.73200000002,
                "province1": "南澳大利亚州"
            },
            {
                "province0": "南苏门答腊省",
                "sales_amount(SUM)0": 11982.6723,
                "sales_amount(SUM)1": 11982.6723,
                "province1": "南苏门答腊省"
            },
            {
                "province0": "南荷兰省",
                "sales_amount(SUM)0": 14181.329999999996,
                "sales_amount(SUM)1": 14181.329999999996,
                "province1": "南荷兰省"
            },
            {
                "province0": "南达科他州",
                "sales_amount(SUM)0": 1315.5600000000002,
                "sales_amount(SUM)1": 1315.5600000000002,
                "province1": "南达科他州"
            },
            {
                "province0": "南部",
                "sales_amount(SUM)0": 7496.849999999999,
                "sales_amount(SUM)1": 7496.849999999999,
                "province1": "南部"
            },
            {
                "province0": "南都柏林",
                "sales_amount(SUM)0": 334.26,
                "sales_amount(SUM)1": 334.26,
                "province1": "南都柏林"
            },
            {
                "province0": "南里奥格兰德",
                "sales_amount(SUM)0": 20848.0538,
                "sales_amount(SUM)1": 20848.0538,
                "province1": "南里奥格兰德"
            },
            {
                "province0": "南马托格罗索",
                "sales_amount(SUM)0": 3616.6401600000004,
                "sales_amount(SUM)1": 3616.6401600000004,
                "province1": "南马托格罗索"
            },
            {
                "province0": "博亚卡",
                "sales_amount(SUM)0": 1350.6260000000002,
                "sales_amount(SUM)1": 1350.6260000000002,
                "province1": "博亚卡"
            },
            {
                "province0": "博卢",
                "sales_amount(SUM)0": 491.244,
                "sales_amount(SUM)1": 491.244,
                "province1": "博卢"
            },
            {
                "province0": "博尔古",
                "sales_amount(SUM)0": 363.71999999999997,
                "sales_amount(SUM)1": 363.71999999999997,
                "province1": "博尔古"
            },
            {
                "province0": "博尔诺",
                "sales_amount(SUM)0": 777.4110000000001,
                "sales_amount(SUM)1": 777.4110000000001,
                "province1": "博尔诺"
            },
            {
                "province0": "博托沙尼",
                "sales_amount(SUM)0": 2259.12,
                "sales_amount(SUM)1": 2259.12,
                "province1": "博托沙尼"
            },
            {
                "province0": "占碑",
                "sales_amount(SUM)0": 3500.6439,
                "sales_amount(SUM)1": 3500.6439,
                "province1": "占碑"
            },
            {
                "province0": "卡亚俄",
                "sales_amount(SUM)0": 162.58800000000002,
                "sales_amount(SUM)1": 162.58800000000002,
                "province1": "卡亚俄"
            },
            {
                "province0": "卡什卡达里亚",
                "sales_amount(SUM)0": 874.29,
                "sales_amount(SUM)1": 874.29,
                "province1": "卡什卡达里亚"
            },
            {
                "province0": "卡克塔",
                "sales_amount(SUM)0": 640.46268,
                "sales_amount(SUM)1": 640.46268,
                "province1": "卡克塔"
            },
            {
                "province0": "卡内洛内斯",
                "sales_amount(SUM)0": 574.56,
                "sales_amount(SUM)1": 574.56,
                "province1": "卡内洛内斯"
            },
            {
                "province0": "卡卢加",
                "sales_amount(SUM)0": 2632.4700000000003,
                "sales_amount(SUM)1": 2632.4700000000003,
                "province1": "卡卢加"
            },
            {
                "province0": "卡哈马卡",
                "sales_amount(SUM)0": 174.708,
                "sales_amount(SUM)1": 174.708,
                "province1": "卡哈马卡"
            },
            {
                "province0": "卡塔马卡",
                "sales_amount(SUM)0": 46.800000000000004,
                "sales_amount(SUM)1": 46.800000000000004,
                "province1": "卡塔马卡"
            },
            {
                "province0": "卡尔巴拉",
                "sales_amount(SUM)0": 3323.55,
                "sales_amount(SUM)1": 3323.55,
                "province1": "卡尔巴拉"
            },
            {
                "province0": "卡尔斯省",
                "sales_amount(SUM)0": 331.56,
                "sales_amount(SUM)1": 331.56,
                "province1": "卡尔斯省"
            },
            {
                "province0": "卡尔达斯",
                "sales_amount(SUM)0": 2243.7351599999997,
                "sales_amount(SUM)1": 2243.7351599999997,
                "province1": "卡尔达斯"
            },
            {
                "province0": "卡巴尔达-巴尔卡里亚",
                "sales_amount(SUM)0": 74.22,
                "sales_amount(SUM)1": 74.22,
                "province1": "卡巴尔达-巴尔卡里亚"
            },
            {
                "province0": "卡巴罗莱",
                "sales_amount(SUM)0": 3.573,
                "sales_amount(SUM)1": 3.573,
                "province1": "卡巴罗莱"
            },
            {
                "province0": "卡拉什-塞维林",
                "sales_amount(SUM)0": 29.04,
                "sales_amount(SUM)1": 29.04,
                "province1": "卡拉什-塞维林"
            },
            {
                "province0": "卡拉布里亚",
                "sales_amount(SUM)0": 1092.72,
                "sales_amount(SUM)1": 1092.72,
                "province1": "卡拉布里亚"
            },
            {
                "province0": "卡拉干达",
                "sales_amount(SUM)0": 938.871,
                "sales_amount(SUM)1": 938.871,
                "province1": "卡拉干达"
            },
            {
                "province0": "卡拉曼省",
                "sales_amount(SUM)0": 51.120000000000005,
                "sales_amount(SUM)1": 51.120000000000005,
                "province1": "卡拉曼省"
            },
            {
                "province0": "卡拉沃沃",
                "sales_amount(SUM)0": 3750.33612,
                "sales_amount(SUM)1": 3750.33612,
                "province1": "卡拉沃沃"
            },
            {
                "province0": "卡拉河",
                "sales_amount(SUM)0": 33.96,
                "sales_amount(SUM)1": 33.96,
                "province1": "卡拉河"
            },
            {
                "province0": "卡斯塔莫努",
                "sales_amount(SUM)0": 25.776,
                "sales_amount(SUM)1": 25.776,
                "province1": "卡斯塔莫努"
            },
            {
                "province0": "卡斯蒂利亚-拉曼查",
                "sales_amount(SUM)0": 8768.609999999999,
                "sales_amount(SUM)1": 8768.609999999999,
                "province1": "卡斯蒂利亚-拉曼查"
            },
            {
                "province0": "卡斯蒂利亚和莱昂",
                "sales_amount(SUM)0": 25884.22499999999,
                "sales_amount(SUM)1": 25884.22499999999,
                "province1": "卡斯蒂利亚和莱昂"
            },
            {
                "province0": "卡杜纳",
                "sales_amount(SUM)0": 5810.562,
                "sales_amount(SUM)1": 5810.562,
                "province1": "卡杜纳"
            },
            {
                "province0": "卡约",
                "sales_amount(SUM)0": 75.12,
                "sales_amount(SUM)1": 75.12,
                "province1": "卡约"
            },
            {
                "province0": "卡纳塔克邦",
                "sales_amount(SUM)0": 31802.39999999999,
                "sales_amount(SUM)1": 31802.39999999999,
                "province1": "卡纳塔克邦"
            },
            {
                "province0": "卡耶斯",
                "sales_amount(SUM)0": 791.0999999999999,
                "sales_amount(SUM)1": 791.0999999999999,
                "province1": "卡耶斯"
            },
            {
                "province0": "卡萨拉省",
                "sales_amount(SUM)0": 656.13,
                "sales_amount(SUM)1": 656.13,
                "province1": "卡萨拉省"
            },
            {
                "province0": "卡萨纳雷",
                "sales_amount(SUM)0": 23.28,
                "sales_amount(SUM)1": 23.28,
                "province1": "卡萨纳雷"
            },
            {
                "province0": "卡诺",
                "sales_amount(SUM)0": 7951.869000000002,
                "sales_amount(SUM)1": 7951.869000000002,
                "province1": "卡诺"
            },
            {
                "province0": "卡赫拉曼马拉什",
                "sales_amount(SUM)0": 832.1880000000001,
                "sales_amount(SUM)1": 832.1880000000001,
                "province1": "卡赫拉曼马拉什"
            },
            {
                "province0": "卡迪西亚",
                "sales_amount(SUM)0": 4182.66,
                "sales_amount(SUM)1": 4182.66,
                "province1": "卡迪西亚"
            },
            {
                "province0": "卡马圭",
                "sales_amount(SUM)0": 16106.302679999997,
                "sales_amount(SUM)1": 16106.302679999997,
                "province1": "卡马圭"
            },
            {
                "province0": "卡齐纳",
                "sales_amount(SUM)0": 232.21800000000002,
                "sales_amount(SUM)1": 232.21800000000002,
                "province1": "卡齐纳"
            },
            {
                "province0": "卢塞恩",
                "sales_amount(SUM)0": 4538.43,
                "sales_amount(SUM)1": 4538.43,
                "province1": "卢塞恩"
            },
            {
                "province0": "卢布尔雅那市",
                "sales_amount(SUM)0": 1469.94,
                "sales_amount(SUM)1": 1469.94,
                "province1": "卢布尔雅那市"
            },
            {
                "province0": "卢布斯卡",
                "sales_amount(SUM)0": 554.64,
                "sales_amount(SUM)1": 554.64,
                "province1": "卢布斯卡"
            },
            {
                "province0": "卢布林省",
                "sales_amount(SUM)0": 5935.529999999999,
                "sales_amount(SUM)1": 5935.529999999999,
                "province1": "卢布林省"
            },
            {
                "province0": "卢森堡",
                "sales_amount(SUM)0": 703.845,
                "sales_amount(SUM)1": 703.845,
                "province1": "卢森堡"
            },
            {
                "province0": "卢汉斯克",
                "sales_amount(SUM)0": 3039.6,
                "sales_amount(SUM)1": 3039.6,
                "province1": "卢汉斯克"
            },
            {
                "province0": "卢瓦尔河地区",
                "sales_amount(SUM)0": 34357.25400000001,
                "sales_amount(SUM)1": 34357.25400000001,
                "province1": "卢瓦尔河地区"
            },
            {
                "province0": "卢萨卡",
                "sales_amount(SUM)0": 12767.220000000001,
                "sales_amount(SUM)1": 12767.220000000001,
                "province1": "卢萨卡"
            },
            {
                "province0": "印第安纳州",
                "sales_amount(SUM)0": 53555.36,
                "sales_amount(SUM)1": 53555.36,
                "province1": "印第安纳州"
            },
            {
                "province0": "危地马拉",
                "sales_amount(SUM)0": 103647.3386799999,
                "sales_amount(SUM)1": 103647.3386799999,
                "province1": "危地马拉"
            },
            {
                "province0": "厄德尔",
                "sales_amount(SUM)0": 974.388,
                "sales_amount(SUM)1": 974.388,
                "province1": "厄德尔"
            },
            {
                "province0": "厄斯帕尔塔",
                "sales_amount(SUM)0": 103.896,
                "sales_amount(SUM)1": 103.896,
                "province1": "厄斯帕尔塔"
            },
            {
                "province0": "发罗拉",
                "sales_amount(SUM)0": 986.49,
                "sales_amount(SUM)1": 986.49,
                "province1": "发罗拉"
            },
            {
                "province0": "古卢区",
                "sales_amount(SUM)0": 364.80600000000004,
                "sales_amount(SUM)1": 364.80600000000004,
                "province1": "古卢区"
            },
            {
                "province0": "古吉拉特邦",
                "sales_amount(SUM)0": 29290.35,
                "sales_amount(SUM)1": 29290.35,
                "province1": "古吉拉特邦"
            },
            {
                "province0": "古巴圣地亚哥省",
                "sales_amount(SUM)0": 32452.54775999999,
                "sales_amount(SUM)1": 32452.54775999999,
                "province1": "古巴圣地亚哥省"
            },
            {
                "province0": "台北市",
                "sales_amount(SUM)0": 7647.629999999999,
                "sales_amount(SUM)1": 7647.629999999999,
                "province1": "台北市"
            },
            {
                "province0": "吉兰",
                "sales_amount(SUM)0": 5794.349999999999,
                "sales_amount(SUM)1": 5794.349999999999,
                "province1": "吉兰"
            },
            {
                "province0": "吉大港",
                "sales_amount(SUM)0": 12144.09,
                "sales_amount(SUM)1": 12144.09,
                "province1": "吉大港"
            },
            {
                "province0": "吉布提",
                "sales_amount(SUM)0": 2392.95,
                "sales_amount(SUM)1": 2392.95,
                "province1": "吉布提"
            },
            {
                "province0": "吉扎克",
                "sales_amount(SUM)0": 502.61999999999995,
                "sales_amount(SUM)1": 502.61999999999995,
                "province1": "吉扎克"
            },
            {
                "province0": "吉斯伯恩",
                "sales_amount(SUM)0": 1433.7600000000002,
                "sales_amount(SUM)1": 1433.7600000000002,
                "province1": "吉斯伯恩"
            },
            {
                "province0": "吉林省",
                "sales_amount(SUM)0": 19035.93,
                "sales_amount(SUM)1": 19035.93,
                "province1": "吉林省"
            },
            {
                "province0": "吉赞",
                "sales_amount(SUM)0": 5385.509999999999,
                "sales_amount(SUM)1": 5385.509999999999,
                "province1": "吉赞"
            },
            {
                "province0": "吉隆坡",
                "sales_amount(SUM)0": 17176.230000000003,
                "sales_amount(SUM)1": 17176.230000000003,
                "province1": "吉隆坡"
            },
            {
                "province0": "君士坦丁",
                "sales_amount(SUM)0": 1573.65,
                "sales_amount(SUM)1": 1573.65,
                "province1": "君士坦丁"
            },
            {
                "province0": "呵叻府（那空叻差是玛）",
                "sales_amount(SUM)0": 1002.1527,
                "sales_amount(SUM)1": 1002.1527,
                "province1": "呵叻府（那空叻差是玛）"
            },
            {
                "province0": "呼罗珊",
                "sales_amount(SUM)0": 16469.339999999993,
                "sales_amount(SUM)1": 16469.339999999993,
                "province1": "呼罗珊"
            },
            {
                "province0": "哈兰",
                "sales_amount(SUM)0": 835.5,
                "sales_amount(SUM)1": 835.5,
                "province1": "哈兰"
            },
            {
                "province0": "哈利斯科",
                "sales_amount(SUM)0": 43216.325560000034,
                "sales_amount(SUM)1": 43216.325560000034,
                "province1": "哈利斯科"
            },
            {
                "province0": "哈塔伊",
                "sales_amount(SUM)0": 1025.868,
                "sales_amount(SUM)1": 1025.868,
                "province1": "哈塔伊"
            },
            {
                "province0": "哈尔尤",
                "sales_amount(SUM)0": 4095.3900000000003,
                "sales_amount(SUM)1": 4095.3900000000003,
                "province1": "哈尔尤"
            },
            {
                "province0": "哈尔科夫",
                "sales_amount(SUM)0": 11568.599999999997,
                "sales_amount(SUM)1": 11568.599999999997,
                "province1": "哈尔科夫"
            },
            {
                "province0": "哈拉雷",
                "sales_amount(SUM)0": 1565.1899999999996,
                "sales_amount(SUM)1": 1565.1899999999996,
                "province1": "哈拉雷"
            },
            {
                "province0": "哈特隆",
                "sales_amount(SUM)0": 242.784,
                "sales_amount(SUM)1": 242.784,
                "province1": "哈特隆"
            },
            {
                "province0": "哈里亚纳邦",
                "sales_amount(SUM)0": 24657.41999999999,
                "sales_amount(SUM)1": 24657.41999999999,
                "province1": "哈里亚纳邦"
            },
            {
                "province0": "哈马丹",
                "sales_amount(SUM)0": 7181.7,
                "sales_amount(SUM)1": 7181.7,
                "province1": "哈马丹"
            },
            {
                "province0": "哥伦比亚特区",
                "sales_amount(SUM)0": 2865.0199999999995,
                "sales_amount(SUM)1": 2865.0199999999995,
                "province1": "哥伦比亚特区"
            },
            {
                "province0": "哥罗德诺",
                "sales_amount(SUM)0": 5790.3,
                "sales_amount(SUM)1": 5790.3,
                "province1": "哥罗德诺"
            },
            {
                "province0": "啥格勒布",
                "sales_amount(SUM)0": 825.36,
                "sales_amount(SUM)1": 825.36,
                "province1": "啥格勒布"
            },
            {
                "province0": "喀土穆",
                "sales_amount(SUM)0": 9205.14,
                "sales_amount(SUM)1": 9205.14,
                "province1": "喀土穆"
            },
            {
                "province0": "喀布尔省",
                "sales_amount(SUM)0": 16951.11,
                "sales_amount(SUM)1": 16951.11,
                "province1": "喀布尔省"
            },
            {
                "province0": "喀拉拉邦",
                "sales_amount(SUM)0": 20696.97,
                "sales_amount(SUM)1": 20696.97,
                "province1": "喀拉拉邦"
            },
            {
                "province0": "四川省",
                "sales_amount(SUM)0": 36531.81,
                "sales_amount(SUM)1": 36531.81,
                "province1": "四川省"
            },
            {
                "province0": "国家首都区",
                "sales_amount(SUM)0": 152175.35550000006,
                "sales_amount(SUM)1": 152175.35550000006,
                "province1": "国家首都区"
            },
            {
                "province0": "图林根州",
                "sales_amount(SUM)0": 11922.54,
                "sales_amount(SUM)1": 11922.54,
                "province1": "图林根州"
            },
            {
                "province0": "圣佩得罗-德马科里斯",
                "sales_amount(SUM)0": 8015.449359999998,
                "sales_amount(SUM)1": 8015.449359999998,
                "province1": "圣佩得罗-德马科里斯"
            },
            {
                "province0": "圣保罗州",
                "sales_amount(SUM)0": 98393.32387999998,
                "sales_amount(SUM)1": 98393.32387999998,
                "province1": "圣保罗州"
            },
            {
                "province0": "圣克里斯托瓦尔",
                "sales_amount(SUM)0": 543.3411199999999,
                "sales_amount(SUM)1": 543.3411199999999,
                "province1": "圣克里斯托瓦尔"
            },
            {
                "province0": "圣克鲁斯",
                "sales_amount(SUM)0": 2240.9999999999995,
                "sales_amount(SUM)1": 2240.9999999999995,
                "province1": "圣克鲁斯"
            },
            {
                "province0": "圣凯瑟琳",
                "sales_amount(SUM)0": 6761.78584,
                "sales_amount(SUM)1": 6761.78584,
                "province1": "圣凯瑟琳"
            },
            {
                "province0": "圣加仑",
                "sales_amount(SUM)0": 62.64,
                "sales_amount(SUM)1": 62.64,
                "province1": "圣加仑"
            },
            {
                "province0": "圣卡塔琳娜",
                "sales_amount(SUM)0": 20523.6514,
                "sales_amount(SUM)1": 20523.6514,
                "province1": "圣卡塔琳娜"
            },
            {
                "province0": "圣地亚哥",
                "sales_amount(SUM)0": 32224.080079999985,
                "sales_amount(SUM)1": 32224.080079999985,
                "province1": "圣地亚哥"
            },
            {
                "province0": "圣地亚哥-德尔埃斯特罗",
                "sales_amount(SUM)0": 483.462,
                "sales_amount(SUM)1": 483.462,
                "province1": "圣地亚哥-德尔埃斯特罗"
            },
            {
                "province0": "圣埃斯皮里图州",
                "sales_amount(SUM)0": 4249.780000000001,
                "sales_amount(SUM)1": 4249.780000000001,
                "province1": "圣埃斯皮里图州"
            },
            {
                "province0": "圣多明各",
                "sales_amount(SUM)0": 78713.66343999999,
                "sales_amount(SUM)1": 78713.66343999999,
                "province1": "圣多明各"
            },
            {
                "province0": "圣安娜",
                "sales_amount(SUM)0": 10086.53564,
                "sales_amount(SUM)1": 10086.53564,
                "province1": "圣安娜"
            },
            {
                "province0": "圣斯皮里图斯",
                "sales_amount(SUM)0": 3436.0338,
                "sales_amount(SUM)1": 3436.0338,
                "province1": "圣斯皮里图斯"
            },
            {
                "province0": "圣胡安",
                "sales_amount(SUM)0": 6175.218040000001,
                "sales_amount(SUM)1": 6175.218040000001,
                "province1": "圣胡安"
            },
            {
                "province0": "圣菲",
                "sales_amount(SUM)0": 5696.979999999999,
                "sales_amount(SUM)1": 5696.979999999999,
                "province1": "圣菲"
            },
            {
                "province0": "圣萨尔瓦多",
                "sales_amount(SUM)0": 153639.39700000006,
                "sales_amount(SUM)1": 153639.39700000006,
                "province1": "圣萨尔瓦多"
            },
            {
                "province0": "圣费尔南多",
                "sales_amount(SUM)0": 4915.55544,
                "sales_amount(SUM)1": 4915.55544,
                "province1": "圣费尔南多"
            },
            {
                "province0": "圣路易斯",
                "sales_amount(SUM)0": 298.98,
                "sales_amount(SUM)1": 298.98,
                "province1": "圣路易斯"
            },
            {
                "province0": "圣路易斯波托西州",
                "sales_amount(SUM)0": 11968.160840000002,
                "sales_amount(SUM)1": 11968.160840000002,
                "province1": "圣路易斯波托西州"
            },
            {
                "province0": "圣路易省",
                "sales_amount(SUM)0": 2797.464,
                "sales_amount(SUM)1": 2797.464,
                "province1": "圣路易省"
            },
            {
                "province0": "圣迈克尔",
                "sales_amount(SUM)0": 7174.273920000002,
                "sales_amount(SUM)1": 7174.273920000002,
                "province1": "圣迈克尔"
            },
            {
                "province0": "坎佩切",
                "sales_amount(SUM)0": 3959.2984000000006,
                "sales_amount(SUM)1": 3959.2984000000006,
                "province1": "坎佩切"
            },
            {
                "province0": "坎塔布里亚自治区",
                "sales_amount(SUM)0": 3372.741,
                "sales_amount(SUM)1": 3372.741,
                "province1": "坎塔布里亚自治区"
            },
            {
                "province0": "坎大哈省",
                "sales_amount(SUM)0": 1867.02,
                "sales_amount(SUM)1": 1867.02,
                "province1": "坎大哈省"
            },
            {
                "province0": "坎帕尼亚",
                "sales_amount(SUM)0": 25532.871000000003,
                "sales_amount(SUM)1": 25532.871000000003,
                "province1": "坎帕尼亚"
            },
            {
                "province0": "坎帕拉",
                "sales_amount(SUM)0": 1151.973,
                "sales_amount(SUM)1": 1151.973,
                "province1": "坎帕拉"
            },
            {
                "province0": "坎特伯雷",
                "sales_amount(SUM)0": 17807.010000000002,
                "sales_amount(SUM)1": 17807.010000000002,
                "province1": "坎特伯雷"
            },
            {
                "province0": "坦波夫",
                "sales_amount(SUM)0": 549.48,
                "sales_amount(SUM)1": 549.48,
                "province1": "坦波夫"
            },
            {
                "province0": "埃努古",
                "sales_amount(SUM)0": 1907.343,
                "sales_amount(SUM)1": 1907.343,
                "province1": "埃努古"
            },
            {
                "province0": "埃多",
                "sales_amount(SUM)0": 2019.114,
                "sales_amount(SUM)1": 2019.114,
                "province1": "埃多"
            },
            {
                "province0": "埃尔比勒",
                "sales_amount(SUM)0": 9226.950000000003,
                "sales_amount(SUM)1": 9226.950000000003,
                "province1": "埃尔比勒"
            },
            {
                "province0": "埃尔祖鲁姆",
                "sales_amount(SUM)0": 342.57599999999996,
                "sales_amount(SUM)1": 342.57599999999996,
                "province1": "埃尔祖鲁姆"
            },
            {
                "province0": "埃斯基谢希尔",
                "sales_amount(SUM)0": 934.7159999999999,
                "sales_amount(SUM)1": 934.7159999999999,
                "province1": "埃斯基谢希尔"
            },
            {
                "province0": "埃斯昆特拉省",
                "sales_amount(SUM)0": 8177.5711200000005,
                "sales_amount(SUM)1": 8177.5711200000005,
                "province1": "埃斯昆特拉省"
            },
            {
                "province0": "埃斯派亚",
                "sales_amount(SUM)0": 1039.1230799999998,
                "sales_amount(SUM)1": 1039.1230799999998,
                "province1": "埃斯派亚"
            },
            {
                "province0": "埃斯特利",
                "sales_amount(SUM)0": 8455.075320000002,
                "sales_amount(SUM)1": 8455.075320000002,
                "province1": "埃斯特利"
            },
            {
                "province0": "埃斯特雷马杜拉",
                "sales_amount(SUM)0": 228.528,
                "sales_amount(SUM)1": 228.528,
                "province1": "埃斯特雷马杜拉"
            },
            {
                "province0": "埃诺",
                "sales_amount(SUM)0": 3662.73,
                "sales_amount(SUM)1": 3662.73,
                "province1": "埃诺"
            },
            {
                "province0": "埃迪尔内省",
                "sales_amount(SUM)0": 18.528,
                "sales_amount(SUM)1": 18.528,
                "province1": "埃迪尔内省"
            },
            {
                "province0": "埃邦伊",
                "sales_amount(SUM)0": 34.326,
                "sales_amount(SUM)1": 34.326,
                "province1": "埃邦伊"
            },
            {
                "province0": "基利斯",
                "sales_amount(SUM)0": 118.76399999999998,
                "sales_amount(SUM)1": 118.76399999999998,
                "province1": "基利斯"
            },
            {
                "province0": "基加利",
                "sales_amount(SUM)0": 4752.540000000001,
                "sales_amount(SUM)1": 4752.540000000001,
                "province1": "基加利"
            },
            {
                "province0": "基希讷乌",
                "sales_amount(SUM)0": 4512.33,
                "sales_amount(SUM)1": 4512.33,
                "province1": "基希讷乌"
            },
            {
                "province0": "基戈马",
                "sales_amount(SUM)0": 4826.73,
                "sales_amount(SUM)1": 4826.73,
                "province1": "基戈马"
            },
            {
                "province0": "基洛沃赫拉德",
                "sales_amount(SUM)0": 3070.56,
                "sales_amount(SUM)1": 3070.56,
                "province1": "基洛沃赫拉德"
            },
            {
                "province0": "基纳",
                "sales_amount(SUM)0": 466.53,
                "sales_amount(SUM)1": 466.53,
                "province1": "基纳"
            },
            {
                "province0": "埼玉县",
                "sales_amount(SUM)0": 5209.08,
                "sales_amount(SUM)1": 5209.08,
                "province1": "埼玉县"
            },
            {
                "province0": "堪萨斯州",
                "sales_amount(SUM)0": 2914.31,
                "sales_amount(SUM)1": 2914.31,
                "province1": "堪萨斯州"
            },
            {
                "province0": "塔伊兹",
                "sales_amount(SUM)0": 2032.173,
                "sales_amount(SUM)1": 2032.173,
                "province1": "塔伊兹"
            },
            {
                "province0": "塔噶",
                "sales_amount(SUM)0": 517.92,
                "sales_amount(SUM)1": 517.92,
                "province1": "塔噶"
            },
            {
                "province0": "塔奇拉",
                "sales_amount(SUM)0": 32.7,
                "sales_amount(SUM)1": 32.7,
                "province1": "塔奇拉"
            },
            {
                "province0": "塔尔图省",
                "sales_amount(SUM)0": 384.45,
                "sales_amount(SUM)1": 384.45,
                "province1": "塔尔图省"
            },
            {
                "province0": "塔尔诺皮尔",
                "sales_amount(SUM)0": 515.1600000000001,
                "sales_amount(SUM)1": 515.1600000000001,
                "province1": "塔尔诺皮尔"
            },
            {
                "province0": "塔巴斯科",
                "sales_amount(SUM)0": 7897.824,
                "sales_amount(SUM)1": 7897.824,
                "province1": "塔巴斯科"
            },
            {
                "province0": "塔德莱-艾济拉勒",
                "sales_amount(SUM)0": 2526.2699999999995,
                "sales_amount(SUM)1": 2526.2699999999995,
                "province1": "塔德莱-艾济拉勒"
            },
            {
                "province0": "塔扎-胡塞马-陶纳特",
                "sales_amount(SUM)0": 413.03999999999996,
                "sales_amount(SUM)1": 413.03999999999996,
                "province1": "塔扎-胡塞马-陶纳特"
            },
            {
                "province0": "塔拉帕卡",
                "sales_amount(SUM)0": 189.14,
                "sales_amount(SUM)1": 189.14,
                "province1": "塔拉帕卡"
            },
            {
                "province0": "塔拉纳基",
                "sales_amount(SUM)0": 5145.809999999999,
                "sales_amount(SUM)1": 5145.809999999999,
                "province1": "塔拉纳基"
            },
            {
                "province0": "塔斯马尼亚州",
                "sales_amount(SUM)0": 30381.735000000004,
                "sales_amount(SUM)1": 30381.735000000004,
                "province1": "塔斯马尼亚州"
            },
            {
                "province0": "塔毛利帕斯州",
                "sales_amount(SUM)0": 23058.01788,
                "sales_amount(SUM)1": 23058.01788,
                "province1": "塔毛利帕斯州"
            },
            {
                "province0": "塔波拉",
                "sales_amount(SUM)0": 80.1,
                "sales_amount(SUM)1": 80.1,
                "province1": "塔波拉"
            },
            {
                "province0": "塔里哈",
                "sales_amount(SUM)0": 1858.1640000000002,
                "sales_amount(SUM)1": 1858.1640000000002,
                "province1": "塔里哈"
            },
            {
                "province0": "塞图巴尔",
                "sales_amount(SUM)0": 182.295,
                "sales_amount(SUM)1": 182.295,
                "province1": "塞图巴尔"
            },
            {
                "province0": "塞姆南",
                "sales_amount(SUM)0": 48.93,
                "sales_amount(SUM)1": 48.93,
                "province1": "塞姆南"
            },
            {
                "province0": "塞尔希培",
                "sales_amount(SUM)0": 1576.58,
                "sales_amount(SUM)1": 1576.58,
                "province1": "塞尔希培"
            },
            {
                "province0": "塞得港",
                "sales_amount(SUM)0": 512.73,
                "sales_amount(SUM)1": 512.73,
                "province1": "塞得港"
            },
            {
                "province0": "塞瓦斯托波尔",
                "sales_amount(SUM)0": 1568.6399999999999,
                "sales_amount(SUM)1": 1568.6399999999999,
                "province1": "塞瓦斯托波尔"
            },
            {
                "province0": "塞萨尔",
                "sales_amount(SUM)0": 679.7746400000001,
                "sales_amount(SUM)1": 679.7746400000001,
                "province1": "塞萨尔"
            },
            {
                "province0": "塞阿拉",
                "sales_amount(SUM)0": 10106.846839999998,
                "sales_amount(SUM)1": 10106.846839999998,
                "province1": "塞阿拉"
            },
            {
                "province0": "墨西哥",
                "sales_amount(SUM)0": 34588.40236,
                "sales_amount(SUM)1": 34588.40236,
                "province1": "墨西哥"
            },
            {
                "province0": "多哈",
                "sales_amount(SUM)0": 6049.8,
                "sales_amount(SUM)1": 6049.8,
                "province1": "多哈"
            },
            {
                "province0": "多尔日",
                "sales_amount(SUM)0": 190.41,
                "sales_amount(SUM)1": 190.41,
                "province1": "多尔日"
            },
            {
                "province0": "大分县",
                "sales_amount(SUM)0": 7526.640000000001,
                "sales_amount(SUM)1": 7526.640000000001,
                "province1": "大分县"
            },
            {
                "province0": "大卡萨布兰卡",
                "sales_amount(SUM)0": 30697.97999999999,
                "sales_amount(SUM)1": 30697.97999999999,
                "province1": "大卡萨布兰卡"
            },
            {
                "province0": "大吉德州",
                "sales_amount(SUM)0": 49.41,
                "sales_amount(SUM)1": 49.41,
                "province1": "大吉德州"
            },
            {
                "province0": "大波兰",
                "sales_amount(SUM)0": 4222.83,
                "sales_amount(SUM)1": 4222.83,
                "province1": "大波兰"
            },
            {
                "province0": "大田广域市",
                "sales_amount(SUM)0": 3257.9399999999996,
                "sales_amount(SUM)1": 3257.9399999999996,
                "province1": "大田广域市"
            },
            {
                "province0": "大西洋",
                "sales_amount(SUM)0": 7650.774960000001,
                "sales_amount(SUM)1": 7650.774960000001,
                "province1": "大西洋"
            },
            {
                "province0": "大邱广域市",
                "sales_amount(SUM)0": 1772.754,
                "sales_amount(SUM)1": 1772.754,
                "province1": "大邱广域市"
            },
            {
                "province0": "大阪府",
                "sales_amount(SUM)0": 7578.585000000001,
                "sales_amount(SUM)1": 7578.585000000001,
                "province1": "大阪府"
            },
            {
                "province0": "大阿克拉",
                "sales_amount(SUM)0": 15556.650000000003,
                "sales_amount(SUM)1": 15556.650000000003,
                "province1": "大阿克拉"
            },
            {
                "province0": "天津",
                "sales_amount(SUM)0": 18700.27499999999,
                "sales_amount(SUM)1": 18700.27499999999,
                "province1": "天津"
            },
            {
                "province0": "太特",
                "sales_amount(SUM)0": 72.6,
                "sales_amount(SUM)1": 72.6,
                "province1": "太特"
            },
            {
                "province0": "夸拉",
                "sales_amount(SUM)0": 1239.327,
                "sales_amount(SUM)1": 1239.327,
                "province1": "夸拉"
            },
            {
                "province0": "夸祖鲁-纳塔尔省",
                "sales_amount(SUM)0": 5270.64,
                "sales_amount(SUM)1": 5270.64,
                "province1": "夸祖鲁-纳塔尔省"
            },
            {
                "province0": "奇南德加",
                "sales_amount(SUM)0": 11880.5744,
                "sales_amount(SUM)1": 11880.5744,
                "province1": "奇南德加"
            },
            {
                "province0": "奇瓦瓦州",
                "sales_amount(SUM)0": 33287.52783999997,
                "sales_amount(SUM)1": 33287.52783999997,
                "province1": "奇瓦瓦州"
            },
            {
                "province0": "奇里基",
                "sales_amount(SUM)0": 7074.958880000003,
                "sales_amount(SUM)1": 7074.958880000003,
                "province1": "奇里基"
            },
            {
                "province0": "奇马尔特南戈",
                "sales_amount(SUM)0": 5323.8881999999985,
                "sales_amount(SUM)1": 5323.8881999999985,
                "province1": "奇马尔特南戈"
            },
            {
                "province0": "奥什",
                "sales_amount(SUM)0": 917.1,
                "sales_amount(SUM)1": 917.1,
                "province1": "奥什"
            },
            {
                "province0": "奥伊金斯",
                "sales_amount(SUM)0": 4002.859999999999,
                "sales_amount(SUM)1": 4002.859999999999,
                "province1": "奥伊金斯"
            },
            {
                "province0": "奥克兰",
                "sales_amount(SUM)0": 43721.56799999997,
                "sales_amount(SUM)1": 43721.56799999997,
                "province1": "奥克兰"
            },
            {
                "province0": "奥兰",
                "sales_amount(SUM)0": 7337.460000000001,
                "sales_amount(SUM)1": 7337.460000000001,
                "province1": "奥兰"
            },
            {
                "province0": "奥塔戈",
                "sales_amount(SUM)0": 2678.886,
                "sales_amount(SUM)1": 2678.886,
                "province1": "奥塔戈"
            },
            {
                "province0": "奥孙",
                "sales_amount(SUM)0": 247.221,
                "sales_amount(SUM)1": 247.221,
                "province1": "奥孙"
            },
            {
                "province0": "奥尔杜",
                "sales_amount(SUM)0": 125.292,
                "sales_amount(SUM)1": 125.292,
                "province1": "奥尔杜"
            },
            {
                "province0": "奥尔金",
                "sales_amount(SUM)0": 13223.386760000001,
                "sales_amount(SUM)1": 13223.386760000001,
                "province1": "奥尔金"
            },
            {
                "province0": "奥弗涅",
                "sales_amount(SUM)0": 7405.582499999999,
                "sales_amount(SUM)1": 7405.582499999999,
                "province1": "奥弗涅"
            },
            {
                "province0": "奥弗涅-罗讷-阿尔卑斯",
                "sales_amount(SUM)0": 76546.01399999998,
                "sales_amount(SUM)1": 76546.01399999998,
                "province1": "奥弗涅-罗讷-阿尔卑斯"
            },
            {
                "province0": "奥斯曼尼耶",
                "sales_amount(SUM)0": 486.15599999999995,
                "sales_amount(SUM)1": 486.15599999999995,
                "province1": "奥斯曼尼耶"
            },
            {
                "province0": "奥斯陆",
                "sales_amount(SUM)0": 7801.86,
                "sales_amount(SUM)1": 7801.86,
                "province1": "奥斯陆"
            },
            {
                "province0": "奥波莱",
                "sales_amount(SUM)0": 1670.4299999999998,
                "sales_amount(SUM)1": 1670.4299999999998,
                "province1": "奥波莱"
            },
            {
                "province0": "奥洛莫乌茨",
                "sales_amount(SUM)0": 229.56,
                "sales_amount(SUM)1": 229.56,
                "province1": "奥洛莫乌茨"
            },
            {
                "province0": "奥约",
                "sales_amount(SUM)0": 2847.312,
                "sales_amount(SUM)1": 2847.312,
                "province1": "奥约"
            },
            {
                "province0": "奥西耶克-巴拉尼亚",
                "sales_amount(SUM)0": 25.29,
                "sales_amount(SUM)1": 25.29,
                "province1": "奥西耶克-巴拉尼亚"
            },
            {
                "province0": "奥贡",
                "sales_amount(SUM)0": 373.40100000000007,
                "sales_amount(SUM)1": 373.40100000000007,
                "province1": "奥贡"
            },
            {
                "province0": "奥里萨邦",
                "sales_amount(SUM)0": 5280.360000000001,
                "sales_amount(SUM)1": 5280.360000000001,
                "province1": "奥里萨邦"
            },
            {
                "province0": "奥鲁罗省",
                "sales_amount(SUM)0": 1694.6,
                "sales_amount(SUM)1": 1694.6,
                "province1": "奥鲁罗省"
            },
            {
                "province0": "姆万扎",
                "sales_amount(SUM)0": 2529.888000000001,
                "sales_amount(SUM)1": 2529.888000000001,
                "province1": "姆万扎"
            },
            {
                "province0": "姆普马兰加",
                "sales_amount(SUM)0": 155.88,
                "sales_amount(SUM)1": 155.88,
                "province1": "姆普马兰加"
            },
            {
                "province0": "姆特瓦拉",
                "sales_amount(SUM)0": 251.45999999999998,
                "sales_amount(SUM)1": 251.45999999999998,
                "province1": "姆特瓦拉"
            },
            {
                "province0": "姆贝亚",
                "sales_amount(SUM)0": 1346.07,
                "sales_amount(SUM)1": 1346.07,
                "province1": "姆贝亚"
            },
            {
                "province0": "威尔士",
                "sales_amount(SUM)0": 10867.728000000001,
                "sales_amount(SUM)1": 10867.728000000001,
                "province1": "威尔士"
            },
            {
                "province0": "威尼托",
                "sales_amount(SUM)0": 17537.129999999997,
                "sales_amount(SUM)1": 17537.129999999997,
                "province1": "威尼托"
            },
            {
                "province0": "威斯康星",
                "sales_amount(SUM)0": 32114.61000000002,
                "sales_amount(SUM)1": 32114.61000000002,
                "province1": "威斯康星"
            },
            {
                "province0": "宁夏",
                "sales_amount(SUM)0": 129.84,
                "sales_amount(SUM)1": 129.84,
                "province1": "宁夏"
            },
            {
                "province0": "安卡什",
                "sales_amount(SUM)0": 268.72799999999995,
                "sales_amount(SUM)1": 268.72799999999995,
                "province1": "安卡什"
            },
            {
                "province0": "安卡拉",
                "sales_amount(SUM)0": 13182.960000000003,
                "sales_amount(SUM)1": 13182.960000000003,
                "province1": "安卡拉"
            },
            {
                "province0": "安塔利亚",
                "sales_amount(SUM)0": 2226.4200000000005,
                "sales_amount(SUM)1": 2226.4200000000005,
                "province1": "安塔利亚"
            },
            {
                "province0": "安大略",
                "sales_amount(SUM)0": 35450.4,
                "sales_amount(SUM)1": 35450.4,
                "province1": "安大略"
            },
            {
                "province0": "安得拉邦",
                "sales_amount(SUM)0": 19019.760000000006,
                "sales_amount(SUM)1": 19019.760000000006,
                "province1": "安得拉邦"
            },
            {
                "province0": "安徽省",
                "sales_amount(SUM)0": 34108.65,
                "sales_amount(SUM)1": 34108.65,
                "province1": "安徽省"
            },
            {
                "province0": "安托法加斯塔",
                "sales_amount(SUM)0": 1082.50032,
                "sales_amount(SUM)1": 1082.50032,
                "province1": "安托法加斯塔"
            },
            {
                "province0": "安曼",
                "sales_amount(SUM)0": 7167.99,
                "sales_amount(SUM)1": 7167.99,
                "province1": "安曼"
            },
            {
                "province0": "安特卫普",
                "sales_amount(SUM)0": 14794.680000000002,
                "sales_amount(SUM)1": 14794.680000000002,
                "province1": "安特卫普"
            },
            {
                "province0": "安瑟巴",
                "sales_amount(SUM)0": 187.73999999999998,
                "sales_amount(SUM)1": 187.73999999999998,
                "province1": "安瑟巴"
            },
            {
                "province0": "安索阿特吉",
                "sales_amount(SUM)0": 1565.0760000000002,
                "sales_amount(SUM)1": 1565.0760000000002,
                "province1": "安索阿特吉"
            },
            {
                "province0": "安纳巴",
                "sales_amount(SUM)0": 2921.4299999999994,
                "sales_amount(SUM)1": 2921.4299999999994,
                "province1": "安纳巴"
            },
            {
                "province0": "安蒂奥基亚",
                "sales_amount(SUM)0": 15672.217320000002,
                "sales_amount(SUM)1": 15672.217320000002,
                "province1": "安蒂奥基亚"
            },
            {
                "province0": "安达卢西亚",
                "sales_amount(SUM)0": 35335.407,
                "sales_amount(SUM)1": 35335.407,
                "province1": "安达卢西亚"
            },
            {
                "province0": "安集延",
                "sales_amount(SUM)0": 567.75,
                "sales_amount(SUM)1": 567.75,
                "province1": "安集延"
            },
            {
                "province0": "宝奇",
                "sales_amount(SUM)0": 631.2959999999999,
                "sales_amount(SUM)1": 631.2959999999999,
                "province1": "宝奇"
            },
            {
                "province0": "宾夕法尼亚州",
                "sales_amount(SUM)0": 116511.91400000003,
                "sales_amount(SUM)1": 116511.91400000003,
                "province1": "宾夕法尼亚州"
            },
            {
                "province0": "宾戈尔",
                "sales_amount(SUM)0": 938.376,
                "sales_amount(SUM)1": 938.376,
                "province1": "宾戈尔"
            },
            {
                "province0": "密歇根州",
                "sales_amount(SUM)0": 76269.61400000002,
                "sales_amount(SUM)1": 76269.61400000002,
                "province1": "密歇根州"
            },
            {
                "province0": "密苏里州",
                "sales_amount(SUM)0": 22205.149999999998,
                "sales_amount(SUM)1": 22205.149999999998,
                "province1": "密苏里州"
            },
            {
                "province0": "密西西比州",
                "sales_amount(SUM)0": 10771.34,
                "sales_amount(SUM)1": 10771.34,
                "province1": "密西西比州"
            },
            {
                "province0": "小波兰",
                "sales_amount(SUM)0": 1354.5600000000002,
                "sales_amount(SUM)1": 1354.5600000000002,
                "province1": "小波兰"
            },
            {
                "province0": "尚利乌尔法",
                "sales_amount(SUM)0": 590.136,
                "sales_amount(SUM)1": 590.136,
                "province1": "尚利乌尔法"
            },
            {
                "province0": "尤卡坦州",
                "sales_amount(SUM)0": 15081.92592,
                "sales_amount(SUM)1": 15081.92592,
                "province1": "尤卡坦州"
            },
            {
                "province0": "尼亚姆茨",
                "sales_amount(SUM)0": 2875.32,
                "sales_amount(SUM)1": 2875.32,
                "province1": "尼亚姆茨"
            },
            {
                "province0": "尼亚美市",
                "sales_amount(SUM)0": 4799.310000000001,
                "sales_amount(SUM)1": 4799.310000000001,
                "province1": "尼亚美市"
            },
            {
                "province0": "尼亚萨",
                "sales_amount(SUM)0": 970.2,
                "sales_amount(SUM)1": 970.2,
                "province1": "尼亚萨"
            },
            {
                "province0": "尼代",
                "sales_amount(SUM)0": 213.84,
                "sales_amount(SUM)1": 213.84,
                "province1": "尼代"
            },
            {
                "province0": "尼古拉耶夫",
                "sales_amount(SUM)0": 1576.0800000000002,
                "sales_amount(SUM)1": 1576.0800000000002,
                "province1": "尼古拉耶夫"
            },
            {
                "province0": "尼安萨",
                "sales_amount(SUM)0": 985.05,
                "sales_amount(SUM)1": 985.05,
                "province1": "尼安萨"
            },
            {
                "province0": "尼尼微",
                "sales_amount(SUM)0": 4915.59,
                "sales_amount(SUM)1": 4915.59,
                "province1": "尼尼微"
            },
            {
                "province0": "尼日尔",
                "sales_amount(SUM)0": 443.49300000000005,
                "sales_amount(SUM)1": 443.49300000000005,
                "province1": "尼日尔"
            },
            {
                "province0": "尼特拉",
                "sales_amount(SUM)0": 742.5899999999999,
                "sales_amount(SUM)1": 742.5899999999999,
                "province1": "尼特拉"
            },
            {
                "province0": "尼科西亚",
                "sales_amount(SUM)0": 437.31,
                "sales_amount(SUM)1": 437.31,
                "province1": "尼科西亚"
            },
            {
                "province0": "尼阿里河",
                "sales_amount(SUM)0": 2713.2299999999996,
                "sales_amount(SUM)1": 2713.2299999999996,
                "province1": "尼阿里河"
            },
            {
                "province0": "屈塔希亚",
                "sales_amount(SUM)0": 2514.912,
                "sales_amount(SUM)1": 2514.912,
                "province1": "屈塔希亚"
            },
            {
                "province0": "屈米区",
                "sales_amount(SUM)0": 233.79,
                "sales_amount(SUM)1": 233.79,
                "province1": "屈米区"
            },
            {
                "province0": "山东省",
                "sales_amount(SUM)0": 57398.540999999976,
                "sales_amount(SUM)1": 57398.540999999976,
                "province1": "山东省"
            },
            {
                "province0": "山口县",
                "sales_amount(SUM)0": 6654.780000000001,
                "sales_amount(SUM)1": 6654.780000000001,
                "province1": "山口县"
            },
            {
                "province0": "山西省",
                "sales_amount(SUM)0": 14952.666,
                "sales_amount(SUM)1": 14952.666,
                "province1": "山西省"
            },
            {
                "province0": "岘港",
                "sales_amount(SUM)0": 3814.4769,
                "sales_amount(SUM)1": 3814.4769,
                "province1": "岘港"
            },
            {
                "province0": "巴什科尔托斯坦",
                "sales_amount(SUM)0": 9729.210000000001,
                "sales_amount(SUM)1": 9729.210000000001,
                "province1": "巴什科尔托斯坦"
            },
            {
                "province0": "巴伊亚",
                "sales_amount(SUM)0": 17598.15556,
                "sales_amount(SUM)1": 17598.15556,
                "province1": "巴伊亚"
            },
            {
                "province0": "巴伐利亚",
                "sales_amount(SUM)0": 58870.807499999966,
                "sales_amount(SUM)1": 58870.807499999966,
                "province1": "巴伐利亚"
            },
            {
                "province0": "巴伦西亚",
                "sales_amount(SUM)0": 30721.047,
                "sales_amount(SUM)1": 30721.047,
                "province1": "巴伦西亚"
            },
            {
                "province0": "巴克乌",
                "sales_amount(SUM)0": 2949.33,
                "sales_amount(SUM)1": 2949.33,
                "province1": "巴克乌"
            },
            {
                "province0": "巴利阿里群岛",
                "sales_amount(SUM)0": 6530.715,
                "sales_amount(SUM)1": 6530.715,
                "province1": "巴利阿里群岛"
            },
            {
                "province0": "巴勒克埃西尔",
                "sales_amount(SUM)0": 2065.5000000000005,
                "sales_amount(SUM)1": 2065.5000000000005,
                "province1": "巴勒克埃西尔"
            },
            {
                "province0": "巴厘省",
                "sales_amount(SUM)0": 6841.553100000004,
                "sales_amount(SUM)1": 6841.553100000004,
                "province1": "巴厘省"
            },
            {
                "province0": "巴基",
                "sales_amount(SUM)0": 5631.51,
                "sales_amount(SUM)1": 5631.51,
                "province1": "巴基"
            },
            {
                "province0": "巴塞尔城市",
                "sales_amount(SUM)0": 3780.66,
                "sales_amount(SUM)1": 3780.66,
                "province1": "巴塞尔城市"
            },
            {
                "province0": "巴士拉",
                "sales_amount(SUM)0": 13257.210000000001,
                "sales_amount(SUM)1": 13257.210000000001,
                "province1": "巴士拉"
            },
            {
                "province0": "巴布亚",
                "sales_amount(SUM)0": 2756.2833,
                "sales_amount(SUM)1": 2756.2833,
                "province1": "巴布亚"
            },
            {
                "province0": "巴拉奥纳",
                "sales_amount(SUM)0": 4118.370000000001,
                "sales_amount(SUM)1": 4118.370000000001,
                "province1": "巴拉奥纳"
            },
            {
                "province0": "巴拉那",
                "sales_amount(SUM)0": 23218.072759999995,
                "sales_amount(SUM)1": 23218.072759999995,
                "province1": "巴拉那"
            },
            {
                "province0": "巴拿马",
                "sales_amount(SUM)0": 41490.180639999984,
                "sales_amount(SUM)1": 41490.180639999984,
                "province1": "巴拿马"
            },
            {
                "province0": "巴斯克自治区",
                "sales_amount(SUM)0": 24218.501999999993,
                "sales_amount(SUM)1": 24218.501999999993,
                "province1": "巴斯克自治区"
            },
            {
                "province0": "巴格达",
                "sales_amount(SUM)0": 28867.620000000003,
                "sales_amount(SUM)1": 28867.620000000003,
                "province1": "巴格达"
            },
            {
                "province0": "巴比伦",
                "sales_amount(SUM)0": 2009.43,
                "sales_amount(SUM)1": 2009.43,
                "province1": "巴比伦"
            },
            {
                "province0": "巴特曼河",
                "sales_amount(SUM)0": 1190.292,
                "sales_amount(SUM)1": 1190.292,
                "province1": "巴特曼河"
            },
            {
                "province0": "巴特纳",
                "sales_amount(SUM)0": 1972.77,
                "sales_amount(SUM)1": 1972.77,
                "province1": "巴特纳"
            },
            {
                "province0": "巴甫洛达尔",
                "sales_amount(SUM)0": 1010.799,
                "sales_amount(SUM)1": 1010.799,
                "province1": "巴甫洛达尔"
            },
            {
                "province0": "巴登-符腾堡",
                "sales_amount(SUM)0": 46979.53050000002,
                "sales_amount(SUM)1": 46979.53050000002,
                "province1": "巴登-符腾堡"
            },
            {
                "province0": "巴纳迪尔",
                "sales_amount(SUM)0": 3501.7799999999997,
                "sales_amount(SUM)1": 3501.7799999999997,
                "province1": "巴纳迪尔"
            },
            {
                "province0": "巴西利卡塔",
                "sales_amount(SUM)0": 177.786,
                "sales_amount(SUM)1": 177.786,
                "province1": "巴西利卡塔"
            },
            {
                "province0": "巴马科",
                "sales_amount(SUM)0": 6740.13,
                "sales_amount(SUM)1": 6740.13,
                "province1": "巴马科"
            },
            {
                "province0": "布什尔",
                "sales_amount(SUM)0": 767.82,
                "sales_amount(SUM)1": 767.82,
                "province1": "布什尔"
            },
            {
                "province0": "布列塔尼",
                "sales_amount(SUM)0": 27632.406,
                "sales_amount(SUM)1": 27632.406,
                "province1": "布列塔尼"
            },
            {
                "province0": "布勒伊拉",
                "sales_amount(SUM)0": 428.61,
                "sales_amount(SUM)1": 428.61,
                "province1": "布勒伊拉"
            },
            {
                "province0": "布埃尼",
                "sales_amount(SUM)0": 2043.8999999999999,
                "sales_amount(SUM)1": 2043.8999999999999,
                "province1": "布埃尼"
            },
            {
                "province0": "布宜诺斯艾利斯",
                "sales_amount(SUM)0": 28576.47443999998,
                "sales_amount(SUM)1": 28576.47443999998,
                "province1": "布宜诺斯艾利斯"
            },
            {
                "province0": "布宜诺斯艾利斯省",
                "sales_amount(SUM)0": 3659.43884,
                "sales_amount(SUM)1": 3659.43884,
                "province1": "布宜诺斯艾利斯省"
            },
            {
                "province0": "布尔加斯",
                "sales_amount(SUM)0": 709.05,
                "sales_amount(SUM)1": 709.05,
                "province1": "布尔加斯"
            },
            {
                "province0": "布尔萨",
                "sales_amount(SUM)0": 3384.2039999999993,
                "sales_amount(SUM)1": 3384.2039999999993,
                "province1": "布尔萨"
            },
            {
                "province0": "布拉加",
                "sales_amount(SUM)0": 460.98,
                "sales_amount(SUM)1": 460.98,
                "province1": "布拉加"
            },
            {
                "province0": "布拉格",
                "sales_amount(SUM)0": 5940.6,
                "sales_amount(SUM)1": 5940.6,
                "province1": "布拉格"
            },
            {
                "province0": "布拉瓦约",
                "sales_amount(SUM)0": 2080.2330000000006,
                "sales_amount(SUM)1": 2080.2330000000006,
                "province1": "布拉瓦约"
            },
            {
                "province0": "布拉索夫",
                "sales_amount(SUM)0": 2768.9399999999996,
                "sales_amount(SUM)1": 2768.9399999999996,
                "province1": "布拉索夫"
            },
            {
                "province0": "布斯克吕",
                "sales_amount(SUM)0": 911.46,
                "sales_amount(SUM)1": 911.46,
                "province1": "布斯克吕"
            },
            {
                "province0": "布朗斯克",
                "sales_amount(SUM)0": 2367.03,
                "sales_amount(SUM)1": 2367.03,
                "province1": "布朗斯克"
            },
            {
                "province0": "布泽乌",
                "sales_amount(SUM)0": 2469.87,
                "sales_amount(SUM)1": 2469.87,
                "province1": "布泽乌"
            },
            {
                "province0": "布海拉",
                "sales_amount(SUM)0": 709.83,
                "sales_amount(SUM)1": 709.83,
                "province1": "布海拉"
            },
            {
                "province0": "布琼布拉城市省",
                "sales_amount(SUM)0": 267.72,
                "sales_amount(SUM)1": 267.72,
                "province1": "布琼布拉城市省"
            },
            {
                "province0": "布达佩斯",
                "sales_amount(SUM)0": 7469.670000000001,
                "sales_amount(SUM)1": 7469.670000000001,
                "province1": "布达佩斯"
            },
            {
                "province0": "布雷斯特",
                "sales_amount(SUM)0": 4400.789999999999,
                "sales_amount(SUM)1": 4400.789999999999,
                "province1": "布雷斯特"
            },
            {
                "province0": "布鲁塞尔",
                "sales_amount(SUM)0": 1049.73,
                "sales_amount(SUM)1": 1049.73,
                "province1": "布鲁塞尔"
            },
            {
                "province0": "希奥利艾",
                "sales_amount(SUM)0": 96.56099999999999,
                "sales_amount(SUM)1": 96.56099999999999,
                "province1": "希奥利艾"
            },
            {
                "province0": "希尼安加",
                "sales_amount(SUM)0": 2029.329,
                "sales_amount(SUM)1": 2029.329,
                "province1": "希尼安加"
            },
            {
                "province0": "帕扎尔吉克州",
                "sales_amount(SUM)0": 193.77,
                "sales_amount(SUM)1": 193.77,
                "province1": "帕扎尔吉克州"
            },
            {
                "province0": "帕拉",
                "sales_amount(SUM)0": 8723.859200000003,
                "sales_amount(SUM)1": 8723.859200000003,
                "province1": "帕拉"
            },
            {
                "province0": "帕拉伊巴",
                "sales_amount(SUM)0": 8933.192799999999,
                "sales_amount(SUM)1": 8933.192799999999,
                "province1": "帕拉伊巴"
            },
            {
                "province0": "帕拉马里博区",
                "sales_amount(SUM)0": 23.64,
                "sales_amount(SUM)1": 23.64,
                "province1": "帕拉马里博区"
            },
            {
                "province0": "帕涅韦日斯",
                "sales_amount(SUM)0": 1472.9130000000002,
                "sales_amount(SUM)1": 1472.9130000000002,
                "province1": "帕涅韦日斯"
            },
            {
                "province0": "广东省",
                "sales_amount(SUM)0": 96087.95999999993,
                "sales_amount(SUM)1": 96087.95999999993,
                "province1": "广东省"
            },
            {
                "province0": "广岛县",
                "sales_amount(SUM)0": 2662.2599999999998,
                "sales_amount(SUM)1": 2662.2599999999998,
                "province1": "广岛县"
            },
            {
                "province0": "广西省",
                "sales_amount(SUM)0": 10540.109999999999,
                "sales_amount(SUM)1": 10540.109999999999,
                "province1": "广西省"
            },
            {
                "province0": "庆和省",
                "sales_amount(SUM)0": 1233.1206,
                "sales_amount(SUM)1": 1233.1206,
                "province1": "庆和省"
            },
            {
                "province0": "庆尚南道",
                "sales_amount(SUM)0": 2481.303,
                "sales_amount(SUM)1": 2481.303,
                "province1": "庆尚南道"
            },
            {
                "province0": "库姆省",
                "sales_amount(SUM)0": 6132.63,
                "sales_amount(SUM)1": 6132.63,
                "province1": "库姆省"
            },
            {
                "province0": "库尔德斯坦",
                "sales_amount(SUM)0": 3841.08,
                "sales_amount(SUM)1": 3841.08,
                "province1": "库尔德斯坦"
            },
            {
                "province0": "库尔纳",
                "sales_amount(SUM)0": 11407.019999999999,
                "sales_amount(SUM)1": 11407.019999999999,
                "province1": "库尔纳"
            },
            {
                "province0": "库斯卡特兰",
                "sales_amount(SUM)0": 1433.48,
                "sales_amount(SUM)1": 1433.48,
                "province1": "库斯卡特兰"
            },
            {
                "province0": "库斯塔奈",
                "sales_amount(SUM)0": 652.1669999999999,
                "sales_amount(SUM)1": 652.1669999999999,
                "province1": "库斯塔奈"
            },
            {
                "province0": "库马诺沃",
                "sales_amount(SUM)0": 198.66000000000003,
                "sales_amount(SUM)1": 198.66000000000003,
                "province1": "库马诺沃"
            },
            {
                "province0": "康康行政区",
                "sales_amount(SUM)0": 1169.55,
                "sales_amount(SUM)1": 1169.55,
                "province1": "康康行政区"
            },
            {
                "province0": "康斯坦察",
                "sales_amount(SUM)0": 1840.02,
                "sales_amount(SUM)1": 1840.02,
                "province1": "康斯坦察"
            },
            {
                "province0": "康涅狄格州",
                "sales_amount(SUM)0": 13384.356999999996,
                "sales_amount(SUM)1": 13384.356999999996,
                "province1": "康涅狄格州"
            },
            {
                "province0": "廖内省",
                "sales_amount(SUM)0": 5980.652099999999,
                "sales_amount(SUM)1": 5980.652099999999,
                "province1": "廖内省"
            },
            {
                "province0": "建江",
                "sales_amount(SUM)0": 4454.8656,
                "sales_amount(SUM)1": 4454.8656,
                "province1": "建江"
            },
            {
                "province0": "开伯尔-普赫图赫瓦省",
                "sales_amount(SUM)0": 2010.9299999999998,
                "sales_amount(SUM)1": 2010.9299999999998,
                "province1": "开伯尔-普赫图赫瓦省"
            },
            {
                "province0": "开塞利省",
                "sales_amount(SUM)0": 1752.432,
                "sales_amount(SUM)1": 1752.432,
                "province1": "开塞利省"
            },
            {
                "province0": "开罗",
                "sales_amount(SUM)0": 38439.779999999984,
                "sales_amount(SUM)1": 38439.779999999984,
                "province1": "开罗"
            },
            {
                "province0": "弗吉尼亚州",
                "sales_amount(SUM)0": 70636.71999999999,
                "sales_amount(SUM)1": 70636.71999999999,
                "province1": "弗吉尼亚州"
            },
            {
                "province0": "弗拉基米尔",
                "sales_amount(SUM)0": 2789.5199999999995,
                "sales_amount(SUM)1": 2789.5199999999995,
                "province1": "弗拉基米尔"
            },
            {
                "province0": "弗朗恰",
                "sales_amount(SUM)0": 34.2,
                "sales_amount(SUM)1": 34.2,
                "province1": "弗朗恰"
            },
            {
                "province0": "弗朗西斯科·莫拉桑",
                "sales_amount(SUM)0": 48048.90391999996,
                "sales_amount(SUM)1": 48048.90391999996,
                "province1": "弗朗西斯科·莫拉桑"
            },
            {
                "province0": "弗留利-威尼斯朱利亚",
                "sales_amount(SUM)0": 1055.43,
                "sales_amount(SUM)1": 1055.43,
                "province1": "弗留利-威尼斯朱利亚"
            },
            {
                "province0": "弗罗马格尔",
                "sales_amount(SUM)0": 1340.76,
                "sales_amount(SUM)1": 1340.76,
                "province1": "弗罗马格尔"
            },
            {
                "province0": "弗里斯兰",
                "sales_amount(SUM)0": 491.469,
                "sales_amount(SUM)1": 491.469,
                "province1": "弗里斯兰"
            },
            {
                "province0": "彭亨州",
                "sales_amount(SUM)0": 5894.31,
                "sales_amount(SUM)1": 5894.31,
                "province1": "彭亨州"
            },
            {
                "province0": "得克萨斯州",
                "sales_amount(SUM)0": 170188.04580000002,
                "sales_amount(SUM)1": 170188.04580000002,
                "province1": "得克萨斯州"
            },
            {
                "province0": "德伦特",
                "sales_amount(SUM)0": 1838.55,
                "sales_amount(SUM)1": 1838.55,
                "province1": "德伦特"
            },
            {
                "province0": "德尔加杜角",
                "sales_amount(SUM)0": 88.65,
                "sales_amount(SUM)1": 88.65,
                "province1": "德尔加杜角"
            },
            {
                "province0": "德里邦",
                "sales_amount(SUM)0": 31026.02999999999,
                "sales_amount(SUM)1": 31026.02999999999,
                "province1": "德里邦"
            },
            {
                "province0": "德雷达瓦",
                "sales_amount(SUM)0": 850.62,
                "sales_amount(SUM)1": 850.62,
                "province1": "德雷达瓦"
            },
            {
                "province0": "德黑兰",
                "sales_amount(SUM)0": 6420.450000000001,
                "sales_amount(SUM)1": 6420.450000000001,
                "province1": "德黑兰"
            },
            {
                "province0": "忠清南道",
                "sales_amount(SUM)0": 46.8,
                "sales_amount(SUM)1": 46.8,
                "province1": "忠清南道"
            },
            {
                "province0": "怀俄明州",
                "sales_amount(SUM)0": 1603.136,
                "sales_amount(SUM)1": 1603.136,
                "province1": "怀俄明州"
            },
            {
                "province0": "怀卡托区",
                "sales_amount(SUM)0": 20617.859999999997,
                "sales_amount(SUM)1": 20617.859999999997,
                "province1": "怀卡托区"
            },
            {
                "province0": "恩泽雷科雷",
                "sales_amount(SUM)0": 1223.7599999999998,
                "sales_amount(SUM)1": 1223.7599999999998,
                "province1": "恩泽雷科雷"
            },
            {
                "province0": "恩特雷里奥斯",
                "sales_amount(SUM)0": 376.54240000000004,
                "sales_amount(SUM)1": 376.54240000000004,
                "province1": "恩特雷里奥斯"
            },
            {
                "province0": "恰尔肯德邦",
                "sales_amount(SUM)0": 12131.58,
                "sales_amount(SUM)1": 12131.58,
                "province1": "恰尔肯德邦"
            },
            {
                "province0": "恰帕斯",
                "sales_amount(SUM)0": 5197.279519999998,
                "sales_amount(SUM)1": 5197.279519999998,
                "province1": "恰帕斯"
            },
            {
                "province0": "恰纳卡莱",
                "sales_amount(SUM)0": 330.432,
                "sales_amount(SUM)1": 330.432,
                "province1": "恰纳卡莱"
            },
            {
                "province0": "恰蒂斯加尔邦",
                "sales_amount(SUM)0": 22798.02,
                "sales_amount(SUM)1": 22798.02,
                "province1": "恰蒂斯加尔邦"
            },
            {
                "province0": "惠灵顿",
                "sales_amount(SUM)0": 36690.53999999999,
                "sales_amount(SUM)1": 36690.53999999999,
                "province1": "惠灵顿"
            },
            {
                "province0": "戈亚斯",
                "sales_amount(SUM)0": 8450.613159999999,
                "sales_amount(SUM)1": 8450.613159999999,
                "province1": "戈亚斯"
            },
            {
                "province0": "戈尔日",
                "sales_amount(SUM)0": 569.28,
                "sales_amount(SUM)1": 569.28,
                "province1": "戈尔日"
            },
            {
                "province0": "戈尔韦郡",
                "sales_amount(SUM)0": 238.65,
                "sales_amount(SUM)1": 238.65,
                "province1": "戈尔韦郡"
            },
            {
                "province0": "戈梅利",
                "sales_amount(SUM)0": 2216.0099999999998,
                "sales_amount(SUM)1": 2216.0099999999998,
                "province1": "戈梅利"
            },
            {
                "province0": "戈莱斯坦",
                "sales_amount(SUM)0": 1003.44,
                "sales_amount(SUM)1": 1003.44,
                "province1": "戈莱斯坦"
            },
            {
                "province0": "扎姆法拉",
                "sales_amount(SUM)0": 135.34199999999998,
                "sales_amount(SUM)1": 135.34199999999998,
                "province1": "扎姆法拉"
            },
            {
                "province0": "扎波里日亚",
                "sales_amount(SUM)0": 4748.700000000001,
                "sales_amount(SUM)1": 4748.700000000001,
                "province1": "扎波里日亚"
            },
            {
                "province0": "托利马",
                "sales_amount(SUM)0": 2166.6000000000004,
                "sales_amount(SUM)1": 2166.6000000000004,
                "province1": "托利马"
            },
            {
                "province0": "托卡特",
                "sales_amount(SUM)0": 155.928,
                "sales_amount(SUM)1": 155.928,
                "province1": "托卡特"
            },
            {
                "province0": "托坎廷斯",
                "sales_amount(SUM)0": 3896.16,
                "sales_amount(SUM)1": 3896.16,
                "province1": "托坎廷斯"
            },
            {
                "province0": "托斯卡纳",
                "sales_amount(SUM)0": 30569.784000000014,
                "sales_amount(SUM)1": 30569.784000000014,
                "province1": "托斯卡纳"
            },
            {
                "province0": "扬博尔州",
                "sales_amount(SUM)0": 638.91,
                "sales_amount(SUM)1": 638.91,
                "province1": "扬博尔州"
            },
            {
                "province0": "拉利伯塔德省",
                "sales_amount(SUM)0": 6777.44808,
                "sales_amount(SUM)1": 6777.44808,
                "province1": "拉利伯塔德省"
            },
            {
                "province0": "拉卡省",
                "sales_amount(SUM)0": 101.04,
                "sales_amount(SUM)1": 101.04,
                "province1": "拉卡省"
            },
            {
                "province0": "拉各斯",
                "sales_amount(SUM)0": 17185.32900000001,
                "sales_amount(SUM)1": 17185.32900000001,
                "province1": "拉各斯"
            },
            {
                "province0": "拉巴斯",
                "sales_amount(SUM)0": 879.6800000000001,
                "sales_amount(SUM)1": 879.6800000000001,
                "province1": "拉巴斯"
            },
            {
                "province0": "拉巴特-萨累-宰穆尔-扎埃尔",
                "sales_amount(SUM)0": 19399.98,
                "sales_amount(SUM)1": 19399.98,
                "province1": "拉巴特-萨累-宰穆尔-扎埃尔"
            },
            {
                "province0": "拉斯图纳斯省",
                "sales_amount(SUM)0": 8917.537320000001,
                "sales_amount(SUM)1": 8917.537320000001,
                "province1": "拉斯图纳斯省"
            },
            {
                "province0": "拉斯海马酋长国",
                "sales_amount(SUM)0": 534.132,
                "sales_amount(SUM)1": 534.132,
                "province1": "拉斯海马酋长国"
            },
            {
                "province0": "拉杰沙希",
                "sales_amount(SUM)0": 4986.9,
                "sales_amount(SUM)1": 4986.9,
                "province1": "拉杰沙希"
            },
            {
                "province0": "拉潘帕",
                "sales_amount(SUM)0": 229.284,
                "sales_amount(SUM)1": 229.284,
                "province1": "拉潘帕"
            },
            {
                "province0": "拉维加",
                "sales_amount(SUM)0": 2686.4114400000003,
                "sales_amount(SUM)1": 2686.4114400000003,
                "province1": "拉维加"
            },
            {
                "province0": "拉罗马纳",
                "sales_amount(SUM)0": 7607.0761600000005,
                "sales_amount(SUM)1": 7607.0761600000005,
                "province1": "拉罗马纳"
            },
            {
                "province0": "拉腊",
                "sales_amount(SUM)0": 1444.116,
                "sales_amount(SUM)1": 1444.116,
                "province1": "拉腊"
            },
            {
                "province0": "拉贝河畔乌斯季",
                "sales_amount(SUM)0": 289.91999999999996,
                "sales_amount(SUM)1": 289.91999999999996,
                "province1": "拉贝河畔乌斯季"
            },
            {
                "province0": "拉贾斯坦邦",
                "sales_amount(SUM)0": 30992.789999999994,
                "sales_amount(SUM)1": 30992.789999999994,
                "province1": "拉贾斯坦邦"
            },
            {
                "province0": "拉里奥哈",
                "sales_amount(SUM)0": 355.38,
                "sales_amount(SUM)1": 355.38,
                "province1": "拉里奥哈"
            },
            {
                "province0": "拉齐奥",
                "sales_amount(SUM)0": 50409.77999999995,
                "sales_amount(SUM)1": 50409.77999999995,
                "province1": "拉齐奥"
            },
            {
                "province0": "拜尼苏韦夫",
                "sales_amount(SUM)0": 1678.9199999999998,
                "sales_amount(SUM)1": 1678.9199999999998,
                "province1": "拜尼苏韦夫"
            },
            {
                "province0": "拿曼干州",
                "sales_amount(SUM)0": 1894.9499999999998,
                "sales_amount(SUM)1": 1894.9499999999998,
                "province1": "拿曼干州"
            },
            {
                "province0": "捷斯",
                "sales_amount(SUM)0": 2103.69,
                "sales_amount(SUM)1": 2103.69,
                "province1": "捷斯"
            },
            {
                "province0": "提济乌祖",
                "sales_amount(SUM)0": 198.21,
                "sales_amount(SUM)1": 198.21,
                "province1": "提济乌祖"
            },
            {
                "province0": "摩拉维亚-西里西亚州",
                "sales_amount(SUM)0": 304.38,
                "sales_amount(SUM)1": 304.38,
                "province1": "摩拉维亚-西里西亚州"
            },
            {
                "province0": "撒丁岛",
                "sales_amount(SUM)0": 4092.222,
                "sales_amount(SUM)1": 4092.222,
                "province1": "撒丁岛"
            },
            {
                "province0": "文尼察",
                "sales_amount(SUM)0": 5658.0599999999995,
                "sales_amount(SUM)1": 5658.0599999999995,
                "province1": "文尼察"
            },
            {
                "province0": "斯利文",
                "sales_amount(SUM)0": 483.48,
                "sales_amount(SUM)1": 483.48,
                "province1": "斯利文"
            },
            {
                "province0": "斯基克达",
                "sales_amount(SUM)0": 634.9200000000001,
                "sales_amount(SUM)1": 634.9200000000001,
                "province1": "斯基克达"
            },
            {
                "province0": "斯塔夫罗波尔边疆区",
                "sales_amount(SUM)0": 2243.6400000000003,
                "sales_amount(SUM)1": 2243.6400000000003,
                "province1": "斯塔夫罗波尔边疆区"
            },
            {
                "province0": "斯库台",
                "sales_amount(SUM)0": 593.28,
                "sales_amount(SUM)1": 593.28,
                "province1": "斯库台"
            },
            {
                "province0": "斯德哥尔摩",
                "sales_amount(SUM)0": 21589.749,
                "sales_amount(SUM)1": 21589.749,
                "province1": "斯德哥尔摩"
            },
            {
                "province0": "斯普利特-达尔马提亚",
                "sales_amount(SUM)0": 144.9,
                "sales_amount(SUM)1": 144.9,
                "province1": "斯普利特-达尔马提亚"
            },
            {
                "province0": "斯科纳",
                "sales_amount(SUM)0": 2235.96,
                "sales_amount(SUM)1": 2235.96,
                "province1": "斯科纳"
            },
            {
                "province0": "新加坡",
                "sales_amount(SUM)0": 40286.24999999999,
                "sales_amount(SUM)1": 40286.24999999999,
                "province1": "新加坡"
            },
            {
                "province0": "新南威尔士",
                "sales_amount(SUM)0": 270487.1040000001,
                "sales_amount(SUM)1": 270487.1040000001,
                "province1": "新南威尔士"
            },
            {
                "province0": "新埃斯帕塔",
                "sales_amount(SUM)0": 269.88,
                "sales_amount(SUM)1": 269.88,
                "province1": "新埃斯帕塔"
            },
            {
                "province0": "新墨西哥州",
                "sales_amount(SUM)0": 4783.521999999999,
                "sales_amount(SUM)1": 4783.521999999999,
                "province1": "新墨西哥州"
            },
            {
                "province0": "新斯科舍",
                "sales_amount(SUM)0": 382.32,
                "sales_amount(SUM)1": 382.32,
                "province1": "新斯科舍"
            },
            {
                "province0": "新泽西州",
                "sales_amount(SUM)0": 35764.31200000001,
                "sales_amount(SUM)1": 35764.31200000001,
                "province1": "新泽西州"
            },
            {
                "province0": "新疆维吾尔自治区",
                "sales_amount(SUM)0": 5559.48,
                "sales_amount(SUM)1": 5559.48,
                "province1": "新疆维吾尔自治区"
            },
            {
                "province0": "新罕布什尔州",
                "sales_amount(SUM)0": 7292.523999999999,
                "sales_amount(SUM)1": 7292.523999999999,
                "province1": "新罕布什尔州"
            },
            {
                "province0": "新莱昂",
                "sales_amount(SUM)0": 41066.78000000001,
                "sales_amount(SUM)1": 41066.78000000001,
                "province1": "新莱昂"
            },
            {
                "province0": "新西伯利亚州",
                "sales_amount(SUM)0": 54.18,
                "sales_amount(SUM)1": 54.18,
                "province1": "新西伯利亚州"
            },
            {
                "province0": "施蒂里亚",
                "sales_amount(SUM)0": 4670.07,
                "sales_amount(SUM)1": 4670.07,
                "province1": "施蒂里亚"
            },
            {
                "province0": "旁遮普邦",
                "sales_amount(SUM)0": 60069.99000000001,
                "sales_amount(SUM)1": 60069.99000000001,
                "province1": "旁遮普邦"
            },
            {
                "province0": "日内瓦",
                "sales_amount(SUM)0": 1865.43,
                "sales_amount(SUM)1": 1865.43,
                "province1": "日内瓦"
            },
            {
                "province0": "日利纳",
                "sales_amount(SUM)0": 60.120000000000005,
                "sales_amount(SUM)1": 60.120000000000005,
                "province1": "日利纳"
            },
            {
                "province0": "日惹",
                "sales_amount(SUM)0": 20843.86139999999,
                "sales_amount(SUM)1": 20843.86139999999,
                "province1": "日惹"
            },
            {
                "province0": "日托米尔州",
                "sales_amount(SUM)0": 4563.84,
                "sales_amount(SUM)1": 4563.84,
                "province1": "日托米尔州"
            },
            {
                "province0": "旧扎戈拉州",
                "sales_amount(SUM)0": 58.83,
                "sales_amount(SUM)1": 58.83,
                "province1": "旧扎戈拉州"
            },
            {
                "province0": "昆士兰州",
                "sales_amount(SUM)0": 238312.73399999965,
                "sales_amount(SUM)1": 238312.73399999965,
                "province1": "昆士兰州"
            },
            {
                "province0": "昆迪纳马卡",
                "sales_amount(SUM)0": 3771.56,
                "sales_amount(SUM)1": 3771.56,
                "province1": "昆迪纳马卡"
            },
            {
                "province0": "昌迪加尔",
                "sales_amount(SUM)0": 491.94,
                "sales_amount(SUM)1": 491.94,
                "province1": "昌迪加尔"
            },
            {
                "province0": "明亚",
                "sales_amount(SUM)0": 2968.6200000000003,
                "sales_amount(SUM)1": 2968.6200000000003,
                "province1": "明亚"
            },
            {
                "province0": "明古鲁",
                "sales_amount(SUM)0": 534.6765,
                "sales_amount(SUM)1": 534.6765,
                "province1": "明古鲁"
            },
            {
                "province0": "明尼苏达州",
                "sales_amount(SUM)0": 29863.149999999994,
                "sales_amount(SUM)1": 29863.149999999994,
                "province1": "明尼苏达州"
            },
            {
                "province0": "普伦蒂湾",
                "sales_amount(SUM)0": 11101.650000000003,
                "sales_amount(SUM)1": 11101.650000000003,
                "province1": "普伦蒂湾"
            },
            {
                "province0": "普列文州",
                "sales_amount(SUM)0": 56.46,
                "sales_amount(SUM)1": 56.46,
                "province1": "普列文州"
            },
            {
                "province0": "普利亚",
                "sales_amount(SUM)0": 23774.892,
                "sales_amount(SUM)1": 23774.892,
                "province1": "普利亚"
            },
            {
                "province0": "普埃布拉州",
                "sales_amount(SUM)0": 35022.974400000014,
                "sales_amount(SUM)1": 35022.974400000014,
                "province1": "普埃布拉州"
            },
            {
                "province0": "普拉霍瓦河",
                "sales_amount(SUM)0": 2067.84,
                "sales_amount(SUM)1": 2067.84,
                "province1": "普拉霍瓦河"
            },
            {
                "province0": "普罗夫迪夫州",
                "sales_amount(SUM)0": 898.6499999999999,
                "sales_amount(SUM)1": 898.6499999999999,
                "province1": "普罗夫迪夫州"
            },
            {
                "province0": "普罗旺斯-阿尔卑斯-蔚蓝海岸",
                "sales_amount(SUM)0": 114372.30150000009,
                "sales_amount(SUM)1": 114372.30150000009,
                "province1": "普罗旺斯-阿尔卑斯-蔚蓝海岸"
            },
            {
                "province0": "普诺",
                "sales_amount(SUM)0": 342.90000000000003,
                "sales_amount(SUM)1": 342.90000000000003,
                "province1": "普诺"
            },
            {
                "province0": "曼尼托巴省",
                "sales_amount(SUM)0": 2017.62,
                "sales_amount(SUM)1": 2017.62,
                "province1": "曼尼托巴省"
            },
            {
                "province0": "曼尼普尔邦",
                "sales_amount(SUM)0": 5429.34,
                "sales_amount(SUM)1": 5429.34,
                "province1": "曼尼普尔邦"
            },
            {
                "province0": "曼谷",
                "sales_amount(SUM)0": 76049.80230000007,
                "sales_amount(SUM)1": 76049.80230000007,
                "province1": "曼谷"
            },
            {
                "province0": "曼齐尼",
                "sales_amount(SUM)0": 288.03000000000003,
                "sales_amount(SUM)1": 288.03000000000003,
                "province1": "曼齐尼"
            },
            {
                "province0": "朗多尼亚",
                "sales_amount(SUM)0": 560.38832,
                "sales_amount(SUM)1": 560.38832,
                "province1": "朗多尼亚"
            },
            {
                "province0": "朗格多克-鲁西永-南部-比利牛斯",
                "sales_amount(SUM)0": 53890.483500000024,
                "sales_amount(SUM)1": 53890.483500000024,
                "province1": "朗格多克-鲁西永-南部-比利牛斯"
            },
            {
                "province0": "本地治里邦",
                "sales_amount(SUM)0": 2936.67,
                "sales_amount(SUM)1": 2936.67,
                "province1": "本地治里邦"
            },
            {
                "province0": "本格拉",
                "sales_amount(SUM)0": 6082.650000000001,
                "sales_amount(SUM)1": 6082.650000000001,
                "province1": "本格拉"
            },
            {
                "province0": "杜兰戈州",
                "sales_amount(SUM)0": 13666.718160000002,
                "sales_amount(SUM)1": 13666.718160000002,
                "province1": "杜兰戈州"
            },
            {
                "province0": "杜卡拉-阿卜达",
                "sales_amount(SUM)0": 2271.75,
                "sales_amount(SUM)1": 2271.75,
                "province1": "杜卡拉-阿卜达"
            },
            {
                "province0": "杜阿尔特省",
                "sales_amount(SUM)0": 5593.562680000001,
                "sales_amount(SUM)1": 5593.562680000001,
                "province1": "杜阿尔特省"
            },
            {
                "province0": "杰勒法",
                "sales_amount(SUM)0": 1518.7800000000002,
                "sales_amount(SUM)1": 1518.7800000000002,
                "province1": "杰勒法"
            },
            {
                "province0": "杰尔",
                "sales_amount(SUM)0": 4827.54,
                "sales_amount(SUM)1": 4827.54,
                "province1": "杰尔"
            },
            {
                "province0": "松索纳特",
                "sales_amount(SUM)0": 5715.758479999999,
                "sales_amount(SUM)1": 5715.758479999999,
                "province1": "松索纳特"
            },
            {
                "province0": "极北部",
                "sales_amount(SUM)0": 126.36000000000001,
                "sales_amount(SUM)1": 126.36000000000001,
                "province1": "极北部"
            },
            {
                "province0": "林堡",
                "sales_amount(SUM)0": 13167.047999999999,
                "sales_amount(SUM)1": 13167.047999999999,
                "province1": "林堡"
            },
            {
                "province0": "林波波",
                "sales_amount(SUM)0": 451.74,
                "sales_amount(SUM)1": 451.74,
                "province1": "林波波"
            },
            {
                "province0": "枥木县",
                "sales_amount(SUM)0": 384.41999999999996,
                "sales_amount(SUM)1": 384.41999999999996,
                "province1": "枥木县"
            },
            {
                "province0": "柏林",
                "sales_amount(SUM)0": 61917.8985,
                "sales_amount(SUM)1": 61917.8985,
                "province1": "柏林"
            },
            {
                "province0": "查瓜纳斯",
                "sales_amount(SUM)0": 1965.6090399999998,
                "sales_amount(SUM)1": 1965.6090399999998,
                "province1": "查瓜纳斯"
            },
            {
                "province0": "查科",
                "sales_amount(SUM)0": 3754.9384000000005,
                "sales_amount(SUM)1": 3754.9384000000005,
                "province1": "查科"
            },
            {
                "province0": "查谟和克什米尔邦",
                "sales_amount(SUM)0": 7969.079999999999,
                "sales_amount(SUM)1": 7969.079999999999,
                "province1": "查谟和克什米尔邦"
            },
            {
                "province0": "栋加",
                "sales_amount(SUM)0": 906,
                "sales_amount(SUM)1": 906,
                "province1": "栋加"
            },
            {
                "province0": "格拉玛",
                "sales_amount(SUM)0": 17002.53732,
                "sales_amount(SUM)1": 17002.53732,
                "province1": "格拉玛"
            },
            {
                "province0": "格拉纳达省",
                "sales_amount(SUM)0": 2366.81712,
                "sales_amount(SUM)1": 2366.81712,
                "province1": "格拉纳达省"
            },
            {
                "province0": "格罗宁根省",
                "sales_amount(SUM)0": 6405.870000000001,
                "sales_amount(SUM)1": 6405.870000000001,
                "province1": "格罗宁根省"
            },
            {
                "province0": "格雷罗",
                "sales_amount(SUM)0": 4759.99864,
                "sales_amount(SUM)1": 4759.99864,
                "province1": "格雷罗"
            },
            {
                "province0": "格鲁吉亚",
                "sales_amount(SUM)0": 49095.840000000004,
                "sales_amount(SUM)1": 49095.840000000004,
                "province1": "格鲁吉亚"
            },
            {
                "province0": "桑坦德",
                "sales_amount(SUM)0": 5573.1464000000005,
                "sales_amount(SUM)1": 5573.1464000000005,
                "province1": "桑坦德"
            },
            {
                "province0": "梅克伦堡-前波美拉尼亚州",
                "sales_amount(SUM)0": 12317.826,
                "sales_amount(SUM)1": 12317.826,
                "province1": "梅克伦堡-前波美拉尼亚州"
            },
            {
                "province0": "梅克内斯-塔菲拉勒特",
                "sales_amount(SUM)0": 7753.47,
                "sales_amount(SUM)1": 7753.47,
                "province1": "梅克内斯-塔菲拉勒特"
            },
            {
                "province0": "梅利利亚市",
                "sales_amount(SUM)0": 145.44,
                "sales_amount(SUM)1": 145.44,
                "province1": "梅利利亚市"
            },
            {
                "province0": "梅塔",
                "sales_amount(SUM)0": 82.84,
                "sales_amount(SUM)1": 82.84,
                "province1": "梅塔"
            },
            {
                "province0": "梅尔辛",
                "sales_amount(SUM)0": 2692.992,
                "sales_amount(SUM)1": 2692.992,
                "province1": "梅尔辛"
            },
            {
                "province0": "梅赫丁茨",
                "sales_amount(SUM)0": 417.51,
                "sales_amount(SUM)1": 417.51,
                "province1": "梅赫丁茨"
            },
            {
                "province0": "梅里达州",
                "sales_amount(SUM)0": 60.96,
                "sales_amount(SUM)1": 60.96,
                "province1": "梅里达州"
            },
            {
                "province0": "森美兰",
                "sales_amount(SUM)0": 6334.679999999999,
                "sales_amount(SUM)1": 6334.679999999999,
                "province1": "森美兰"
            },
            {
                "province0": "楚卡宗",
                "sales_amount(SUM)0": 164.07,
                "sales_amount(SUM)1": 164.07,
                "province1": "楚卡宗"
            },
            {
                "province0": "楠普拉",
                "sales_amount(SUM)0": 2312.49,
                "sales_amount(SUM)1": 2312.49,
                "province1": "楠普拉"
            },
            {
                "province0": "楠格哈尔",
                "sales_amount(SUM)0": 1159.95,
                "sales_amount(SUM)1": 1159.95,
                "province1": "楠格哈尔"
            },
            {
                "province0": "比亚克拉拉",
                "sales_amount(SUM)0": 13127.597640000002,
                "sales_amount(SUM)1": 13127.597640000002,
                "province1": "比亚克拉拉"
            },
            {
                "province0": "比什凯克",
                "sales_amount(SUM)0": 4189.2,
                "sales_amount(SUM)1": 4189.2,
                "province1": "比什凯克"
            },
            {
                "province0": "比哈尔邦",
                "sales_amount(SUM)0": 29143.499999999993,
                "sales_amount(SUM)1": 29143.499999999993,
                "province1": "比哈尔邦"
            },
            {
                "province0": "比奥比奥",
                "sales_amount(SUM)0": 2662.7534,
                "sales_amount(SUM)1": 2662.7534,
                "province1": "比奥比奥"
            },
            {
                "province0": "比托拉",
                "sales_amount(SUM)0": 10.98,
                "sales_amount(SUM)1": 10.98,
                "province1": "比托拉"
            },
            {
                "province0": "比斯特里察-讷瑟乌德",
                "sales_amount(SUM)0": 246.48,
                "sales_amount(SUM)1": 246.48,
                "province1": "比斯特里察-讷瑟乌德"
            },
            {
                "province0": "比绍区",
                "sales_amount(SUM)0": 2065.44,
                "sales_amount(SUM)1": 2065.44,
                "province1": "比绍区"
            },
            {
                "province0": "比耶",
                "sales_amount(SUM)0": 885.75,
                "sales_amount(SUM)1": 885.75,
                "province1": "比耶"
            },
            {
                "province0": "比那尔德里奥",
                "sales_amount(SUM)0": 13066.57728,
                "sales_amount(SUM)1": 13066.57728,
                "province1": "比那尔德里奥"
            },
            {
                "province0": "比霍尔",
                "sales_amount(SUM)0": 1031.55,
                "sales_amount(SUM)1": 1031.55,
                "province1": "比霍尔"
            },
            {
                "province0": "水库",
                "sales_amount(SUM)0": 1647.03,
                "sales_amount(SUM)1": 1647.03,
                "province1": "水库"
            },
            {
                "province0": "汉堡",
                "sales_amount(SUM)0": 40430.223,
                "sales_amount(SUM)1": 40430.223,
                "province1": "汉堡"
            },
            {
                "province0": "江原道",
                "sales_amount(SUM)0": 22.41,
                "sales_amount(SUM)1": 22.41,
                "province1": "江原道"
            },
            {
                "province0": "江布尔",
                "sales_amount(SUM)0": 22.05,
                "sales_amount(SUM)1": 22.05,
                "province1": "江布尔"
            },
            {
                "province0": "江苏省",
                "sales_amount(SUM)0": 55333.82399999998,
                "sales_amount(SUM)1": 55333.82399999998,
                "province1": "江苏省"
            },
            {
                "province0": "江西省",
                "sales_amount(SUM)0": 3358.9800000000005,
                "sales_amount(SUM)1": 3358.9800000000005,
                "province1": "江西省"
            },
            {
                "province0": "沃伦",
                "sales_amount(SUM)0": 5360.82,
                "sales_amount(SUM)1": 5360.82,
                "province1": "沃伦"
            },
            {
                "province0": "沃尔恰",
                "sales_amount(SUM)0": 1399.0500000000002,
                "sales_amount(SUM)1": 1399.0500000000002,
                "province1": "沃尔恰"
            },
            {
                "province0": "沃州",
                "sales_amount(SUM)0": 1787.5500000000002,
                "sales_amount(SUM)1": 1787.5500000000002,
                "province1": "沃州"
            },
            {
                "province0": "沃罗涅日河",
                "sales_amount(SUM)0": 4578.0599999999995,
                "sales_amount(SUM)1": 4578.0599999999995,
                "province1": "沃罗涅日河"
            },
            {
                "province0": "沙劳越",
                "sales_amount(SUM)0": 2043.87,
                "sales_amount(SUM)1": 2043.87,
                "province1": "沙劳越"
            },
            {
                "province0": "沙巴州",
                "sales_amount(SUM)0": 14890.95,
                "sales_amount(SUM)1": 14890.95,
                "province1": "沙巴州"
            },
            {
                "province0": "沙维雅-瓦拉迪格",
                "sales_amount(SUM)0": 1072.65,
                "sales_amount(SUM)1": 1072.65,
                "province1": "沙维雅-瓦拉迪格"
            },
            {
                "province0": "河内市",
                "sales_amount(SUM)0": 11054.374199999998,
                "sales_amount(SUM)1": 11054.374199999998,
                "province1": "河内市"
            },
            {
                "province0": "河北省",
                "sales_amount(SUM)0": 13674.426000000001,
                "sales_amount(SUM)1": 13674.426000000001,
                "province1": "河北省"
            },
            {
                "province0": "河南省",
                "sales_amount(SUM)0": 21232.730999999996,
                "sales_amount(SUM)1": 21232.730999999996,
                "province1": "河南省"
            },
            {
                "province0": "河口湾",
                "sales_amount(SUM)0": 1751.73,
                "sales_amount(SUM)1": 1751.73,
                "province1": "河口湾"
            },
            {
                "province0": "河流",
                "sales_amount(SUM)0": 3824.468999999999,
                "sales_amount(SUM)1": 3824.468999999999,
                "province1": "河流"
            },
            {
                "province0": "法兰德斯布拉班特",
                "sales_amount(SUM)0": 1641.2099999999998,
                "sales_amount(SUM)1": 1641.2099999999998,
                "province1": "法兰德斯布拉班特"
            },
            {
                "province0": "法兰西岛",
                "sales_amount(SUM)0": 317822.5439999998,
                "sales_amount(SUM)1": 317822.5439999998,
                "province1": "法兰西岛"
            },
            {
                "province0": "法尔斯",
                "sales_amount(SUM)0": 12002.160000000002,
                "sales_amount(SUM)1": 12002.160000000002,
                "province1": "法尔斯"
            },
            {
                "province0": "法尤姆",
                "sales_amount(SUM)0": 1164.42,
                "sales_amount(SUM)1": 1164.42,
                "province1": "法尤姆"
            },
            {
                "province0": "法属圭亚拉",
                "sales_amount(SUM)0": 224.06,
                "sales_amount(SUM)1": 224.06,
                "province1": "法属圭亚拉"
            },
            {
                "province0": "波哥大",
                "sales_amount(SUM)0": 21110.549759999998,
                "sales_amount(SUM)1": 21110.549759999998,
                "province1": "波哥大"
            },
            {
                "province0": "波图格萨",
                "sales_amount(SUM)0": 914.1120000000001,
                "sales_amount(SUM)1": 914.1120000000001,
                "province1": "波图格萨"
            },
            {
                "province0": "波尔图",
                "sales_amount(SUM)0": 1564.6799999999998,
                "sales_amount(SUM)1": 1564.6799999999998,
                "province1": "波尔图"
            },
            {
                "province0": "波尔塔瓦",
                "sales_amount(SUM)0": 8155.3499999999985,
                "sales_amount(SUM)1": 8155.3499999999985,
                "province1": "波尔塔瓦"
            },
            {
                "province0": "波德戈里察",
                "sales_amount(SUM)0": 4004.37,
                "sales_amount(SUM)1": 4004.37,
                "province1": "波德戈里察"
            },
            {
                "province0": "波德拉谢省",
                "sales_amount(SUM)0": 1042.95,
                "sales_amount(SUM)1": 1042.95,
                "province1": "波德拉谢省"
            },
            {
                "province0": "波托西",
                "sales_amount(SUM)0": 1557.8799999999999,
                "sales_amount(SUM)1": 1557.8799999999999,
                "province1": "波托西"
            },
            {
                "province0": "波斯尼亚和黑塞哥维那联邦",
                "sales_amount(SUM)0": 2599.26,
                "sales_amount(SUM)1": 2599.26,
                "province1": "波斯尼亚和黑塞哥维那联邦"
            },
            {
                "province0": "波美拉尼亚",
                "sales_amount(SUM)0": 6560.730000000001,
                "sales_amount(SUM)1": 6560.730000000001,
                "province1": "波美拉尼亚"
            },
            {
                "province0": "泰伦加纳邦",
                "sales_amount(SUM)0": 15921.750000000005,
                "sales_amount(SUM)1": 15921.750000000005,
                "province1": "泰伦加纳邦"
            },
            {
                "province0": "泰基尔达",
                "sales_amount(SUM)0": 1160.0159999999998,
                "sales_amount(SUM)1": 1160.0159999999998,
                "province1": "泰基尔达"
            },
            {
                "province0": "泰布克",
                "sales_amount(SUM)0": 5047.95,
                "sales_amount(SUM)1": 5047.95,
                "province1": "泰布克"
            },
            {
                "province0": "泰米尔纳德邦",
                "sales_amount(SUM)0": 51911.45999999999,
                "sales_amount(SUM)1": 51911.45999999999,
                "province1": "泰米尔纳德邦"
            },
            {
                "province0": "泽兰",
                "sales_amount(SUM)0": 208.44,
                "sales_amount(SUM)1": 208.44,
                "province1": "泽兰"
            },
            {
                "province0": "洛斯里奥斯",
                "sales_amount(SUM)0": 972.81048,
                "sales_amount(SUM)1": 972.81048,
                "province1": "洛斯里奥斯"
            },
            {
                "province0": "洛里",
                "sales_amount(SUM)0": 156.75,
                "sales_amount(SUM)1": 156.75,
                "province1": "洛里"
            },
            {
                "province0": "洛雷托",
                "sales_amount(SUM)0": 438.71999999999997,
                "sales_amount(SUM)1": 438.71999999999997,
                "province1": "洛雷托"
            },
            {
                "province0": "洛雷斯坦",
                "sales_amount(SUM)0": 9295.41,
                "sales_amount(SUM)1": 9295.41,
                "province1": "洛雷斯坦"
            },
            {
                "province0": "津德尔",
                "sales_amount(SUM)0": 362.73,
                "sales_amount(SUM)1": 362.73,
                "province1": "津德尔"
            },
            {
                "province0": "派桑杜",
                "sales_amount(SUM)0": 3473.14,
                "sales_amount(SUM)1": 3473.14,
                "province1": "派桑杜"
            },
            {
                "province0": "济加尔",
                "sales_amount(SUM)0": 530.91,
                "sales_amount(SUM)1": 530.91,
                "province1": "济加尔"
            },
            {
                "province0": "济州",
                "sales_amount(SUM)0": 621.48,
                "sales_amount(SUM)1": 621.48,
                "province1": "济州"
            },
            {
                "province0": "济金绍尔",
                "sales_amount(SUM)0": 617.43,
                "sales_amount(SUM)1": 617.43,
                "province1": "济金绍尔"
            },
            {
                "province0": "浙江省",
                "sales_amount(SUM)0": 26953.355999999996,
                "sales_amount(SUM)1": 26953.355999999996,
                "province1": "浙江省"
            },
            {
                "province0": "海南省",
                "sales_amount(SUM)0": 4078.7129999999997,
                "sales_amount(SUM)1": 4078.7129999999997,
                "province1": "海南省"
            },
            {
                "province0": "海尔德兰",
                "sales_amount(SUM)0": 4768.845,
                "sales_amount(SUM)1": 4768.845,
                "province1": "海尔德兰"
            },
            {
                "province0": "海德马克",
                "sales_amount(SUM)0": 269.31,
                "sales_amount(SUM)1": 269.31,
                "province1": "海德马克"
            },
            {
                "province0": "海法区",
                "sales_amount(SUM)0": 3028.29,
                "sales_amount(SUM)1": 3028.29,
                "province1": "海法区"
            },
            {
                "province0": "湖北省",
                "sales_amount(SUM)0": 26638.35000000001,
                "sales_amount(SUM)1": 26638.35000000001,
                "province1": "湖北省"
            },
            {
                "province0": "湖南省",
                "sales_amount(SUM)0": 20400.599999999995,
                "sales_amount(SUM)1": 20400.599999999995,
                "province1": "湖南省"
            },
            {
                "province0": "湖大区",
                "sales_amount(SUM)0": 3431.5599999999995,
                "sales_amount(SUM)1": 3431.5599999999995,
                "province1": "湖大区"
            },
            {
                "province0": "滨海",
                "sales_amount(SUM)0": 7342.890000000004,
                "sales_amount(SUM)1": 7342.890000000004,
                "province1": "滨海"
            },
            {
                "province0": "滨海区",
                "sales_amount(SUM)0": 3250.4400000000005,
                "sales_amount(SUM)1": 3250.4400000000005,
                "province1": "滨海区"
            },
            {
                "province0": "滨海和山区",
                "sales_amount(SUM)0": 380.76,
                "sales_amount(SUM)1": 380.76,
                "province1": "滨海和山区"
            },
            {
                "province0": "潟湖",
                "sales_amount(SUM)0": 15525.36,
                "sales_amount(SUM)1": 15525.36,
                "province1": "潟湖"
            },
            {
                "province0": "澳大利亚首都领地",
                "sales_amount(SUM)0": 33162.810000000005,
                "sales_amount(SUM)1": 33162.810000000005,
                "province1": "澳大利亚首都领地"
            },
            {
                "province0": "焦夫",
                "sales_amount(SUM)0": 3165.8399999999997,
                "sales_amount(SUM)1": 3165.8399999999997,
                "province1": "焦夫"
            },
            {
                "province0": "爱尔巴桑",
                "sales_amount(SUM)0": 1619.1,
                "sales_amount(SUM)1": 1619.1,
                "province1": "爱尔巴桑"
            },
            {
                "province0": "爱知县",
                "sales_amount(SUM)0": 1596.7200000000003,
                "sales_amount(SUM)1": 1596.7200000000003,
                "province1": "爱知县"
            },
            {
                "province0": "爱达荷州",
                "sales_amount(SUM)0": 4382.486000000002,
                "sales_amount(SUM)1": 4382.486000000002,
                "province1": "爱达荷州"
            },
            {
                "province0": "特伦蒂洛-上阿迪杰",
                "sales_amount(SUM)0": 4169.124000000001,
                "sales_amount(SUM)1": 4169.124000000001,
                "province1": "特伦蒂洛-上阿迪杰"
            },
            {
                "province0": "特拉华州",
                "sales_amount(SUM)0": 27451.068999999992,
                "sales_amount(SUM)1": 27451.068999999992,
                "province1": "特拉华州"
            },
            {
                "province0": "特拉布宗",
                "sales_amount(SUM)0": 1313.52,
                "sales_amount(SUM)1": 1313.52,
                "province1": "特拉布宗"
            },
            {
                "province0": "特拉维夫",
                "sales_amount(SUM)0": 6810.660000000001,
                "sales_amount(SUM)1": 6810.660000000001,
                "province1": "特拉维夫"
            },
            {
                "province0": "特莱姆森",
                "sales_amount(SUM)0": 84.72,
                "sales_amount(SUM)1": 84.72,
                "province1": "特莱姆森"
            },
            {
                "province0": "特里普拉邦",
                "sales_amount(SUM)0": 646.29,
                "sales_amount(SUM)1": 646.29,
                "province1": "特里普拉邦"
            },
            {
                "province0": "犹他州",
                "sales_amount(SUM)0": 11220.055999999999,
                "sales_amount(SUM)1": 11220.055999999999,
                "province1": "犹他州"
            },
            {
                "province0": "犹太自治州",
                "sales_amount(SUM)0": 244.08,
                "sales_amount(SUM)1": 244.08,
                "province1": "犹太自治州"
            },
            {
                "province0": "玛格达莱纳",
                "sales_amount(SUM)0": 3109.8761600000003,
                "sales_amount(SUM)1": 3109.8761600000003,
                "province1": "玛格达莱纳"
            },
            {
                "province0": "玛雅贝克",
                "sales_amount(SUM)0": 7073.8732,
                "sales_amount(SUM)1": 7073.8732,
                "province1": "玛雅贝克"
            },
            {
                "province0": "玻利瓦尔",
                "sales_amount(SUM)0": 1429.836,
                "sales_amount(SUM)1": 1429.836,
                "province1": "玻利瓦尔"
            },
            {
                "province0": "玻利瓦尔州",
                "sales_amount(SUM)0": 2820.9479199999996,
                "sales_amount(SUM)1": 2820.9479199999996,
                "province1": "玻利瓦尔州"
            },
            {
                "province0": "班加西",
                "sales_amount(SUM)0": 3825.780000000001,
                "sales_amount(SUM)1": 3825.780000000001,
                "province1": "班加西"
            },
            {
                "province0": "班吉",
                "sales_amount(SUM)0": 2377.5600000000004,
                "sales_amount(SUM)1": 2377.5600000000004,
                "province1": "班吉"
            },
            {
                "province0": "班斯卡-比斯特里察",
                "sales_amount(SUM)0": 62.61,
                "sales_amount(SUM)1": 62.61,
                "province1": "班斯卡-比斯特里察"
            },
            {
                "province0": "班顿杜省",
                "sales_amount(SUM)0": 1610.8500000000001,
                "sales_amount(SUM)1": 1610.8500000000001,
                "province1": "班顿杜省"
            },
            {
                "province0": "瓜亚斯",
                "sales_amount(SUM)0": 3742.079999999999,
                "sales_amount(SUM)1": 3742.079999999999,
                "province1": "瓜亚斯"
            },
            {
                "province0": "瓜德罗普岛",
                "sales_amount(SUM)0": 1461.6399999999999,
                "sales_amount(SUM)1": 1461.6399999999999,
                "province1": "瓜德罗普岛"
            },
            {
                "province0": "瓜纳华托州",
                "sales_amount(SUM)0": 36886.41427999998,
                "sales_amount(SUM)1": 36886.41427999998,
                "province1": "瓜纳华托州"
            },
            {
                "province0": "瓜纳卡斯特",
                "sales_amount(SUM)0": 962.852,
                "sales_amount(SUM)1": 962.852,
                "province1": "瓜纳卡斯特"
            },
            {
                "province0": "瓜里科",
                "sales_amount(SUM)0": 920.1454000000001,
                "sales_amount(SUM)1": 920.1454000000001,
                "province1": "瓜里科"
            },
            {
                "province0": "瓦哈卡",
                "sales_amount(SUM)0": 607.48,
                "sales_amount(SUM)1": 607.48,
                "province1": "瓦哈卡"
            },
            {
                "province0": "瓦尔加斯",
                "sales_amount(SUM)0": 534.876,
                "sales_amount(SUM)1": 534.876,
                "province1": "瓦尔加斯"
            },
            {
                "province0": "瓦尔帕莱索",
                "sales_amount(SUM)0": 2056.5,
                "sales_amount(SUM)1": 2056.5,
                "province1": "瓦尔帕莱索"
            },
            {
                "province0": "瓦尔纳州",
                "sales_amount(SUM)0": 2393.0699999999997,
                "sales_amount(SUM)1": 2393.0699999999997,
                "province1": "瓦尔纳州"
            },
            {
                "province0": "甘肃省",
                "sales_amount(SUM)0": 14270.286,
                "sales_amount(SUM)1": 14270.286,
                "province1": "甘肃省"
            },
            {
                "province0": "田纳西州",
                "sales_amount(SUM)0": 30661.87299999998,
                "sales_amount(SUM)1": 30661.87299999998,
                "province1": "田纳西州"
            },
            {
                "province0": "甲拉巴松区",
                "sales_amount(SUM)0": 16390.215,
                "sales_amount(SUM)1": 16390.215,
                "province1": "甲拉巴松区"
            },
            {
                "province0": "白尼罗",
                "sales_amount(SUM)0": 784.1099999999999,
                "sales_amount(SUM)1": 784.1099999999999,
                "province1": "白尼罗"
            },
            {
                "province0": "皮乌拉",
                "sales_amount(SUM)0": 353.28,
                "sales_amount(SUM)1": 353.28,
                "province1": "皮乌拉"
            },
            {
                "province0": "皮埃蒙特",
                "sales_amount(SUM)0": 24949.39500000001,
                "sales_amount(SUM)1": 24949.39500000001,
                "province1": "皮埃蒙特"
            },
            {
                "province0": "皮奥伊",
                "sales_amount(SUM)0": 1359.5907599999998,
                "sales_amount(SUM)1": 1359.5907599999998,
                "province1": "皮奥伊"
            },
            {
                "province0": "皮尔森",
                "sales_amount(SUM)0": 1332.99,
                "sales_amount(SUM)1": 1332.99,
                "province1": "皮尔森"
            },
            {
                "province0": "皮钦查",
                "sales_amount(SUM)0": 7021.55788,
                "sales_amount(SUM)1": 7021.55788,
                "province1": "皮钦查"
            },
            {
                "province0": "盖勒马",
                "sales_amount(SUM)0": 3703.11,
                "sales_amount(SUM)1": 3703.11,
                "province1": "盖勒马"
            },
            {
                "province0": "石勒苏益格-赫尔斯泰因",
                "sales_amount(SUM)0": 6278.058,
                "sales_amount(SUM)1": 6278.058,
                "province1": "石勒苏益格-赫尔斯泰因"
            },
            {
                "province0": "石川县",
                "sales_amount(SUM)0": 3081.42,
                "sales_amount(SUM)1": 3081.42,
                "province1": "石川县"
            },
            {
                "province0": "神奈川",
                "sales_amount(SUM)0": 6252.99,
                "sales_amount(SUM)1": 6252.99,
                "province1": "神奈川"
            },
            {
                "province0": "福井县",
                "sales_amount(SUM)0": 620.6400000000001,
                "sales_amount(SUM)1": 620.6400000000001,
                "province1": "福井县"
            },
            {
                "province0": "福冈",
                "sales_amount(SUM)0": 1463.6100000000001,
                "sales_amount(SUM)1": 1463.6100000000001,
                "province1": "福冈"
            },
            {
                "province0": "福建省",
                "sales_amount(SUM)0": 20524.53,
                "sales_amount(SUM)1": 20524.53,
                "province1": "福建省"
            },
            {
                "province0": "科克",
                "sales_amount(SUM)0": 4993.71,
                "sales_amount(SUM)1": 4993.71,
                "province1": "科克"
            },
            {
                "province0": "科利马州",
                "sales_amount(SUM)0": 6179.28876,
                "sales_amount(SUM)1": 6179.28876,
                "province1": "科利马州"
            },
            {
                "province0": "科威特",
                "sales_amount(SUM)0": 1094.22,
                "sales_amount(SUM)1": 1094.22,
                "province1": "科威特"
            },
            {
                "province0": "科尔多瓦",
                "sales_amount(SUM)0": 3234.5312000000004,
                "sales_amount(SUM)1": 3234.5312000000004,
                "province1": "科尔多瓦"
            },
            {
                "province0": "科尔察",
                "sales_amount(SUM)0": 77.16,
                "sales_amount(SUM)1": 77.16,
                "province1": "科尔察"
            },
            {
                "province0": "科尔特斯",
                "sales_amount(SUM)0": 26200.353919999994,
                "sales_amount(SUM)1": 26200.353919999994,
                "province1": "科尔特斯"
            },
            {
                "province0": "科尼亚",
                "sales_amount(SUM)0": 945.204,
                "sales_amount(SUM)1": 945.204,
                "province1": "科尼亚"
            },
            {
                "province0": "科恰班巴省",
                "sales_amount(SUM)0": 1184.6799999999998,
                "sales_amount(SUM)1": 1184.6799999999998,
                "province1": "科恰班巴省"
            },
            {
                "province0": "科罗拉多",
                "sales_amount(SUM)0": 32108.117999999995,
                "sales_amount(SUM)1": 32108.117999999995,
                "province1": "科罗拉多"
            },
            {
                "province0": "科英布拉",
                "sales_amount(SUM)0": 1896.03,
                "sales_amount(SUM)1": 1896.03,
                "province1": "科英布拉"
            },
            {
                "province0": "科西嘉岛",
                "sales_amount(SUM)0": 1276.197,
                "sales_amount(SUM)1": 1276.197,
                "province1": "科西嘉岛"
            },
            {
                "province0": "科贾埃利",
                "sales_amount(SUM)0": 727.428,
                "sales_amount(SUM)1": 727.428,
                "province1": "科贾埃利"
            },
            {
                "province0": "科赫德斯",
                "sales_amount(SUM)0": 114.06,
                "sales_amount(SUM)1": 114.06,
                "province1": "科赫德斯"
            },
            {
                "province0": "科连特斯",
                "sales_amount(SUM)0": 945.7488800000001,
                "sales_amount(SUM)1": 945.7488800000001,
                "province1": "科连特斯"
            },
            {
                "province0": "科迪勒拉区",
                "sales_amount(SUM)0": 5740.521,
                "sales_amount(SUM)1": 5740.521,
                "province1": "科迪勒拉区"
            },
            {
                "province0": "科阿韦拉州",
                "sales_amount(SUM)0": 23253.002199999995,
                "sales_amount(SUM)1": 23253.002199999995,
                "province1": "科阿韦拉州"
            },
            {
                "province0": "科隆",
                "sales_amount(SUM)0": 2974.7880000000005,
                "sales_amount(SUM)1": 2974.7880000000005,
                "province1": "科隆"
            },
            {
                "province0": "穆列什",
                "sales_amount(SUM)0": 1851.63,
                "sales_amount(SUM)1": 1851.63,
                "province1": "穆列什"
            },
            {
                "province0": "穆哈拉格",
                "sales_amount(SUM)0": 669.18,
                "sales_amount(SUM)1": 669.18,
                "province1": "穆哈拉格"
            },
            {
                "province0": "穆尔西亚",
                "sales_amount(SUM)0": 10665.318000000005,
                "sales_amount(SUM)1": 10665.318000000005,
                "province1": "穆尔西亚"
            },
            {
                "province0": "穆斯塔加奈姆",
                "sales_amount(SUM)0": 439.92,
                "sales_amount(SUM)1": 439.92,
                "province1": "穆斯塔加奈姆"
            },
            {
                "province0": "突尼斯省",
                "sales_amount(SUM)0": 1760.79,
                "sales_amount(SUM)1": 1760.79,
                "province1": "突尼斯省"
            },
            {
                "province0": "第亚那",
                "sales_amount(SUM)0": 587.88,
                "sales_amount(SUM)1": 587.88,
                "province1": "第亚那"
            },
            {
                "province0": "第比利斯市",
                "sales_amount(SUM)0": 3265.1099999999997,
                "sales_amount(SUM)1": 3265.1099999999997,
                "province1": "第比利斯市"
            },
            {
                "province0": "第聂伯罗彼得罗夫斯克",
                "sales_amount(SUM)0": 13899.18,
                "sales_amount(SUM)1": 13899.18,
                "province1": "第聂伯罗彼得罗夫斯克"
            },
            {
                "province0": "米兰达",
                "sales_amount(SUM)0": 2250.7194,
                "sales_amount(SUM)1": 2250.7194,
                "province1": "米兰达"
            },
            {
                "province0": "米努夫",
                "sales_amount(SUM)0": 311.25,
                "sales_amount(SUM)1": 311.25,
                "province1": "米努夫"
            },
            {
                "province0": "米却肯州",
                "sales_amount(SUM)0": 24566.087959999993,
                "sales_amount(SUM)1": 24566.087959999993,
                "province1": "米却肯州"
            },
            {
                "province0": "米纳斯吉拉斯",
                "sales_amount(SUM)0": 32651.181840000012,
                "sales_amount(SUM)1": 32651.181840000012,
                "province1": "米纳斯吉拉斯"
            },
            {
                "province0": "米苏拉塔",
                "sales_amount(SUM)0": 3914.88,
                "sales_amount(SUM)1": 3914.88,
                "province1": "米苏拉塔"
            },
            {
                "province0": "米西奥内斯",
                "sales_amount(SUM)0": 306.42,
                "sales_amount(SUM)1": 306.42,
                "province1": "米西奥内斯"
            },
            {
                "province0": "索哈杰",
                "sales_amount(SUM)0": 4633.05,
                "sales_amount(SUM)1": 4633.05,
                "province1": "索哈杰"
            },
            {
                "province0": "索法拉",
                "sales_amount(SUM)0": 3357.120000000001,
                "sales_amount(SUM)1": 3357.120000000001,
                "province1": "索法拉"
            },
            {
                "province0": "索科托",
                "sales_amount(SUM)0": 85.653,
                "sales_amount(SUM)1": 85.653,
                "province1": "索科托"
            },
            {
                "province0": "索诺拉州",
                "sales_amount(SUM)0": 13994.537440000002,
                "sales_amount(SUM)1": 13994.537440000002,
                "province1": "索诺拉州"
            },
            {
                "province0": "索非亚市",
                "sales_amount(SUM)0": 8106.089999999999,
                "sales_amount(SUM)1": 8106.089999999999,
                "province1": "索非亚市"
            },
            {
                "province0": "红海",
                "sales_amount(SUM)0": 5857.740000000001,
                "sales_amount(SUM)1": 5857.740000000001,
                "province1": "红海"
            },
            {
                "province0": "约兹罗",
                "sales_amount(SUM)0": 2422.1099999999997,
                "sales_amount(SUM)1": 2422.1099999999997,
                "province1": "约兹罗"
            },
            {
                "province0": "约罗",
                "sales_amount(SUM)0": 1873.6825600000004,
                "sales_amount(SUM)1": 1873.6825600000004,
                "province1": "约罗"
            },
            {
                "province0": "约贝",
                "sales_amount(SUM)0": 516.06,
                "sales_amount(SUM)1": 516.06,
                "province1": "约贝"
            },
            {
                "province0": "纳亚里特",
                "sales_amount(SUM)0": 8047.389679999999,
                "sales_amount(SUM)1": 8047.389679999999,
                "province1": "纳亚里特"
            },
            {
                "province0": "纳尔逊",
                "sales_amount(SUM)0": 2859.209999999999,
                "sales_amount(SUM)1": 2859.209999999999,
                "province1": "纳尔逊"
            },
            {
                "province0": "纳瓦拉",
                "sales_amount(SUM)0": 4608.186000000001,
                "sales_amount(SUM)1": 4608.186000000001,
                "province1": "纳瓦拉"
            },
            {
                "province0": "纳米贝省",
                "sales_amount(SUM)0": 63.42,
                "sales_amount(SUM)1": 63.42,
                "province1": "纳米贝省"
            },
            {
                "province0": "纳里尼奥",
                "sales_amount(SUM)0": 578.26,
                "sales_amount(SUM)1": 578.26,
                "province1": "纳里尼奥"
            },
            {
                "province0": "纽约州",
                "sales_amount(SUM)0": 310876.2709999998,
                "sales_amount(SUM)1": 310876.2709999998,
                "province1": "纽约州"
            },
            {
                "province0": "纽芬兰",
                "sales_amount(SUM)0": 102.84,
                "sales_amount(SUM)1": 102.84,
                "province1": "纽芬兰"
            },
            {
                "province0": "维也纳",
                "sales_amount(SUM)0": 62023.53000000002,
                "sales_amount(SUM)1": 62023.53000000002,
                "province1": "维也纳"
            },
            {
                "province0": "维多利亚",
                "sales_amount(SUM)0": 151785.03000000003,
                "sales_amount(SUM)1": 151785.03000000003,
                "province1": "维多利亚"
            },
            {
                "province0": "维尔纽斯",
                "sales_amount(SUM)0": 3276.1530000000002,
                "sales_amount(SUM)1": 3276.1530000000002,
                "province1": "维尔纽斯"
            },
            {
                "province0": "维捷布斯克",
                "sales_amount(SUM)0": 978.99,
                "sales_amount(SUM)1": 978.99,
                "province1": "维捷布斯克"
            },
            {
                "province0": "缅因州",
                "sales_amount(SUM)0": 1270.5300000000002,
                "sales_amount(SUM)1": 1270.5300000000002,
                "province1": "缅因州"
            },
            {
                "province0": "罗兹",
                "sales_amount(SUM)0": 3264.8700000000003,
                "sales_amount(SUM)1": 3264.8700000000003,
                "province1": "罗兹"
            },
            {
                "province0": "罗加兰",
                "sales_amount(SUM)0": 2904.8999999999996,
                "sales_amount(SUM)1": 2904.8999999999996,
                "province1": "罗加兰"
            },
            {
                "province0": "罗安达",
                "sales_amount(SUM)0": 14679.599999999999,
                "sales_amount(SUM)1": 14679.599999999999,
                "province1": "罗安达"
            },
            {
                "province0": "罗德岛",
                "sales_amount(SUM)0": 22627.955999999995,
                "sales_amount(SUM)1": 22627.955999999995,
                "province1": "罗德岛"
            },
            {
                "province0": "罗赖马",
                "sales_amount(SUM)0": 1386.2773599999998,
                "sales_amount(SUM)1": 1386.2773599999998,
                "province1": "罗赖马"
            },
            {
                "province0": "群马县",
                "sales_amount(SUM)0": 3566.6849999999995,
                "sales_amount(SUM)1": 3566.6849999999995,
                "province1": "群马县"
            },
            {
                "province0": "翁多",
                "sales_amount(SUM)0": 280.75500000000005,
                "sales_amount(SUM)1": 280.75500000000005,
                "province1": "翁多"
            },
            {
                "province0": "翁布里亚",
                "sales_amount(SUM)0": 1982.6279999999997,
                "sales_amount(SUM)1": 1982.6279999999997,
                "province1": "翁布里亚"
            },
            {
                "province0": "考卡河谷",
                "sales_amount(SUM)0": 1427.2,
                "sales_amount(SUM)1": 1427.2,
                "province1": "考卡河谷"
            },
            {
                "province0": "考纳斯",
                "sales_amount(SUM)0": 1757.637,
                "sales_amount(SUM)1": 1757.637,
                "province1": "考纳斯"
            },
            {
                "province0": "耶路撒冷",
                "sales_amount(SUM)0": 3576.8399999999997,
                "sales_amount(SUM)1": 3576.8399999999997,
                "province1": "耶路撒冷"
            },
            {
                "province0": "联邦区",
                "sales_amount(SUM)0": 141067.2505599999,
                "sales_amount(SUM)1": 141067.2505599999,
                "province1": "联邦区"
            },
            {
                "province0": "联邦首都区",
                "sales_amount(SUM)0": 8571.428800000002,
                "sales_amount(SUM)1": 8571.428800000002,
                "province1": "联邦首都区"
            },
            {
                "province0": "肯塔基",
                "sales_amount(SUM)0": 36591.74999999997,
                "sales_amount(SUM)1": 36591.74999999997,
                "province1": "肯塔基"
            },
            {
                "province0": "胡内多阿拉",
                "sales_amount(SUM)0": 218.34,
                "sales_amount(SUM)1": 218.34,
                "province1": "胡内多阿拉"
            },
            {
                "province0": "胡宁",
                "sales_amount(SUM)0": 863.52,
                "sales_amount(SUM)1": 863.52,
                "province1": "胡宁"
            },
            {
                "province0": "胡志明市",
                "sales_amount(SUM)0": 42670.048799999975,
                "sales_amount(SUM)1": 42670.048799999975,
                "province1": "胡志明市"
            },
            {
                "province0": "胡胡伊",
                "sales_amount(SUM)0": 315.82800000000003,
                "sales_amount(SUM)1": 315.82800000000003,
                "province1": "胡胡伊"
            },
            {
                "province0": "胡齐斯坦",
                "sales_amount(SUM)0": 7752.45,
                "sales_amount(SUM)1": 7752.45,
                "province1": "胡齐斯坦"
            },
            {
                "province0": "膝部",
                "sales_amount(SUM)0": 12796.915640000001,
                "sales_amount(SUM)1": 12796.915640000001,
                "province1": "膝部"
            },
            {
                "province0": "自由邦省",
                "sales_amount(SUM)0": 420.93,
                "sales_amount(SUM)1": 420.93,
                "province1": "自由邦省"
            },
            {
                "province0": "舒门州",
                "sales_amount(SUM)0": 1272.6,
                "sales_amount(SUM)1": 1272.6,
                "province1": "舒门州"
            },
            {
                "province0": "艾奥瓦",
                "sales_amount(SUM)0": 4579.759999999999,
                "sales_amount(SUM)1": 4579.759999999999,
                "province1": "艾奥瓦"
            },
            {
                "province0": "艾拉泽",
                "sales_amount(SUM)0": 522.852,
                "sales_amount(SUM)1": 522.852,
                "province1": "艾拉泽"
            },
            {
                "province0": "艾斯尤特",
                "sales_amount(SUM)0": 337.49999999999994,
                "sales_amount(SUM)1": 337.49999999999994,
                "province1": "艾斯尤特"
            },
            {
                "province0": "艾格瓦特",
                "sales_amount(SUM)0": 798.69,
                "sales_amount(SUM)1": 798.69,
                "province1": "艾格瓦特"
            },
            {
                "province0": "艾登",
                "sales_amount(SUM)0": 1165.596,
                "sales_amount(SUM)1": 1165.596,
                "province1": "艾登"
            },
            {
                "province0": "艾米利亚-罗马涅",
                "sales_amount(SUM)0": 26286.492000000002,
                "sales_amount(SUM)1": 26286.492000000002,
                "province1": "艾米利亚-罗马涅"
            },
            {
                "province0": "芒杜尔",
                "sales_amount(SUM)0": 1317.03,
                "sales_amount(SUM)1": 1317.03,
                "province1": "芒杜尔"
            },
            {
                "province0": "花拉子模",
                "sales_amount(SUM)0": 1124.1,
                "sales_amount(SUM)1": 1124.1,
                "province1": "花拉子模"
            },
            {
                "province0": "芹苴",
                "sales_amount(SUM)0": 1983.1797000000001,
                "sales_amount(SUM)1": 1983.1797000000001,
                "province1": "芹苴"
            },
            {
                "province0": "苏克雷省",
                "sales_amount(SUM)0": 173.68800000000002,
                "sales_amount(SUM)1": 173.68800000000002,
                "province1": "苏克雷省"
            },
            {
                "province0": "苏利亚",
                "sales_amount(SUM)0": 4208.936959999998,
                "sales_amount(SUM)1": 4208.936959999998,
                "province1": "苏利亚"
            },
            {
                "province0": "苏尔汉河",
                "sales_amount(SUM)0": 2366.16,
                "sales_amount(SUM)1": 2366.16,
                "province1": "苏尔汉河"
            },
            {
                "province0": "苏恰瓦河",
                "sales_amount(SUM)0": 62.129999999999995,
                "sales_amount(SUM)1": 62.129999999999995,
                "province1": "苏恰瓦河"
            },
            {
                "province0": "苏斯-马萨-德拉",
                "sales_amount(SUM)0": 1580.1,
                "sales_amount(SUM)1": 1580.1,
                "province1": "苏斯-马萨-德拉"
            },
            {
                "province0": "苏格兰",
                "sales_amount(SUM)0": 32537.601,
                "sales_amount(SUM)1": 32537.601,
                "province1": "苏格兰"
            },
            {
                "province0": "苏梅",
                "sales_amount(SUM)0": 1925.49,
                "sales_amount(SUM)1": 1925.49,
                "province1": "苏梅"
            },
            {
                "province0": "苏黎世",
                "sales_amount(SUM)0": 11707.739999999998,
                "sales_amount(SUM)1": 11707.739999999998,
                "province1": "苏黎世"
            },
            {
                "province0": "英格兰",
                "sales_amount(SUM)0": 485170.97099999926,
                "sales_amount(SUM)1": 485170.97099999926,
                "province1": "英格兰"
            },
            {
                "province0": "茨城县",
                "sales_amount(SUM)0": 1594.725,
                "sales_amount(SUM)1": 1594.725,
                "province1": "茨城县"
            },
            {
                "province0": "荷台达",
                "sales_amount(SUM)0": 78.97500000000001,
                "sales_amount(SUM)1": 78.97500000000001,
                "province1": "荷台达"
            },
            {
                "province0": "莫克瓜",
                "sales_amount(SUM)0": 287.16,
                "sales_amount(SUM)1": 287.16,
                "province1": "莫克瓜"
            },
            {
                "province0": "莫斯科",
                "sales_amount(SUM)0": 632.52,
                "sales_amount(SUM)1": 632.52,
                "province1": "莫斯科"
            },
            {
                "province0": "莫普提区",
                "sales_amount(SUM)0": 289.02000000000004,
                "sales_amount(SUM)1": 289.02000000000004,
                "province1": "莫普提区"
            },
            {
                "province0": "莫纳加斯",
                "sales_amount(SUM)0": 507.81312,
                "sales_amount(SUM)1": 507.81312,
                "province1": "莫纳加斯"
            },
            {
                "province0": "莫罗戈罗",
                "sales_amount(SUM)0": 159.32999999999998,
                "sales_amount(SUM)1": 159.32999999999998,
                "province1": "莫罗戈罗"
            },
            {
                "province0": "莫诺",
                "sales_amount(SUM)0": 44.099999999999994,
                "sales_amount(SUM)1": 44.099999999999994,
                "province1": "莫诺"
            },
            {
                "province0": "莫雷洛斯",
                "sales_amount(SUM)0": 7518.9276,
                "sales_amount(SUM)1": 7518.9276,
                "province1": "莫雷洛斯"
            },
            {
                "province0": "莱昂省",
                "sales_amount(SUM)0": 17110.512639999997,
                "sales_amount(SUM)1": 17110.512639999997,
                "province1": "莱昂省"
            },
            {
                "province0": "莱茵兰-普法尔茨州",
                "sales_amount(SUM)0": 25552.257000000005,
                "sales_amount(SUM)1": 25552.257000000005,
                "province1": "莱茵兰-普法尔茨州"
            },
            {
                "province0": "萨克森-安哈尔特州",
                "sales_amount(SUM)0": 8850.408,
                "sales_amount(SUM)1": 8850.408,
                "province1": "萨克森-安哈尔特州"
            },
            {
                "province0": "萨克森州",
                "sales_amount(SUM)0": 18404.364,
                "sales_amount(SUM)1": 18404.364,
                "province1": "萨克森州"
            },
            {
                "province0": "萨卡特卡斯",
                "sales_amount(SUM)0": 1466.912,
                "sales_amount(SUM)1": 1466.912,
                "province1": "萨卡特卡斯"
            },
            {
                "province0": "萨图马雷",
                "sales_amount(SUM)0": 1118.76,
                "sales_amount(SUM)1": 1118.76,
                "province1": "萨图马雷"
            },
            {
                "province0": "萨姆松",
                "sales_amount(SUM)0": 399.048,
                "sales_amount(SUM)1": 399.048,
                "province1": "萨姆松"
            },
            {
                "province0": "萨尔兰州",
                "sales_amount(SUM)0": 2560.3619999999996,
                "sales_amount(SUM)1": 2560.3619999999996,
                "province1": "萨尔兰州"
            },
            {
                "province0": "萨尔特",
                "sales_amount(SUM)0": 232.662,
                "sales_amount(SUM)1": 232.662,
                "province1": "萨尔特"
            },
            {
                "province0": "萨尔茨堡州",
                "sales_amount(SUM)0": 1685.73,
                "sales_amount(SUM)1": 1685.73,
                "province1": "萨尔茨堡州"
            },
            {
                "province0": "萨拉赫丁省",
                "sales_amount(SUM)0": 678.66,
                "sales_amount(SUM)1": 678.66,
                "province1": "萨拉赫丁省"
            },
            {
                "province0": "萨斯喀彻温省",
                "sales_amount(SUM)0": 1955.5800000000004,
                "sales_amount(SUM)1": 1955.5800000000004,
                "province1": "萨斯喀彻温省"
            },
            {
                "province0": "萨格勒布市",
                "sales_amount(SUM)0": 3084.8699999999994,
                "sales_amount(SUM)1": 3084.8699999999994,
                "province1": "萨格勒布市"
            },
            {
                "province0": "萨瓦内",
                "sales_amount(SUM)0": 238.62,
                "sales_amount(SUM)1": 238.62,
                "province1": "萨瓦内"
            },
            {
                "province0": "蒂巴扎",
                "sales_amount(SUM)0": 677.7,
                "sales_amount(SUM)1": 677.7,
                "province1": "蒂巴扎"
            },
            {
                "province0": "蒂米什",
                "sales_amount(SUM)0": 3850.83,
                "sales_amount(SUM)1": 3850.83,
                "province1": "蒂米什"
            },
            {
                "province0": "蒂罗尔",
                "sales_amount(SUM)0": 6863.550000000001,
                "sales_amount(SUM)1": 6863.550000000001,
                "province1": "蒂罗尔"
            },
            {
                "province0": "蒙大拿州",
                "sales_amount(SUM)0": 5589.351999999997,
                "sales_amount(SUM)1": 5589.351999999997,
                "province1": "蒙大拿州"
            },
            {
                "province0": "蒙得维的亚省",
                "sales_amount(SUM)0": 5604.404,
                "sales_amount(SUM)1": 5604.404,
                "province1": "蒙得维的亚省"
            },
            {
                "province0": "蒙特塞拉多州",
                "sales_amount(SUM)0": 3511.4700000000007,
                "sales_amount(SUM)1": 3511.4700000000007,
                "province1": "蒙特塞拉多州"
            },
            {
                "province0": "蔚山",
                "sales_amount(SUM)0": 742.9290000000001,
                "sales_amount(SUM)1": 742.9290000000001,
                "province1": "蔚山"
            },
            {
                "province0": "裂谷",
                "sales_amount(SUM)0": 3109.8,
                "sales_amount(SUM)1": 3109.8,
                "province1": "裂谷"
            },
            {
                "province0": "西兰",
                "sales_amount(SUM)0": 242.697,
                "sales_amount(SUM)1": 242.697,
                "province1": "西兰"
            },
            {
                "province0": "西加里曼丹",
                "sales_amount(SUM)0": 1398.6231,
                "sales_amount(SUM)1": 1398.6231,
                "province1": "西加里曼丹"
            },
            {
                "province0": "西努沙登加拉省",
                "sales_amount(SUM)0": 5010.818099999999,
                "sales_amount(SUM)1": 5010.818099999999,
                "province1": "西努沙登加拉省"
            },
            {
                "province0": "西北区",
                "sales_amount(SUM)0": 2353.1400000000003,
                "sales_amount(SUM)1": 2353.1400000000003,
                "province1": "西北区"
            },
            {
                "province0": "西北省",
                "sales_amount(SUM)0": 4329.75,
                "sales_amount(SUM)1": 4329.75,
                "province1": "西北省"
            },
            {
                "province0": "西北部",
                "sales_amount(SUM)0": 1086.66,
                "sales_amount(SUM)1": 1086.66,
                "province1": "西北部"
            },
            {
                "province0": "西南",
                "sales_amount(SUM)0": 389.15999999999997,
                "sales_amount(SUM)1": 389.15999999999997,
                "province1": "西南"
            },
            {
                "province0": "西南芬兰区",
                "sales_amount(SUM)0": 2475.54,
                "sales_amount(SUM)1": 2475.54,
                "province1": "西南芬兰区"
            },
            {
                "province0": "西孟加拉邦",
                "sales_amount(SUM)0": 16235.91,
                "sales_amount(SUM)1": 16235.91,
                "province1": "西孟加拉邦"
            },
            {
                "province0": "西开普省",
                "sales_amount(SUM)0": 23803.77,
                "sales_amount(SUM)1": 23803.77,
                "province1": "西开普省"
            },
            {
                "province0": "西开赛省",
                "sales_amount(SUM)0": 6078.990000000001,
                "sales_amount(SUM)1": 6078.990000000001,
                "province1": "西开赛省"
            },
            {
                "province0": "西弗兰德省",
                "sales_amount(SUM)0": 1649.3400000000001,
                "sales_amount(SUM)1": 1649.3400000000001,
                "province1": "西弗兰德省"
            },
            {
                "province0": "西弗吉尼亚州",
                "sales_amount(SUM)0": 1209.824,
                "sales_amount(SUM)1": 1209.824,
                "province1": "西弗吉尼亚州"
            },
            {
                "province0": "西恩福格斯",
                "sales_amount(SUM)0": 7425.212800000001,
                "sales_amount(SUM)1": 7425.212800000001,
                "province1": "西恩福格斯"
            },
            {
                "province0": "西澳大利亚州",
                "sales_amount(SUM)0": 111090.22799999999,
                "sales_amount(SUM)1": 111090.22799999999,
                "province1": "西澳大利亚州"
            },
            {
                "province0": "西爪哇省",
                "sales_amount(SUM)0": 91975.74419999994,
                "sales_amount(SUM)1": 91975.74419999994,
                "province1": "西爪哇省"
            },
            {
                "province0": "西米沙鄢",
                "sales_amount(SUM)0": 3463.361999999999,
                "sales_amount(SUM)1": 3463.361999999999,
                "province1": "西米沙鄢"
            },
            {
                "province0": "西约塔兰",
                "sales_amount(SUM)0": 3691.83,
                "sales_amount(SUM)1": 3691.83,
                "province1": "西约塔兰"
            },
            {
                "province0": "西苏门答腊",
                "sales_amount(SUM)0": 5515.1493,
                "sales_amount(SUM)1": 5515.1493,
                "province1": "西苏门答腊"
            },
            {
                "province0": "西西里岛",
                "sales_amount(SUM)0": 24440.034,
                "sales_amount(SUM)1": 24440.034,
                "province1": "西西里岛"
            },
            {
                "province0": "西迪贝勒阿巴斯",
                "sales_amount(SUM)0": 569.19,
                "sales_amount(SUM)1": 569.19,
                "province1": "西迪贝勒阿巴斯"
            },
            {
                "province0": "西部",
                "sales_amount(SUM)0": 6956.009999999998,
                "sales_amount(SUM)1": 6956.009999999998,
                "province1": "西部"
            },
            {
                "province0": "西部-舍拉拉德-贝尼赫森",
                "sales_amount(SUM)0": 494.43000000000006,
                "sales_amount(SUM)1": 494.43000000000006,
                "province1": "西部-舍拉拉德-贝尼赫森"
            },
            {
                "province0": "西里西亚",
                "sales_amount(SUM)0": 13842.089999999998,
                "sales_amount(SUM)1": 13842.089999999998,
                "province1": "西里西亚"
            },
            {
                "province0": "西阿格德尔",
                "sales_amount(SUM)0": 1785.54,
                "sales_amount(SUM)1": 1785.54,
                "province1": "西阿格德尔"
            },
            {
                "province0": "西马绍纳兰",
                "sales_amount(SUM)0": 104.364,
                "sales_amount(SUM)1": 104.364,
                "province1": "西马绍纳兰"
            },
            {
                "province0": "诺夫哥罗德",
                "sales_amount(SUM)0": 413.1,
                "sales_amount(SUM)1": 413.1,
                "province1": "诺夫哥罗德"
            },
            {
                "province0": "诺曼底",
                "sales_amount(SUM)0": 27705.087,
                "sales_amount(SUM)1": 27705.087,
                "province1": "诺曼底"
            },
            {
                "province0": "谢戈德阿维拉",
                "sales_amount(SUM)0": 6385.37872,
                "sales_amount(SUM)1": 6385.37872,
                "province1": "谢戈德阿维拉"
            },
            {
                "province0": "谢赫村",
                "sales_amount(SUM)0": 129.33,
                "sales_amount(SUM)1": 129.33,
                "province1": "谢赫村"
            },
            {
                "province0": "豪登省",
                "sales_amount(SUM)0": 50986.85999999999,
                "sales_amount(SUM)1": 50986.85999999999,
                "province1": "豪登省"
            },
            {
                "province0": "贝凯什州",
                "sales_amount(SUM)0": 1428.48,
                "sales_amount(SUM)1": 1428.48,
                "province1": "贝凯什州"
            },
            {
                "province0": "贝努埃",
                "sales_amount(SUM)0": 1790.163,
                "sales_amount(SUM)1": 1790.163,
                "province1": "贝努埃"
            },
            {
                "province0": "贝尼",
                "sales_amount(SUM)0": 700.826,
                "sales_amount(SUM)1": 700.826,
                "province1": "贝尼"
            },
            {
                "province0": "贝沙尔",
                "sales_amount(SUM)0": 150.06,
                "sales_amount(SUM)1": 150.06,
                "province1": "贝沙尔"
            },
            {
                "province0": "贝贾亚",
                "sales_amount(SUM)0": 631.98,
                "sales_amount(SUM)1": 631.98,
                "province1": "贝贾亚"
            },
            {
                "province0": "贝鲁特",
                "sales_amount(SUM)0": 1596.8099999999997,
                "sales_amount(SUM)1": 1596.8099999999997,
                "province1": "贝鲁特"
            },
            {
                "province0": "贡贝",
                "sales_amount(SUM)0": 48.105000000000004,
                "sales_amount(SUM)1": 48.105000000000004,
                "province1": "贡贝"
            },
            {
                "province0": "贵州省",
                "sales_amount(SUM)0": 5491.139999999999,
                "sales_amount(SUM)1": 5491.139999999999,
                "province1": "贵州省"
            },
            {
                "province0": "赛达",
                "sales_amount(SUM)0": 3524.4600000000005,
                "sales_amount(SUM)1": 3524.4600000000005,
                "province1": "赛达"
            },
            {
                "province0": "赞比西亚",
                "sales_amount(SUM)0": 1750.3200000000004,
                "sales_amount(SUM)1": 1750.3200000000004,
                "province1": "赞比西亚"
            },
            {
                "province0": "赞詹",
                "sales_amount(SUM)0": 3423.2100000000005,
                "sales_amount(SUM)1": 3423.2100000000005,
                "province1": "赞詹"
            },
            {
                "province0": "赤道",
                "sales_amount(SUM)0": 2238.9600000000005,
                "sales_amount(SUM)1": 2238.9600000000005,
                "province1": "赤道"
            },
            {
                "province0": "赫尔松",
                "sales_amount(SUM)0": 1162.14,
                "sales_amount(SUM)1": 1162.14,
                "province1": "赫尔松"
            },
            {
                "province0": "赫拉德茨-克拉洛韦",
                "sales_amount(SUM)0": 1342.47,
                "sales_amount(SUM)1": 1342.47,
                "province1": "赫拉德茨-克拉洛韦"
            },
            {
                "province0": "赫拉特",
                "sales_amount(SUM)0": 1695.2400000000002,
                "sales_amount(SUM)1": 1695.2400000000002,
                "province1": "赫拉特"
            },
            {
                "province0": "赫梅利尼茨基",
                "sales_amount(SUM)0": 2005.92,
                "sales_amount(SUM)1": 2005.92,
                "province1": "赫梅利尼茨基"
            },
            {
                "province0": "路易斯安那州",
                "sales_amount(SUM)0": 9217.029999999999,
                "sales_amount(SUM)1": 9217.029999999999,
                "province1": "路易斯安那州"
            },
            {
                "province0": "车里雅宾斯克",
                "sales_amount(SUM)0": 17884.98,
                "sales_amount(SUM)1": 17884.98,
                "province1": "车里雅宾斯克"
            },
            {
                "province0": "辽宁省",
                "sales_amount(SUM)0": 41385.437999999995,
                "sales_amount(SUM)1": 41385.437999999995,
                "province1": "辽宁省"
            },
            {
                "province0": "达卡",
                "sales_amount(SUM)0": 48404.64000000001,
                "sales_amount(SUM)1": 48404.64000000001,
                "province1": "达卡"
            },
            {
                "province0": "达吉斯坦",
                "sales_amount(SUM)0": 9522.089999999998,
                "sales_amount(SUM)1": 9522.089999999998,
                "province1": "达吉斯坦"
            },
            {
                "province0": "达喀尔",
                "sales_amount(SUM)0": 22254.69,
                "sales_amount(SUM)1": 22254.69,
                "province1": "达喀尔"
            },
            {
                "province0": "达累斯萨拉姆",
                "sales_amount(SUM)0": 11842.746000000003,
                "sales_amount(SUM)1": 11842.746000000003,
                "province1": "达累斯萨拉姆"
            },
            {
                "province0": "迈尔盖卜",
                "sales_amount(SUM)0": 67.74,
                "sales_amount(SUM)1": 67.74,
                "province1": "迈尔盖卜"
            },
            {
                "province0": "迈桑",
                "sales_amount(SUM)0": 3579.15,
                "sales_amount(SUM)1": 3579.15,
                "province1": "迈桑"
            },
            {
                "province0": "迪亚巴克尔",
                "sales_amount(SUM)0": 789.084,
                "sales_amount(SUM)1": 789.084,
                "province1": "迪亚巴克尔"
            },
            {
                "province0": "迪亚拉",
                "sales_amount(SUM)0": 143.07,
                "sales_amount(SUM)1": 143.07,
                "province1": "迪亚拉"
            },
            {
                "province0": "迪兹杰",
                "sales_amount(SUM)0": 65.196,
                "sales_amount(SUM)1": 65.196,
                "province1": "迪兹杰"
            },
            {
                "province0": "迪法",
                "sales_amount(SUM)0": 112.44,
                "sales_amount(SUM)1": 112.44,
                "province1": "迪法"
            },
            {
                "province0": "那慕儿",
                "sales_amount(SUM)0": 5012.34,
                "sales_amount(SUM)1": 5012.34,
                "province1": "那慕儿"
            },
            {
                "province0": "邦达马河谷",
                "sales_amount(SUM)0": 3260.3399999999997,
                "sales_amount(SUM)1": 3260.3399999999997,
                "province1": "邦达马河谷"
            },
            {
                "province0": "都拉斯",
                "sales_amount(SUM)0": 612.0899999999999,
                "sales_amount(SUM)1": 612.0899999999999,
                "province1": "都拉斯"
            },
            {
                "province0": "都柏林",
                "sales_amount(SUM)0": 11072.888999999996,
                "sales_amount(SUM)1": 11072.888999999996,
                "province1": "都柏林"
            },
            {
                "province0": "里夫内",
                "sales_amount(SUM)0": 428.4299999999999,
                "sales_amount(SUM)1": 428.4299999999999,
                "province1": "里夫内"
            },
            {
                "province0": "里斯本",
                "sales_amount(SUM)0": 10659.659999999998,
                "sales_amount(SUM)1": 10659.659999999998,
                "province1": "里斯本"
            },
            {
                "province0": "里泽省",
                "sales_amount(SUM)0": 18.528,
                "sales_amount(SUM)1": 18.528,
                "province1": "里泽省"
            },
            {
                "province0": "里约热内卢",
                "sales_amount(SUM)0": 17334.16204,
                "sales_amount(SUM)1": 17334.16204,
                "province1": "里约热内卢"
            },
            {
                "province0": "里萨拉尔达",
                "sales_amount(SUM)0": 1901.16,
                "sales_amount(SUM)1": 1901.16,
                "province1": "里萨拉尔达"
            },
            {
                "province0": "里韦拉省",
                "sales_amount(SUM)0": 60.44,
                "sales_amount(SUM)1": 60.44,
                "province1": "里韦拉省"
            },
            {
                "province0": "重庆",
                "sales_amount(SUM)0": 10166.159999999998,
                "sales_amount(SUM)1": 10166.159999999998,
                "province1": "重庆"
            },
            {
                "province0": "金塔纳·罗奥",
                "sales_amount(SUM)0": 9370.239319999999,
                "sales_amount(SUM)1": 9370.239319999999,
                "province1": "金塔纳·罗奥"
            },
            {
                "province0": "金沙萨",
                "sales_amount(SUM)0": 42536.51999999998,
                "sales_amount(SUM)1": 42536.51999999998,
                "province1": "金沙萨"
            },
            {
                "province0": "金贾",
                "sales_amount(SUM)0": 101.58300000000001,
                "sales_amount(SUM)1": 101.58300000000001,
                "province1": "金贾"
            },
            {
                "province0": "金边市",
                "sales_amount(SUM)0": 17476.02,
                "sales_amount(SUM)1": 17476.02,
                "province1": "金边市"
            },
            {
                "province0": "金迪亚行政区",
                "sales_amount(SUM)0": 1104.96,
                "sales_amount(SUM)1": 1104.96,
                "province1": "金迪亚行政区"
            },
            {
                "province0": "金迪奥",
                "sales_amount(SUM)0": 2292.44,
                "sales_amount(SUM)1": 2292.44,
                "province1": "金迪奥"
            },
            {
                "province0": "釜山",
                "sales_amount(SUM)0": 2435.739,
                "sales_amount(SUM)1": 2435.739,
                "province1": "釜山"
            },
            {
                "province0": "铜带",
                "sales_amount(SUM)0": 11613.929999999995,
                "sales_amount(SUM)1": 11613.929999999995,
                "province1": "铜带"
            },
            {
                "province0": "锡卡索",
                "sales_amount(SUM)0": 1094.22,
                "sales_amount(SUM)1": 1094.22,
                "province1": "锡卡索"
            },
            {
                "province0": "锡尔特省",
                "sales_amount(SUM)0": 205.368,
                "sales_amount(SUM)1": 205.368,
                "province1": "锡尔特省"
            },
            {
                "province0": "锡尔纳克",
                "sales_amount(SUM)0": 108.984,
                "sales_amount(SUM)1": 108.984,
                "province1": "锡尔纳克"
            },
            {
                "province0": "锡比乌",
                "sales_amount(SUM)0": 1090.14,
                "sales_amount(SUM)1": 1090.14,
                "province1": "锡比乌"
            },
            {
                "province0": "锡瓦斯",
                "sales_amount(SUM)0": 675.4440000000001,
                "sales_amount(SUM)1": 675.4440000000001,
                "province1": "锡瓦斯"
            },
            {
                "province0": "锡莱特",
                "sales_amount(SUM)0": 1313.8200000000002,
                "sales_amount(SUM)1": 1313.8200000000002,
                "province1": "锡莱特"
            },
            {
                "province0": "锡那罗亚",
                "sales_amount(SUM)0": 22475.76212000001,
                "sales_amount(SUM)1": 22475.76212000001,
                "province1": "锡那罗亚"
            },
            {
                "province0": "长崎县",
                "sales_amount(SUM)0": 4125.42,
                "sales_amount(SUM)1": 4125.42,
                "province1": "长崎县"
            },
            {
                "province0": "长野",
                "sales_amount(SUM)0": 30.9,
                "sales_amount(SUM)1": 30.9,
                "province1": "长野"
            },
            {
                "province0": "门多萨",
                "sales_amount(SUM)0": 2222.382,
                "sales_amount(SUM)1": 2222.382,
                "province1": "门多萨"
            },
            {
                "province0": "阿亚库乔",
                "sales_amount(SUM)0": 608.3040000000001,
                "sales_amount(SUM)1": 608.3040000000001,
                "province1": "阿亚库乔"
            },
            {
                "province0": "阿什哈巴德",
                "sales_amount(SUM)0": 1137.0059999999999,
                "sales_amount(SUM)1": 1137.0059999999999,
                "province1": "阿什哈巴德"
            },
            {
                "province0": "阿克莫拉",
                "sales_amount(SUM)0": 528.57,
                "sales_amount(SUM)1": 528.57,
                "province1": "阿克莫拉"
            },
            {
                "province0": "阿克萨赖",
                "sales_amount(SUM)0": 110.196,
                "sales_amount(SUM)1": 110.196,
                "province1": "阿克萨赖"
            },
            {
                "province0": "阿克里",
                "sales_amount(SUM)0": 701.98,
                "sales_amount(SUM)1": 701.98,
                "province1": "阿克里"
            },
            {
                "province0": "阿其那那那区",
                "sales_amount(SUM)0": 97.68,
                "sales_amount(SUM)1": 97.68,
                "province1": "阿其那那那区"
            },
            {
                "province0": "阿劳卡省",
                "sales_amount(SUM)0": 1537.53012,
                "sales_amount(SUM)1": 1537.53012,
                "province1": "阿劳卡省"
            },
            {
                "province0": "阿南布拉",
                "sales_amount(SUM)0": 700.8659999999999,
                "sales_amount(SUM)1": 700.8659999999999,
                "province1": "阿南布拉"
            },
            {
                "province0": "阿基坦-利穆赞-普瓦图-夏朗德",
                "sales_amount(SUM)0": 65646.396,
                "sales_amount(SUM)1": 65646.396,
                "province1": "阿基坦-利穆赞-普瓦图-夏朗德"
            },
            {
                "province0": "阿塔卡马大区",
                "sales_amount(SUM)0": 881.96,
                "sales_amount(SUM)1": 881.96,
                "province1": "阿塔卡马大区"
            },
            {
                "province0": "阿塔科拉",
                "sales_amount(SUM)0": 572.6700000000001,
                "sales_amount(SUM)1": 572.6700000000001,
                "province1": "阿塔科拉"
            },
            {
                "province0": "阿夸伊博姆",
                "sales_amount(SUM)0": 281.403,
                "sales_amount(SUM)1": 281.403,
                "province1": "阿夸伊博姆"
            },
            {
                "province0": "阿威罗",
                "sales_amount(SUM)0": 341.475,
                "sales_amount(SUM)1": 341.475,
                "province1": "阿威罗"
            },
            {
                "province0": "阿尔及尔",
                "sales_amount(SUM)0": 9270.06,
                "sales_amount(SUM)1": 9270.06,
                "province1": "阿尔及尔"
            },
            {
                "province0": "阿尔杰什",
                "sales_amount(SUM)0": 118.38000000000001,
                "sales_amount(SUM)1": 118.38000000000001,
                "province1": "阿尔杰什"
            },
            {
                "province0": "阿尔汉格尔斯克",
                "sales_amount(SUM)0": 2800.4399999999996,
                "sales_amount(SUM)1": 2800.4399999999996,
                "province1": "阿尔汉格尔斯克"
            },
            {
                "province0": "阿尔萨斯–香槟-阿登–洛林",
                "sales_amount(SUM)0": 47370.45,
                "sales_amount(SUM)1": 47370.45,
                "province1": "阿尔萨斯–香槟-阿登–洛林"
            },
            {
                "province0": "阿尔达比勒",
                "sales_amount(SUM)0": 4603.410000000002,
                "sales_amount(SUM)1": 4603.410000000002,
                "province1": "阿尔达比勒"
            },
            {
                "province0": "阿尔达汉",
                "sales_amount(SUM)0": 35.664,
                "sales_amount(SUM)1": 35.664,
                "province1": "阿尔达汉"
            },
            {
                "province0": "阿尤恩",
                "sales_amount(SUM)0": 666.36,
                "sales_amount(SUM)1": 666.36,
                "province1": "阿尤恩"
            },
            {
                "province0": "阿布贾",
                "sales_amount(SUM)0": 38.016,
                "sales_amount(SUM)1": 38.016,
                "province1": "阿布贾"
            },
            {
                "province0": "阿布鲁齐",
                "sales_amount(SUM)0": 6723.75,
                "sales_amount(SUM)1": 6723.75,
                "province1": "阿布鲁齐"
            },
            {
                "province0": "阿德亚曼",
                "sales_amount(SUM)0": 502.5,
                "sales_amount(SUM)1": 502.5,
                "province1": "阿德亚曼"
            },
            {
                "province0": "阿拉巴马州",
                "sales_amount(SUM)0": 19510.639999999992,
                "sales_amount(SUM)1": 19510.639999999992,
                "province1": "阿拉巴马州"
            },
            {
                "province0": "阿拉德",
                "sales_amount(SUM)0": 169.68,
                "sales_amount(SUM)1": 169.68,
                "province1": "阿拉德"
            },
            {
                "province0": "阿拉戈斯",
                "sales_amount(SUM)0": 5677.994200000001,
                "sales_amount(SUM)1": 5677.994200000001,
                "province1": "阿拉戈斯"
            },
            {
                "province0": "阿拉木图",
                "sales_amount(SUM)0": 200.79899999999998,
                "sales_amount(SUM)1": 200.79899999999998,
                "province1": "阿拉木图"
            },
            {
                "province0": "阿拉木图城",
                "sales_amount(SUM)0": 594.1259999999999,
                "sales_amount(SUM)1": 594.1259999999999,
                "province1": "阿拉木图城"
            },
            {
                "province0": "阿拉瓜",
                "sales_amount(SUM)0": 1851.7521599999998,
                "sales_amount(SUM)1": 1851.7521599999998,
                "province1": "阿拉瓜"
            },
            {
                "province0": "阿提卡",
                "sales_amount(SUM)0": 3129.5820000000003,
                "sales_amount(SUM)1": 3129.5820000000003,
                "province1": "阿提卡"
            },
            {
                "province0": "阿散蒂",
                "sales_amount(SUM)0": 6323.669999999998,
                "sales_amount(SUM)1": 6323.669999999998,
                "province1": "阿散蒂"
            },
            {
                "province0": "阿斯图里亚斯",
                "sales_amount(SUM)0": 5352.06,
                "sales_amount(SUM)1": 5352.06,
                "province1": "阿斯图里亚斯"
            },
            {
                "province0": "阿斯塔纳",
                "sales_amount(SUM)0": 658.0619999999999,
                "sales_amount(SUM)1": 658.0619999999999,
                "province1": "阿斯塔纳"
            },
            {
                "province0": "阿斯旺省",
                "sales_amount(SUM)0": 3397.439999999999,
                "sales_amount(SUM)1": 3397.439999999999,
                "province1": "阿斯旺省"
            },
            {
                "province0": "阿斯特拉罕州",
                "sales_amount(SUM)0": 5846.58,
                "sales_amount(SUM)1": 5846.58,
                "province1": "阿斯特拉罕州"
            },
            {
                "province0": "阿比亚",
                "sales_amount(SUM)0": 1064.1240000000003,
                "sales_amount(SUM)1": 1064.1240000000003,
                "province1": "阿比亚"
            },
            {
                "province0": "阿治曼",
                "sales_amount(SUM)0": 209.988,
                "sales_amount(SUM)1": 209.988,
                "province1": "阿治曼"
            },
            {
                "province0": "阿特兰蒂达",
                "sales_amount(SUM)0": 8491.60908,
                "sales_amount(SUM)1": 8491.60908,
                "province1": "阿特兰蒂达"
            },
            {
                "province0": "阿特米萨",
                "sales_amount(SUM)0": 2370.2015199999996,
                "sales_amount(SUM)1": 2370.2015199999996,
                "province1": "阿特米萨"
            },
            {
                "province0": "阿穆尔",
                "sales_amount(SUM)0": 3636.0899999999997,
                "sales_amount(SUM)1": 3636.0899999999997,
                "province1": "阿穆尔"
            },
            {
                "province0": "阿肯色州",
                "sales_amount(SUM)0": 11678.129999999997,
                "sales_amount(SUM)1": 11678.129999999997,
                "province1": "阿肯色州"
            },
            {
                "province0": "阿苏艾",
                "sales_amount(SUM)0": 880.58,
                "sales_amount(SUM)1": 880.58,
                "province1": "阿苏艾"
            },
            {
                "province0": "阿菲永卡拉希萨尔",
                "sales_amount(SUM)0": 43.104,
                "sales_amount(SUM)1": 43.104,
                "province1": "阿菲永卡拉希萨尔"
            },
            {
                "province0": "阿萨姆邦",
                "sales_amount(SUM)0": 5185.38,
                "sales_amount(SUM)1": 5185.38,
                "province1": "阿萨姆邦"
            },
            {
                "province0": "阿蒂博尼特",
                "sales_amount(SUM)0": 1426.2133600000002,
                "sales_amount(SUM)1": 1426.2133600000002,
                "province1": "阿蒂博尼特"
            },
            {
                "province0": "阿西尔",
                "sales_amount(SUM)0": 1603.5,
                "sales_amount(SUM)1": 1603.5,
                "province1": "阿西尔"
            },
            {
                "province0": "阿达纳省",
                "sales_amount(SUM)0": 5463.719999999999,
                "sales_amount(SUM)1": 5463.719999999999,
                "province1": "阿达纳省"
            },
            {
                "province0": "阿达马瓦",
                "sales_amount(SUM)0": 960.2009999999999,
                "sales_amount(SUM)1": 960.2009999999999,
                "province1": "阿达马瓦"
            },
            {
                "province0": "阿那拉芒加",
                "sales_amount(SUM)0": 9604.500000000002,
                "sales_amount(SUM)1": 9604.500000000002,
                "province1": "阿那拉芒加"
            },
            {
                "province0": "阿里卡和帕里纳科塔",
                "sales_amount(SUM)0": 405.90000000000003,
                "sales_amount(SUM)1": 405.90000000000003,
                "province1": "阿里卡和帕里纳科塔"
            },
            {
                "province0": "阿雷基帕",
                "sales_amount(SUM)0": 692.664,
                "sales_amount(SUM)1": 692.664,
                "province1": "阿雷基帕"
            },
            {
                "province0": "阿马帕里",
                "sales_amount(SUM)0": 5689.48516,
                "sales_amount(SUM)1": 5689.48516,
                "province1": "阿马帕里"
            },
            {
                "province0": "阿马西亚",
                "sales_amount(SUM)0": 252.588,
                "sales_amount(SUM)1": 252.588,
                "province1": "阿马西亚"
            },
            {
                "province0": "阿鲁沙",
                "sales_amount(SUM)0": 1426.518,
                "sales_amount(SUM)1": 1426.518,
                "province1": "阿鲁沙"
            },
            {
                "province0": "阿黎博里",
                "sales_amount(SUM)0": 268.77,
                "sales_amount(SUM)1": 268.77,
                "province1": "阿黎博里"
            },
            {
                "province0": "阿齐莫-安德列发那",
                "sales_amount(SUM)0": 77.52,
                "sales_amount(SUM)1": 77.52,
                "province1": "阿齐莫-安德列发那"
            },
            {
                "province0": "陕西省",
                "sales_amount(SUM)0": 8490.969,
                "sales_amount(SUM)1": 8490.969,
                "province1": "陕西省"
            },
            {
                "province0": "雅加达",
                "sales_amount(SUM)0": 94321.3242,
                "sales_amount(SUM)1": 94321.3242,
                "province1": "雅加达"
            },
            {
                "province0": "雅西",
                "sales_amount(SUM)0": 1820.7900000000002,
                "sales_amount(SUM)1": 1820.7900000000002,
                "province1": "雅西"
            },
            {
                "province0": "雪兰莪州",
                "sales_amount(SUM)0": 3855.63,
                "sales_amount(SUM)1": 3855.63,
                "province1": "雪兰莪州"
            },
            {
                "province0": "霍克湾",
                "sales_amount(SUM)0": 9465.119999999999,
                "sales_amount(SUM)1": 9465.119999999999,
                "province1": "霍克湾"
            },
            {
                "province0": "霍姆斯",
                "sales_amount(SUM)0": 3636.294,
                "sales_amount(SUM)1": 3636.294,
                "province1": "霍姆斯"
            },
            {
                "province0": "霍尔木兹甘",
                "sales_amount(SUM)0": 1050.93,
                "sales_amount(SUM)1": 1050.93,
                "province1": "霍尔木兹甘"
            },
            {
                "province0": "霍达兰",
                "sales_amount(SUM)0": 6852.3,
                "sales_amount(SUM)1": 6852.3,
                "province1": "霍达兰"
            },
            {
                "province0": "霍马斯",
                "sales_amount(SUM)0": 2899.47,
                "sales_amount(SUM)1": 2899.47,
                "province1": "霍马斯"
            },
            {
                "province0": "霹雳州",
                "sales_amount(SUM)0": 9282.299999999997,
                "sales_amount(SUM)1": 9282.299999999997,
                "province1": "霹雳州"
            },
            {
                "province0": "青年岛",
                "sales_amount(SUM)0": 2602.7,
                "sales_amount(SUM)1": 2602.7,
                "province1": "青年岛"
            },
            {
                "province0": "青森县",
                "sales_amount(SUM)0": 58.5,
                "sales_amount(SUM)1": 58.5,
                "province1": "青森县"
            },
            {
                "province0": "青海省",
                "sales_amount(SUM)0": 5691.45,
                "sales_amount(SUM)1": 5691.45,
                "province1": "青海省"
            },
            {
                "province0": "静冈县",
                "sales_amount(SUM)0": 14593.650000000001,
                "sales_amount(SUM)1": 14593.650000000001,
                "province1": "静冈县"
            },
            {
                "province0": "非斯-布勒曼",
                "sales_amount(SUM)0": 7030.799999999999,
                "sales_amount(SUM)1": 7030.799999999999,
                "province1": "非斯-布勒曼"
            },
            {
                "province0": "韦姆兰",
                "sales_amount(SUM)0": 514.644,
                "sales_amount(SUM)1": 514.644,
                "province1": "韦姆兰"
            },
            {
                "province0": "韦拉克鲁斯",
                "sales_amount(SUM)0": 24046.847200000004,
                "sales_amount(SUM)1": 24046.847200000004,
                "province1": "韦拉克鲁斯"
            },
            {
                "province0": "韦梅",
                "sales_amount(SUM)0": 2129.2500000000005,
                "sales_amount(SUM)1": 2129.2500000000005,
                "province1": "韦梅"
            },
            {
                "province0": "韦韦特南戈省",
                "sales_amount(SUM)0": 6596.57908,
                "sales_amount(SUM)1": 6596.57908,
                "province1": "韦韦特南戈省"
            },
            {
                "province0": "顿涅茨克",
                "sales_amount(SUM)0": 8374.379999999997,
                "sales_amount(SUM)1": 8374.379999999997,
                "province1": "顿涅茨克"
            },
            {
                "province0": "首尔",
                "sales_amount(SUM)0": 14298.831000000004,
                "sales_amount(SUM)1": 14298.831000000004,
                "province1": "首尔"
            },
            {
                "province0": "香川县",
                "sales_amount(SUM)0": 2431.932,
                "sales_amount(SUM)1": 2431.932,
                "province1": "香川县"
            },
            {
                "province0": "马佐夫舍",
                "sales_amount(SUM)0": 5780.22,
                "sales_amount(SUM)1": 5780.22,
                "province1": "马佐夫舍"
            },
            {
                "province0": "马兰热",
                "sales_amount(SUM)0": 137.25,
                "sales_amount(SUM)1": 137.25,
                "province1": "马兰热"
            },
            {
                "province0": "马哈拉施特拉邦",
                "sales_amount(SUM)0": 101322.40499999996,
                "sales_amount(SUM)1": 101322.40499999996,
                "province1": "马哈拉施特拉邦"
            },
            {
                "province0": "马坦萨斯",
                "sales_amount(SUM)0": 4722.18512,
                "sales_amount(SUM)1": 4722.18512,
                "province1": "马坦萨斯"
            },
            {
                "province0": "马塔加尔帕",
                "sales_amount(SUM)0": 16354.974439999998,
                "sales_amount(SUM)1": 16354.974439999998,
                "province1": "马塔加尔帕"
            },
            {
                "province0": "马塞卢区",
                "sales_amount(SUM)0": 6711.99,
                "sales_amount(SUM)1": 6711.99,
                "province1": "马塞卢区"
            },
            {
                "province0": "马尔丁",
                "sales_amount(SUM)0": 1653.9,
                "sales_amount(SUM)1": 1653.9,
                "province1": "马尔丁"
            },
            {
                "province0": "马尔伯勒",
                "sales_amount(SUM)0": 2849.58,
                "sales_amount(SUM)1": 2849.58,
                "province1": "马尔伯勒"
            },
            {
                "province0": "马尔凯",
                "sales_amount(SUM)0": 1923.618,
                "sales_amount(SUM)1": 1923.618,
                "province1": "马尔凯"
            },
            {
                "province0": "马尼卡",
                "sales_amount(SUM)0": 431.64,
                "sales_amount(SUM)1": 431.64,
                "province1": "马尼卡"
            },
            {
                "province0": "马尼卡兰",
                "sales_amount(SUM)0": 11.853,
                "sales_amount(SUM)1": 11.853,
                "province1": "马尼卡兰"
            },
            {
                "province0": "马尼萨",
                "sales_amount(SUM)0": 1146.9360000000001,
                "sales_amount(SUM)1": 1146.9360000000001,
                "province1": "马尼萨"
            },
            {
                "province0": "马德里",
                "sales_amount(SUM)0": 64385.17199999999,
                "sales_amount(SUM)1": 64385.17199999999,
                "province1": "马德里"
            },
            {
                "province0": "马托格罗索",
                "sales_amount(SUM)0": 3568.3423200000007,
                "sales_amount(SUM)1": 3568.3423200000007,
                "province1": "马托格罗索"
            },
            {
                "province0": "马拉",
                "sales_amount(SUM)0": 316.524,
                "sales_amount(SUM)1": 316.524,
                "province1": "马拉"
            },
            {
                "province0": "马拉喀什-坦西夫特-豪兹",
                "sales_amount(SUM)0": 7464.9299999999985,
                "sales_amount(SUM)1": 7464.9299999999985,
                "province1": "马拉喀什-坦西夫特-豪兹"
            },
            {
                "province0": "马拉尼昂",
                "sales_amount(SUM)0": 16874.147959999995,
                "sales_amount(SUM)1": 16874.147959999995,
                "province1": "马拉尼昂"
            },
            {
                "province0": "马拉穆列什",
                "sales_amount(SUM)0": 477.21000000000004,
                "sales_amount(SUM)1": 477.21000000000004,
                "province1": "马拉穆列什"
            },
            {
                "province0": "马拉蒂亚",
                "sales_amount(SUM)0": 530.568,
                "sales_amount(SUM)1": 530.568,
                "province1": "马拉蒂亚"
            },
            {
                "province0": "马拉迪",
                "sales_amount(SUM)0": 1648.4999999999998,
                "sales_amount(SUM)1": 1648.4999999999998,
                "province1": "马拉迪"
            },
            {
                "province0": "马提尼克",
                "sales_amount(SUM)0": 5968.15104,
                "sales_amount(SUM)1": 5968.15104,
                "province1": "马提尼克"
            },
            {
                "province0": "马斯喀特",
                "sales_amount(SUM)0": 76.65,
                "sales_amount(SUM)1": 76.65,
                "province1": "马斯喀特"
            },
            {
                "province0": "马普托",
                "sales_amount(SUM)0": 3709.59,
                "sales_amount(SUM)1": 3709.59,
                "province1": "马普托"
            },
            {
                "province0": "马普托市",
                "sales_amount(SUM)0": 8220.179999999998,
                "sales_amount(SUM)1": 8220.179999999998,
                "province1": "马普托市"
            },
            {
                "province0": "马涅马",
                "sales_amount(SUM)0": 858.81,
                "sales_amount(SUM)1": 858.81,
                "province1": "马涅马"
            },
            {
                "province0": "马特鲁",
                "sales_amount(SUM)0": 60.03,
                "sales_amount(SUM)1": 60.03,
                "province1": "马特鲁"
            },
            {
                "province0": "马纳瓦图-旺阿努伊",
                "sales_amount(SUM)0": 4184.040000000001,
                "sales_amount(SUM)1": 4184.040000000001,
                "province1": "马纳瓦图-旺阿努伊"
            },
            {
                "province0": "马纳维",
                "sales_amount(SUM)0": 725.952,
                "sales_amount(SUM)1": 725.952,
                "province1": "马纳维"
            },
            {
                "province0": "马萨亚",
                "sales_amount(SUM)0": 4550.6042,
                "sales_amount(SUM)1": 4550.6042,
                "province1": "马萨亚"
            },
            {
                "province0": "马萨诸塞州",
                "sales_amount(SUM)0": 28634.433999999994,
                "sales_amount(SUM)1": 28634.433999999994,
                "province1": "马萨诸塞州"
            },
            {
                "province0": "马赞达兰",
                "sales_amount(SUM)0": 6091.2,
                "sales_amount(SUM)1": 6091.2,
                "province1": "马赞达兰"
            },
            {
                "province0": "马那瓜省",
                "sales_amount(SUM)0": 88968.50644000004,
                "sales_amount(SUM)1": 88968.50644000004,
                "province1": "马那瓜省"
            },
            {
                "province0": "马里兰州",
                "sales_amount(SUM)0": 23705.523,
                "sales_amount(SUM)1": 23705.523,
                "province1": "马里兰州"
            },
            {
                "province0": "马雷",
                "sales_amount(SUM)0": 245.097,
                "sales_amount(SUM)1": 245.097,
                "province1": "马雷"
            },
            {
                "province0": "马鲁古群岛",
                "sales_amount(SUM)0": 155.9655,
                "sales_amount(SUM)1": 155.9655,
                "province1": "马鲁古群岛"
            },
            {
                "province0": "高原",
                "sales_amount(SUM)0": 1362.1799999999998,
                "sales_amount(SUM)1": 1362.1799999999998,
                "province1": "高原"
            },
            {
                "province0": "魁北克",
                "sales_amount(SUM)0": 10924.170000000004,
                "sales_amount(SUM)1": 10924.170000000004,
                "province1": "魁北克"
            },
            {
                "province0": "鲁伍马",
                "sales_amount(SUM)0": 273.456,
                "sales_amount(SUM)1": 273.456,
                "province1": "鲁伍马"
            },
            {
                "province0": "鸟取县",
                "sales_amount(SUM)0": 27.36,
                "sales_amount(SUM)1": 27.36,
                "province1": "鸟取县"
            },
            {
                "province0": "麦加",
                "sales_amount(SUM)0": 24534.86999999999,
                "sales_amount(SUM)1": 24534.86999999999,
                "province1": "麦加"
            },
            {
                "province0": "麦哲伦和智利南极区",
                "sales_amount(SUM)0": 1388.4199999999998,
                "sales_amount(SUM)1": 1388.4199999999998,
                "province1": "麦哲伦和智利南极区"
            },
            {
                "province0": "麦地那",
                "sales_amount(SUM)0": 4619.009999999999,
                "sales_amount(SUM)1": 4619.009999999999,
                "province1": "麦地那"
            },
            {
                "province0": "麦迪亚",
                "sales_amount(SUM)0": 122.88,
                "sales_amount(SUM)1": 122.88,
                "province1": "麦迪亚"
            },
            {
                "province0": "黑森",
                "sales_amount(SUM)0": 31317.216000000004,
                "sales_amount(SUM)1": 31317.216000000004,
                "province1": "黑森"
            },
            {
                "province0": "黑龙江省",
                "sales_amount(SUM)0": 42024.813000000024,
                "sales_amount(SUM)1": 42024.813000000024,
                "province1": "黑龙江省"
            }
        ],
        "queryJson": {
            "biSetId": "ef978a4db4b741dcbc4ed8bce159b141",
            "dataModelId": "b0bc98e469c34d6e8a289c29f914c298",
            "limit": null,
            "page": null,
            "rows": null,
            "x": [],
            "y": [],
            "colour": [
                {
                    "fieldId": "province0",
                    "field": "province",
                    "fieldAlias": "省1",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "size": [
                {
                    "fieldId": "sales_amount(SUM)0",
                    "field": "sales_amount",
                    "fieldAlias": "销售额1",
                    "order": "ASC",
                    "baseDataType": 4,
                    "dataType": 4,
                    "dimMea": 1,
                    "disCon": 1,
                    "aggregation": "SUM"
                }
            ],
            "angle": [
                {
                    "fieldId": "sales_amount(SUM)1",
                    "field": "sales_amount",
                    "fieldAlias": "销售额",
                    "order": "ASC",
                    "baseDataType": 4,
                    "dataType": 4,
                    "dimMea": 1,
                    "disCon": 1,
                    "aggregation": "SUM"
                }
            ],
            "detail": [],
            "label": [
                {
                    "fieldId": "province1",
                    "field": "province",
                    "fieldAlias": "省",
                    "order": "ASC",
                    "baseDataType": 1,
                    "dataType": 1,
                    "dimMea": 0,
                    "disCon": 0,
                    "aggregation": null
                }
            ],
            "filter": []
        },
        "drawHelper": {
            "meaAxis": null
        }
    }
}