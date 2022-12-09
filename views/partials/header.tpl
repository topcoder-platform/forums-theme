<div id="headerNav"></div>
{literal}
<script>
    var UNI_NAV_PROD_URL = '//uni-nav.topcoder.com/v1/tc-universal-nav.js';
    var UNI_NAV_DEV_URL = '//uni-nav.topcoder-dev.com/v1/tc-universal-nav.js';

    var TOPCODER_DOMAIN = 'topcoder.com'
    var isProdEnv = window.location.hostname && window.location.hostname.includes(TOPCODER_DOMAIN);
    var scriptURL = isProdEnv ? UNI_NAV_PROD_URL : UNI_NAV_DEV_URL;

    !function(n,t,e,a,c,i,o){n['TcUnivNavConfig']=c,n[c]=n[c]||function(){
    (n[c].q=n[c].q??[]).push(arguments)},n[c].l=1*new Date();i=t.createElement(e),
    o=t.getElementsByTagName(e)[0];i.async=1;i.type="module";i.src=a;o.parentNode.insertBefore(i,o)
    }(window,document,"script",scriptURL,"tcUniNav");

    var user;

    if ('{/literal}{$User.SignedIn}{literal}') {
        var photoUrl = '{/literal}{$User.Photo}{literal}' != null ? '{/literal}{$User.Photo}{literal}' : undefined;
        var userId = null; // leaving it empty as it's currently not available
        var handle = '{/literal}{$User.Name|escape:'html'}{literal}';
        var initials = handle ? handle.substr(0, 2).toUpperCase() : '';

        user = {
            photoUrl,
            userId,
            initials,
            handle
        };
    }

    tcUniNav('init', 'headerNav', {
        type: 'tool',
        toolName: 'Forums',
        user,
        signIn() {
            window.location.href = '/entry/signin?Source=forum';
        },
        signOut() {
            var signOutUrl = '/entry/signout';
            if (window.gdn && window.gdn.meta && window.gdn.meta.TransientKey) {
                signOutUrl += '?TransientKey=' + window.gdn.meta.TransientKey;
            }
            window.location.href = signOutUrl;
        },
        signUp() {
            window.location.href = '/entry/register?Target=discussions';
        }
    });

    tcUniNav('init', 'footerNav', {
        type: 'footer'
    });

</script>
{/literal}