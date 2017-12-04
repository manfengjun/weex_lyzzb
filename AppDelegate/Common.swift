//
//  Common.swift
//  HNLYSJB
//
//  Created by jun on 2017/5/20.
//  Copyright © 2017年 JUN. All rights reserved.
//

import UIKit
/// 屏幕宽度
let SCREEN_WIDTH = UIScreen.main.bounds.width
/// 屏幕高度
let SCREEN_HEIGHT = UIScreen.main.bounds.height
/// 屏幕bounds
let SCREEN_BOUNDS = UIScreen.main.bounds


/// 字体大小
let FONT_SIZE = 12
/// 字体
let FONT_NAME = "Microsoft YaHei"




/// NavigationBar颜色
let BAR_TINTCOLOR = UIColor.hexStringColor(hex: "#E71F19")
//UIColor.hexStringColor(hex: "#F4F4F4")
let HOME_BAR_TINTCOLOR = UIColor.hexStringColor(hex: "#E71F19")


/// 判断iPhoneX
///
/// - Returns:
func isIphoneX() -> Bool {
    if UIScreen.main.bounds.height == 812 {
        return true
    }
    
    return false
}


/// 通知名称
// 选择商品属性
let SelectProductProperty = NSNotification.Name(rawValue: "SelectProductProperty")
// 微信支付回调
let WeiXinPayNotification = NSNotification.Name(rawValue: "WeiXinPayNotification")
// 支付宝支付回调
let AliPayPayNotification = NSNotification.Name(rawValue: "AliPayPayNotification")
// 订单操作刷新
let OrderListRefreshNotification = NSNotification.Name(rawValue: "AliPayPayNotification")
// 分类ID选择
let SectionIDSelectedNotification = NSNotification.Name(rawValue: "SectionIDSelectedNotification")
// 搜索后购物车选择
let CartSelectedNotification = NSNotification.Name(rawValue: "CartSelectedNotification")


/// 回调闭包
/// 返回Int
typealias ResultClosure = (_ number: Int)->()

