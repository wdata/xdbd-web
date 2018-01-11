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
        "reoords": [
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
        "reoords": [
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
        "reoords": [
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
        "reoords": [
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
        "reoords": [
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
        "reoords": [
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
        "reoords": [
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
        "reoords": [
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
        "reoords": [
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
        "reoords": [
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