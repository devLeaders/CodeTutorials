package com.mobile;
//czy packge nie musi byc identyczny z tym w firebase? pl.devleaders
//pl.devleaders.codetutorials ??? + zmiana w serive-google?


// import android.os.Bundle;

import com.facebook.react.ReactActivity;
// import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {
  /**
   @Override
   protected void onCreate(Bundle savedInstanceState) {
   SplashScreen.show(this);
   super.onCreate(savedInstanceState);
   }
   *//**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "mobile";
  }
}
