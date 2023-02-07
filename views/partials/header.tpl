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
    {literal}
    tcUniNav('init', 'headerNav', {
        type: 'tool',
        toolName: 'Forums',
        user: 'auto',
        toolRoot: '/',
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
