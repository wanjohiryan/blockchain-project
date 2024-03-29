package com.quantifi;


import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import android.os.Bundle;
import org.acra.ACRA;


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Quantifi";
  }
  /**react-native-gesture-handler*/
      @Override
      protected ReactActivityDelegate createReactActivityDelegate(){
        return new ReactActivityDelegate(this, getMainComponentName()) {
          @Override
          protected ReactRootView createRootView(){
            return new RNGestureHandlerEnabledRootView(MainActivity.this);
          }
        };
      }
  /*react-native-screens*/
  @Override
  protected void onCreate(Bundle savedInstanceState){
    super.onCreate(null);
  }
  
}
