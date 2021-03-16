{assign
"linkFormat"
"<div class='Navigation-linkContainer'>
  <a href='%url' class='Navigation-link %class'>
    %text
  </a>
</div>"
}

<div class="Frame-header toggle-mobile-close">
  <header id="MainHeader" class="Header-Top Header">
    <div class="Container">
      <div class="row">
        <span id="menu-button" class="hide"></span>
        <span class="hide-desktop menu-icon-mobile">
          <img class="icon-menu" src="/themes/topcoder/design/images/icon-menu.svg" />
          <img class="icon-menu-close" width="16" src="/themes/topcoder/design/images/icon-close.svg" />
        </span>
        <nav class="Header-desktopNav hide-mobile">
          <a class="Topcoder-logo" href="{home_link format=" %url"}">
            <img src="/themes/topcoder/design/images/topcoder-logo.svg" />
          </a>
          <span class="Header-separator"></span>
          <a class="Header-primary-item" href="https://www.topcoder.com">BUSINESS</a>
          <span class="Header-separator"></span>
          <a class="Header-primary-item primary-item-community">COMMUNITY</a>
          <div class="Header-secondary-menu">
            <a class="Header-secondary-item primary-item-compete">Compete</a>
            <a class="Header-secondary-item primary-item-tracks">Tracks</a>
            <a class="Header-secondary-item selected primary-item-explore">Explore</a>
            <div class="Header-Primary-more-content-container">
              <a class="Header-secondary-item primary-item-more"><span>More</span> <img src="/themes/topcoder/design/images/icon-down-white.svg" /></a>
              <div class="Header-Primary-more-content">
                <a class="Header-secondary-item primary-item-compete">Compete</a>
                <a class="Header-secondary-item primary-item-tracks">Tracks</a>
                <a class="Header-secondary-item selected primary-item-explore">Explore</a>
              </div>
            </div>

          </div>
        </nav>
        <a class="Topcoder-logo hide-desktop" href="{home_link format=" %url"}"><img width="54" src="/themes/topcoder/design/images/topcoder-logo.svg"></img></a>

        <div class="Header-flexSpacer hide-mobile"></div>
        <div class="Header-right">
          <div class="MeBox-header Header-right-Item hide-mobile">
            {module name="TopcoderMeModule" CssClass="FlyoutRight"}
          </div>
          {if $User.SignedIn}
          <button class="mobileMeBox-button">
            <span class="Photo PhotoWrap">
              <img src="{$User.Photo|escape:'html'}" class="ProfilePhotoSmall" alt="{t c='Avatar'}">
            </span>
          </button>
          {/if}
          <div class="Header-right-Item hide-mobile">
            <a class="Search" href="/search"><img src="/themes/topcoder/design/images/icon-search.svg"></img></a>
          </div>
        </div>
      </div>
    </div>
    <nav class="Navigation needsInitialization js-nav">
      <div class="Container">
        {$smarty.capture.menu}
      </div>
    </nav>
    <nav class="mobileMebox js-mobileMebox needsInitialization">
      <div class="Container">
        {module name="TopcoderMeModule"}
        <button class="mobileMebox-buttonClose Close">
          <span>×</span>
        </button>
      </div>
    </nav>
  </header>



  <div class="Header-Second-Menu Explore-Menu hide-mobile">
    <div class="Second-Menu-Content">
      <a class="Second-Menu-Link" href="https://www.topcoder.com/community/member-programs/topcoder-open"><span>TCO</span></a>
      <a class="Second-Menu-Link" href="https://www.topcoder.com/community/member-programs"><span>Programs</span></a>
      <a class="Second-Menu-Link selected" href="javascript:;"><span>Forums</span></a><a class="Second-Menu-Link" href="https://www.topcoder.com/community/statistics" target=""><span>Statistics</span></a><a class="Second-Menu-Link" href="https://www.topcoder.com/blog"><span>Blog</span></a>
      <a class="Second-Menu-Link" href="https://www.topcoder.com/thrive"><span>Thrive</span></a>
    </div>
  </div>

  <div class="Header-Second-Menu Tracks-Menu hide hide-mobile">
    <div class="Second-Menu-Content">
      <a class="Second-Menu-Link" href="https://www.topcoder.com/thrive/tracks?track=Competitive%20Programming"><span>Competitive Programming</span></a>
      <a class="Second-Menu-Link" href="https://www.topcoder.com/thrive/tracks?track=Data%20Science&tax="><span>Data Science</span></a>
      <a class="Second-Menu-Link" href="https://www.topcoder.com/thrive/tracks?track=Design&tax="><span>Design</span></a><a class="Second-Menu-Link" href="https://www.topcoder.com/thrive/tracks?track=Development&tax=" target=""><span>Development</span></a><a class="Second-Menu-Link" href="https://www.topcoder.com/thrive/tracks?track=QA&tax="><span>QA</span></a>
    </div>
  </div>

  <div class="Header-Second-Menu Compete-Menu hide hide-mobile">
    <div class="Second-Menu-Content">
      <a class="Second-Menu-Link" href="https://www.topcoder.com/challenges"><span>All Challenges</span></a>
      <a class="Second-Menu-Link" href="https://arena.topcoder.com"><span>Competitive Programming</span></a>
      <a class="Second-Menu-Link" href="https://www.topcoder.com/gigs" target=""><span>Gig Work</span></a>
    </div>
  </div>
  {if $User.SignedIn}
  <div class="Header-Second-Menu Community-Menu hide hide-mobile">
    <div class="Second-Menu-Content">
      <a class="Second-Menu-Link" href="https://www.topcoder.com/my-dashboard"><span>Dashboard</span></a>
      <a class="Second-Menu-Link" href="https://www.topcoder.com/members/{$User.Name|escape:'html'}"><span>My Profile</span></a>
      <a class="Second-Menu-Link" href="https://community.topcoder.com/PactsMemberServlet?module=PaymentHistory&full_list=false" target="_blank"><span>Payments</span></a>
    </div>
  </div>
  {else}
    <div class="Header-Second-Menu Community-Menu hide hide-mobile">
      <div class="Second-Menu-Content">
        <a class="Second-Menu-Link" href="https://www.topcoder.com/community/learn"><span>Overview</span></a>
        <a class="Second-Menu-Link" href="https://www.topcoder.com/thrive/tracks?track=Topcoder"><span>How It Works</span></a>
      </div>
    </div>
  {/if}
  <div class="Header-Primary-container-Mobile hide-desktop">
    <div class="Header-Primary-Mobile hide-desktop">
      <a class="flex-1 center-child" href="https://www.topcoder.com">BUSINESS</a>
      <span class="Header-separator"></span>
      <a class="flex-1 center-child selected">COMMUNITY</a>
    </div>

    <div class="Header-Primary-Sub-Mobile ">
      <a class="primary-item-compete">Compete</a>
      <a class="primary-item-tracks">Tracks</a>
      <a class="primary-item-explore selected">Explore</a></div>
  </div>

  <div class="Header-Second-Menu-mobile Explore-Menu hide-desktop">
    <div class="Second-Menu-Toggle-Button">
      <span>Explore</span>
      <img src="/themes/topcoder/design/images/icon-down-small.svg"></img>
    </div>
    <div class="Second-Menu-Content">
      <a class="Second-Menu-Link" href="https://www.topcoder.com/community/member-programs/topcoder-open"><span>TCO</span></a>
      <a class="Second-Menu-Link" href="https://www.topcoder.com/community/member-programs"><span>Programs</span></a>
      <a class="Second-Menu-Link selected" href="javascript:;"><span>Forums</span></a><a class="Second-Menu-Link" href="https://www.topcoder.com/community/statistics" target=""><span>Statistics</span></a><a class="Second-Menu-Link" href="https://www.topcoder.com/blog"><span>Blog</span></a>
      <a class="Second-Menu-Link" href="https://www.topcoder.com/thrive"><span>Thrive</span></a>
    </div>
  </div>

  <div class="Header-Second-Menu-mobile Compete-Menu hide-desktop hide">
    <div class="Second-Menu-Toggle-Button">
      <span>Compete</span>
      <img src="/themes/topcoder/design/images/icon-down-small.svg"></img>
    </div>
    <div class="Second-Menu-Content">
      <a class="Second-Menu-Link" href="https://www.topcoder.com/challenges"><span>All Challenges</span></a>
      <a class="Second-Menu-Link" href="https://arena.topcoder.com"><span>Competitive Programming</span></a>
      <a class="Second-Menu-Link" href="https://www.topcoder.com/community/taas" target=""><span>Gig Work</span></a>
    </div>
  </div>

  <div class="Header-Second-Menu-mobile Tracks-Menu hide-desktop hide">
    <div class="Second-Menu-Toggle-Button">
      <span>Tracks</span>
      <img src="/themes/topcoder/design/images/icon-down-small.svg"></img>
    </div>
    <div class="Second-Menu-Content">
      <a class="Second-Menu-Link" href="https://www.topcoder.com/thrive/tracks?track=Competitive%20Programming"><span>Competitive Programming</span></a>
      <a class="Second-Menu-Link" href="https://www.topcoder.com/thrive/tracks?track=Data%20Science&tax="><span>Data Science</span></a>
      <a class="Second-Menu-Link" href="https://www.topcoder.com/thrive/tracks?track=Design&tax="><span>Design</span></a><a class="Second-Menu-Link" href="https://www.topcoder.com/thrive/tracks?track=Development&tax=" target=""><span>Development</span></a><a class="Second-Menu-Link" href="https://www.topcoder.com/thrive/tracks?track=QA&tax="><span>QA</span></a>
    </div>
  </div>


</div>