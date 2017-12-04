//
//  ViewController.swift
//  LYZZB_weex
//
//  Created by jun on 2017/11/28.
//  Copyright © 2017年 JUN. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    var webViewModel: FJWebViewModel?
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        let path = "file://" + Bundle.main.bundlePath + "/lyzzb/js/home/home.js"
        let viewF = CGRect(x: 0, y: 64, width: SCREEN_WIDTH, height: SCREEN_HEIGHT - 64)
        webViewModel = FJWebViewModel(path: path, target: self, frame:viewF)
        // Do any additional setup after loading the view, typically from a nib.
    }
    
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    
}

