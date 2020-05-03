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
          ><a class="Header-primary-item primary-item-community">COMMUNITY</a>
          <div class="Header-secondary-menu">
            <a class="Header-secondary-item primary-item-compete">Compete</a
            ><a class="Header-secondary-item primary-item-tracks">Tracks</a
            ><a class="Header-secondary-item selected primary-item-explore">Explore</a>
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

  <div class="Header-Second-Menu Explore-Menu">
    <div class="Second-Menu-Content">
      <a
        class="Second-Menu-Link"
        href="https://www.topcoder.com/community/member-programs/topcoder-open"
        ><span>TCO</span
        ></a
      >
      <a
        class="Second-Menu-Link"
        href="https://www.topcoder.com/community/member-programs"
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
        href="https://www.topcoder.com/community/statistics"
        target=""
        ><span>Statistics</span
        ></a
      ><a class="Second-Menu-Link"
        href="https://www.topcoder.com/blog"
        ><span>Blog</span></a
      >
      <a
        class="Second-Menu-Link"
        href="https://www.topcoder.com/thrive"
        ><span>Thrive</span
        ></a
      >
    </div>
  </div>

  <div class="Header-Second-Menu Tracks-Menu hide">
    <div class="Second-Menu-Content">
      <a
        class="Second-Menu-Link"
        href="https://www.topcoder.com/thrive/tracks?track=Competitive%20Programming"
        ><span>Competitive Programming</span
        ></a
      >
      <a
        class="Second-Menu-Link"
        href="https://www.topcoder.com/thrive/tracks?track=Data%20Science&tax="
        ><span>Data Science</span
        ></a
      >
      <a
        class="Second-Menu-Link"
        href="https://www.topcoder.com/thrive/tracks?track=Design&tax="
        ><span>Design</span
        ></a
      ><a
        class="Second-Menu-Link"
        href="https://www.topcoder.com/thrive/tracks?track=Development&tax="
        target=""
        ><span>Development</span
        ></a
      ><a class="Second-Menu-Link"
        href="https://www.topcoder.com/thrive/tracks?track=QA&tax="
        ><span>QA</span></a
      >
    </div>
  </div>

  <div class="Header-Second-Menu Compete-Menu hide">
    <div class="Second-Menu-Content">
      <a
        class="Second-Menu-Link"
        href="https://www.topcoder.com/challenges"
        ><span>All Challenges</span
        ></a
      >
      <a
        class="Second-Menu-Link"
        href="https://arena.topcoder.com"
        ><span>Competitive Programming</span
        ></a
      >
      <a
        class="Second-Menu-Link"
        href="https://www.topcoder.com/community/taas"
        target=""
        ><span>Gig Work</span
        ></a
      >
    </div>
  </div>

  <div class="Header-Second-Menu Community-Menu hide">
    <div class="Second-Menu-Content">
      <a
        class="Second-Menu-Link"
        href="https://www.topcoder.com/my-dashboard"
        ><span>Dashboard</span
        ></a
      >
      <a
        class="Second-Menu-Link"
        href="https://www.topcoder.com/members/{if $User.SignedIn}{$Profile.Name|escape:'html'}{/if}"
        ><span>My Profile</span
        ></a
      >
      <a
        class="Second-Menu-Link"
        href="https://community.topcoder.com/PactsMemberServlet?module=PaymentHistory&full_list=false"
        target="_blank"
        ><span>Payments</span
        ></a
      >
    </div>
  </div>

</div>