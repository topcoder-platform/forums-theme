<?php defined('APPLICATION') or die();
/**
 * Sample implementation of a theme hooks class to show
 * the use of custom Smarty plugins.
 */

/**
 * Class KeystoneThemeHooks
 */
class TopcoderThemeHooks extends \Gdn_Plugin {

    /**
     * Run once on enable.
     *
     * @return void
     */
    public function setup() {
      // Set some config settings for a table layout & mobile theme
      saveToConfig(array(
          'Vanilla.Discussions.Layout' => 'modern',
          'Vanilla.Categories.Layout' => 'modern',
          'Garden.MobileTheme' => 'topcoder'
      ), null, true);
      return true;
    }
}
