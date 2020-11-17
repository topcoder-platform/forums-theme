<!DOCTYPE html>
<html lang="{$CurrentLocale.Key}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    {asset name="Head"}
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700,700i" rel="stylesheet">
    {literal}
    <script>
      !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.13.1";
              analytics.load("pw30u8gMK8RIZ8Z4JCBCGZDH7gg5Mbf6");
              analytics.page();
              }}();
    </script>
    {/literal}
</head>

{assign
"linkFormat"
"<div class='Navigation-linkContainer'>
        <a href='%url' class='Navigation-link %class'>
            %text
        </a>
    </div>"
}

{capture name="menu"}
    {if $User.SignedIn}
        <div class="Navigation-row NewDiscussion">
            <div class="NewDiscussion mobile">
                {module name="NewDiscussionModule" reorder=$DataDrivenTitleBar}
            </div>
        </div>
    {else}
        {if !$DataDrivenTitleBar}
            <div class="Navigation-row">
                <div class="SignIn mobile">
                    {module name="TopcoderMeModule"}
                </div>
            </div>
        {/if}
    {/if}

    {if !$DataDrivenTitleBar}
        {categories_link format=$linkFormat}
        {discussions_link format=$linkFormat}
        {custom_menu format=$linkFormat}
        {activity_link format=$linkFormat}

    {/if}
{/capture}

{assign var="SectionGroups" value=(isset($Groups) || isset($Group))}
{assign var="TemplateCss" value="
    {if $User.SignedIn}
        UserLoggedIn
    {else}
        UserLoggedOut
    {/if}

    {if inSection('Discussion') and $Page gt 1}
        isNotFirstPage
    {/if}

    {if inSection('Group') && !isset($Group.Icon)}
        noGroupIcon
    {/if}

    locale-{$CurrentLocale.Lang}
"}
<body id="{$BodyID}" class="{$BodyClass}{$TemplateCss|strip:" "}">

    <!--[if lt IE 9]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <div class="Frame" id="page">
        <div class="Frame-top">
            {if $DataDrivenTitleBar}
                <header id="titleBar" data-react="title-bar-hamburger" style="display: none!important;" data-unhide="true">
                    {$smarty.capture.menu}
                </header>
            {else}
                {include file="partials/header.tpl"}
            {/if}
            <div class="Frame-body">
                <div class="Frame-content">
                    <div class="Container">
                        <div class="Frame-contentWrap">
                            <div class="Frame-details">
                                {if !$isHomepage}
                                    <div class="Frame-row">
                                        <nav class="BreadcrumbsBox">
                                            {breadcrumbs}
                                        </nav>
                                    </div>
                                {/if}
                                {if !$DataDrivenTitleBar}
                                    <div class="Frame-row SearchBoxMobile">
                                        {if !$SectionGroups && !inSection(["SearchResults"])}
                                            <div class="SearchBox js-sphinxAutoComplete" role="search">
                                                {if $hasAdvancedSearch === true}
                                                    {module name="AdvancedSearchModule"}
                                                {else}
                                                    {searchbox}
                                                {/if}
                                            </div>
                                        {/if}
                                    </div>
                                {/if}
                                <div class="Frame-row Frame-row-main">
                                    <main class="Content MainContent">
                                        {if inSection("Profile")}
                                            <div class="Profile-header">
                                                <div class="Profile-photo">
                                                    <div class="PhotoLarge">
                                                        {module name="UserPhotoModule"}
                                                    </div>
                                                </div>
                                                <div class="Profile-name">
                                                    <h1 class="Profile-username">
                                                        {$Profile.Name|escape:'html'}
                                                    </h1>
                                                    {if isset($Rank)}
                                                        <span class="Profile-rank">{$Rank.Label|escape:'html'}</span>
                                                    {/if}
                                                </div>
                                            </div>
                                        {/if}
                                        {asset name="Content"}
                                    </main>
                                    <aside class="Panel Panel-main">
                                        {if !$SectionGroups && !$DataDrivenTitleBar && !inSection(["SearchResults"])}
                                            <div class="SearchBox js-sphinxAutoComplete" role="search">
                                                {searchbox}
                                            </div>
                                        {/if}
                                        {asset name="Panel"}
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Frame-footer">
            {include file="partials/footer.tpl"}
        </div>
    </div>
    <div id="modals"></div>
    {event name="AfterBody"}
</body>

</html>
