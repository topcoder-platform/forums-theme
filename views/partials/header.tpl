{assign
"linkFormat"
"<div class='Navigation-linkContainer'>
  <a href='%url' class='Navigation-link %class'>
    %text
  </a>
</div>"
}

<div class="Frame-header">
  <header id="MainHeader" class="Header-Top Header">
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

        <a href="{home_link format=" %url"}" class="Header-logo mobile">
          <img src="/themes/topcoder-theme/design/images/topcoder-logo.svg"></img>
        </a>

        <nav class="Header-desktopNav">
          <a class="Topcoder-logo" href="{home_link format=" %url"}"
            ><img src="/themes/topcoder-theme/design/images/topcoder-logo.svg"></img></a
          ><span class="Header-separator"></span
          ><a class="Header-primary-item" href="https://www.topcoder.com"
            >BUSINESS</a
          ><span class="Header-separator"></span
          ><a class="Header-primary-item">COMMUNITY</a>
          <div class="Header-secondary-menu">
            <a class="Header-secondary-item">Compete</a
            ><a class="Header-secondary-item">Tracks</a
            ><a class="Header-secondary-item selected">Explore</a>
          </div>
        </nav>



        <div class="Header-flexSpacer"></div>
        <div class="Header-right">
          {community_chooser buttonType='titleBarLink' buttonClass='Header-desktopCommunityChooser'}
          <div class="MeBox-header Header-right-Item">
            {module name="MeModule" CssClass="FlyoutRight"}
          </div>
          {if $User.SignedIn}
          <button class="mobileMeBox-button">
            <span class="Photo PhotoWrap">
              <img src="{$User.Photo|escape:'html'}" class="ProfilePhotoSmall" alt="{t c='Avatar'}">
            </span>
          </button>
          {/if}
          <div
            class="Header-right-Item"
          >
            <img src="/themes/topcoder-theme/design/images/icon-search.svg"></img>
          </div>
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

  <div class="Header-Second-Menu">
    <div class="Second-Menu-Content">
      <a
        class="Second-Menu-Link"
        href="javascript:;"
        ><span>TCO</span
        ></a
      >
      <a
        class="Second-Menu-Link"
        href="javascript:;"
        ><span>Programs</span
        ></a
      >
      <a
        class="Second-Menu-Link selected"
        href="javascript:;"
        ><span>Forums</span
        ></a
      ><a
        class="Second-Menu-Link"
        href="javascript:;"
        target=""
        ><span>Statistics</span
        ></a
      ><a class="Second-Menu-Link"
        href="javascript:;"
        ><span>Blog</span></a
      >
      <a
        class="Second-Menu-Link"
        href="/challenges"
        ><span>Thrive</span
        ></a
      >
    </div>
  </div>

</div>