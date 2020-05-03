{assign
"linkFormat"
"<div class='Navigation-linkContainer'>
  <a href='%url' class='Navigation-link %class'>
    %text
  </a>
</div>"
}

<div class="Frame-header">
  <header id="MainHeader" class="Header">
    <div class="Container">
      <div class="row">
        <div class="Hamburger">
          <button class="Hamburger Hamburger-menuXcross" id="menu-button" aria-label="toggle menu">
            <span class="Hamburger-menuLines" aria-hidden="true" />
            <span class="Hamburger-visuallyHidden sr-only">
              {t c="toggle menu"}
            </span>
          </button>
        </div>
        <a href="{home_link format=" %url"}" class="Header-logo">
          <img src="/themes/topcoder-theme/design/images/topcoder-logo.png"></img>
        </a>
        <a href="{home_link format=" %url"}" class="Header-logo mobile">
          <img src="/themes/topcoder-theme/design/images/topcoder-logo.png"></img>
        </a>
        <nav class="Header-desktopNav">
          {categories_link format=$linkFormat}
          {discussions_link format=$linkFormat}
          {custom_menu format=$linkFormat}
        </nav>
        <div class="Header-flexSpacer"></div>
        <div class="Header-right">
          {community_chooser buttonType='titleBarLink' buttonClass='Header-desktopCommunityChooser'}
          <div class="MeBox-header">
            {module name="MeModule" CssClass="FlyoutRight"}
          </div>
          {if $User.SignedIn}
          <button class="mobileMeBox-button">
            <span class="Photo PhotoWrap">
              <img src="{$User.Photo|escape:'html'}" class="ProfilePhotoSmall" alt="{t c='Avatar'}">
            </span>
          </button>
          {/if}
        </div>
      </div>
    </div>
    <nav class="Navigation needsInitialization js-nav">
      <div class="Container">
        {$smarty.capture.menu}
        <div class='Navigation-linkContainer'>
          {community_chooser buttonType='reset' fullWidth=true buttonClass='Navigation-link'}
        </div>
      </div>
    </nav>
    <nav class="mobileMebox js-mobileMebox needsInitialization">
      <div class="Container">
        {module name="MeModule"}
        <button class="mobileMebox-buttonClose Close">
          <span>×</span>
        </button>
      </div>
    </nav>
  </header>
</div>