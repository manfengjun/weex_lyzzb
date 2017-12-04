//
//  HomeViewController.swift
//  LYZZB_weex
//
//  Created by jun on 2017/12/4.
//  Copyright © 2017年 JUN. All rights reserved.
//

import UIKit

class HomeViewController: BaseViewController {
    var webViewModel: FJWebViewModel?

    override func viewDidLoad() {
        super.viewDidLoad()
        let path = "file://" + Bundle.main.bundlePath + "/lyzzb/js/home/home.js"
        let viewF = CGRect(x: 0, y: 64, width: SCREEN_WIDTH, height: SCREEN_HEIGHT - 64)
        webViewModel = FJWebViewModel(path: path, target: self, frame:viewF)
        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
