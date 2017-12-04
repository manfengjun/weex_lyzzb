//
//  UIColoe+Extension.swift
//  HNLYSJB
//
//  Created by jun on 2017/5/22.
//  Copyright © 2017年 JUN. All rights reserved.
//

import UIKit

extension UIColor{
    
    /// RGB颜色
    ///
    /// - Parameters:
    ///   - r: r description
    ///   - g: g description
    ///   - b: b description
    /// - Returns: return value description
    class func rgbColor(r:CGFloat,g:CGFloat,b:CGFloat) -> UIColor {
        return UIColor(displayP3Red: r/255.0, green: g/255.0, blue: b/255.0, alpha: 1.0)
    }
    
    /// RGB颜色(透明度)
    ///
    /// - Parameters:
    ///   - r: r description
    ///   - g: g description
    ///   - b: b description
    ///   - a: a description
    /// - Returns: return value description
    
    class func rgbColor(r:CGFloat,g:CGFloat,b:CGFloat,a:CGFloat) -> UIColor {
        return UIColor(displayP3Red: r/255.0, green: g/255.0, blue: b/255.0, alpha: 1)
    }
    
    /// 16进制颜色
    ///
    /// - Parameter hex: hex description
    /// - Returns: return value description
    class func hexStringColor(hex: String) -> UIColor {
        var cString:String = hex.trimmingCharacters(in: NSCharacterSet.whitespacesAndNewlines).uppercased()
        
        if (cString.hasPrefix("#")) {
            cString = (cString as NSString).substring(from: 1)
        }
        
        if (cString.count != 6) {
            return UIColor.gray
        }
        
        let rString = (cString as NSString).substring(to: 2)
        let gString = ((cString as NSString).substring(from: 2) as NSString).substring(to: 2)
        let bString = ((cString as NSString).substring(from: 4) as NSString).substring(to: 2)
        
        var r:CUnsignedInt = 0, g:CUnsignedInt = 0, b:CUnsignedInt = 0;
        Scanner(string: rString).scanHexInt32(&r)
        Scanner(string: gString).scanHexInt32(&g)
        Scanner(string: bString).scanHexInt32(&b)
        
        return UIColor(red: CGFloat(r) / 255.0, green: CGFloat(g) / 255.0, blue: CGFloat(b) / 255.0, alpha: CGFloat(1))
    }
    
    /// 16进制颜色（透明度）
    ///
    /// - Parameters:
    ///   - hex: hex description
    ///   - alpha: alpha description
    /// - Returns: return value description
    class func hexStringColor(hex: String, alpha: CGFloat) -> UIColor {
        var cString:String = hex.trimmingCharacters(in: NSCharacterSet.whitespacesAndNewlines).uppercased()
        
        if (cString.hasPrefix("#")) {
            cString = (cString as NSString).substring(from: 1)
        }
        if (cString.count != 6) {
            return UIColor.gray
        }
        
        let rString = (cString as NSString).substring(to: 2)
        let gString = ((cString as NSString).substring(from: 2) as NSString).substring(to: 2)
        let bString = ((cString as NSString).substring(from: 4) as NSString).substring(to: 2)
        
        var r:CUnsignedInt = 0, g:CUnsignedInt = 0, b:CUnsignedInt = 0;
        Scanner(string: rString).scanHexInt32(&r)
        Scanner(string: gString).scanHexInt32(&g)
        Scanner(string: bString).scanHexInt32(&b)
        
        return UIColor(red: CGFloat(r) / 255.0, green: CGFloat(g) / 255.0, blue: CGFloat(b) / 255.0, alpha: alpha)
    }
    
    /// 随机颜色
    ///
    /// - Returns: return value description
    class func randomColor(alpha:CGFloat) -> UIColor {
        /**
         *  RGB 随机颜色
         */
        let red = CGFloat(arc4random_uniform(255))/CGFloat(255.0)
        let green = CGFloat( arc4random_uniform(255))/CGFloat(255.0)
        let blue = CGFloat(arc4random_uniform(255))/CGFloat(255.0)
        
        let color = UIColor(red:red, green:green, blue:blue , alpha: alpha)
        return color
    }
}
