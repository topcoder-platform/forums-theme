<div id="headerNav"></div>

<script>
    const signInUrl = '{$SignInUrl}';
    const signUpUrl = '{$SignUpUrl}';
    const signOutUrl = '{$SignOutUrl}';
    {literal}
    !function(n,t,e,a,c,i,o){n['TcUnivNavConfig']=c,n[c]=n[c]||function(){
    (n[c].q=n[c].q??[]).push(arguments)},n[c].l=1*new Date();i=t.createElement(e),
    o=t.getElementsByTagName(e)[0];i.async=1;i.type="module";i.src=a;o.parentNode.insertBefore(i,o)
    }(window,document,"script","{/literal}{$UniversalNavUrl}{literal}","tcUniNav");
    {/literal}
    {if $User.SignedIn}
    const handle = '{$User.Name|escape:'html'}';
    const initials = handle ? handle.substr(0, 2).toUpperCase() : '';
    const userId = {$User.TopcoderUserID};
    const photoURL = '{$User.TopcoderPhotoUrl}';
    const user = {
        photoURL: photoURL,
        userId: userId,
        initials: initials,
        handle: handle,
    };
    {else}
    const user = null;
    {/if}
    {literal}
    tcUniNav('init', 'headerNav', {
        type: 'tool',
        toolName: 'Forums',
        user,
        signIn() {
            window.location.replace(signInUrl);
        },
        signOut() {
            window.location.replace(signOutUrl);
        },
        signUp() {
          window.location.replace(signUpUrl);
        }
    });

    tcUniNav('init', 'footerNav', {
        type: 'footer'
    });
    {/literal}
</script>
