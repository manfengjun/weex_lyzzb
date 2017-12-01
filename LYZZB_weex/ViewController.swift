//
//  ViewController.swift
//  LYZZB_weex
//
//  Created by jun on 2017/11/28.
//  Copyright © 2017年 JUN. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    lazy var instance: WXSDKInstance = {
        //创建WXSDKInstance对象
        var instance = WXSDKInstance()
        //设置weexInstance所在的控制器
        instance.viewController = self
        //设置weexInstance的frame
        instance.frame = self.view.frame
        //设置weexInstance用于渲染的`js`的URL路径(后面说明)
        instance.render(with: self.url, options: ["bundleUrl": self.url.absoluteString], data: nil)
        return instance
    }()
    //URL属性
    lazy var url:URL = {
        let filePath = "file://" + Bundle.main.bundlePath + "/lyzzb/js/index.js"
        return URL(string: filePath)!
    }()
    //视图
    var weexView:UIView?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
        // Do any additional setup after loading the view, typically from a nib.
    }
    //初始化
    func setupUI() {
        //设置weexInstance创建完毕回调
        instance.onCreate = { (view) in
            self.weexView = view
            self.weexView?.removeFromSuperview()
            self.view.addSubview(self.weexView!)
        }
        // 设置`weexInstance`出错的回调
        instance.onFailed = { (error) in
            print(error ?? "处理失败")
        }
        // 设置`weexInstance`出错的回调
        instance.renderFinish = { (view) in
            print("渲染完成")
        }
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

