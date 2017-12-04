//
//  FJWebViewModel.swift
//  LYZZB_weex
//
//  Created by jun on 2017/12/4.
//  Copyright © 2017年 JUN. All rights reserved.
//

import UIKit

class FJWebViewModel: NSObject {
    //WXSDKInstance对象
    var instance: WXSDKInstance?
    //控制器
    var viewController : UIViewController?
    //URL属性
    var url:URL?
    //frame
    var viewF:CGRect?
    //视图
    var weexView:UIView?
    
    init(path: String, target:UIViewController, frame:CGRect) {
        super.init()
        url = URL(string: path)!
        viewF = frame
        viewController = target
        //初始化
        setupUI()
    }
    
    //初始化
    func setupUI() {
        //创建WXSDKInstance对象
        instance = WXSDKInstance()
        //设置weexInstance所在的控制器
        instance?.viewController = viewController
        //设置weexInstance的frame
        instance?.frame = viewF!
        //设置weexInstance用于渲染的`js`的URL路径(后面说明)
        instance?.render(with: url, options: ["bundleUrl": url!.absoluteString], data: nil)
        //设置weexInstance创建完毕回调
        instance?.onCreate = { (view) in
            self.weexView = view
            self.weexView?.removeFromSuperview()
            self.viewController?.view.addSubview(self.weexView!)
            
        }
        // 设置`weexInstance`出错的回调
        instance?.onFailed = { (error) in
            print(error ?? "处理失败")
        }
        // 设置`weexInstance`出错的回调
        instance?.renderFinish = { (view) in
            print("渲染完成")
        }
    }
    deinit {
        instance?.destroy()
    }
}
