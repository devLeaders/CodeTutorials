//
//  NSSplashScreen.h
//  mobile
//
//  Created by Justyna Kolenda on 17/04/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface NSSplashScreen : NSObject  <RCTBridgeModule>
+ (void)showSplash:(NSString*)splashScreen inRootView:(UIView*)rootView;
+ (void)show;
+ (void)hide;

@end

NS_ASSUME_NONNULL_END
