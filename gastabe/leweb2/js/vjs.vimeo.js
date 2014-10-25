


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>videojs-vimeo/vjs.vimeo.js at master · eXon/videojs-vimeo · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe123-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (2012-05-25, TCS patched 2012-05-27, GitHub v1.0.36) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="C3052AAF:3B8E:116CBE02:5265757B" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="bs2M9HtGiyVMbRtK2y5mx0HVAxy2BXUlryF2LOWH1F8=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-d6774860c472c858fefc70ae054086830bd30176.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-67a69fecb8a1f29cea07c1b7f437a9ad4573f0b4.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-8a61e23841d9e5ecc084748ec552e548cd05c977.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-a3b3709d87ed3ca2cd30bf660f8567ac67249e1e.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="7dcf1f87bdf05e208cb50b4c57177a4e">

        <link data-pjax-transient rel='permalink' href='/eXon/videojs-vimeo/blob/0b13d8059fb4450e061737824e96a430e70637c6/vjs.vimeo.js'>
  <meta property="og:title" content="videojs-vimeo"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/eXon/videojs-vimeo"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="videojs-vimeo - Support Vimeo source for Video.js"/>

  <meta name="description" content="videojs-vimeo - Support Vimeo source for Video.js" />

  <meta content="280982" name="octolytics-dimension-user_id" /><meta content="eXon" name="octolytics-dimension-user_login" /><meta content="9238617" name="octolytics-dimension-repository_id" /><meta content="eXon/videojs-vimeo" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="9238617" name="octolytics-dimension-repository_network_root_id" /><meta content="eXon/videojs-vimeo" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/eXon/videojs-vimeo/commits/master.atom" rel="alternate" title="Recent Commits to videojs-vimeo:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production windows vis-public  page-blob">
    <div class="wrapper">
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/signup">Sign up</a>
      <a class="button signin" href="/login?return_to=%2FeXon%2Fvideojs-vimeo%2Fblob%2Fmaster%2Fvjs.vimeo.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey=" s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="eXon/videojs-vimeo"
      data-branch="master"
      data-sha="85dc738d78e117f88fb1b5513c9c2f912eb9b375"
  >

    <input type="hidden" name="nwo" value="eXon/videojs-vimeo" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
  <a href="/login?return_to=%2FeXon%2Fvideojs-vimeo"
  class="minibutton with-count js-toggler-target star-button entice tooltipped upwards"
  title="You must be signed in to use this feature" rel="nofollow">
  <span class="octicon octicon-star"></span>Star
</a>
<a class="social-count js-social-count" href="/eXon/videojs-vimeo/stargazers">
  12
</a>

  </li>

    <li>
      <a href="/login?return_to=%2FeXon%2Fvideojs-vimeo"
        class="minibutton with-count js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/eXon/videojs-vimeo/network" class="social-count">
        3
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/eXon" class="url fn" itemprop="url" rel="author"><span itemprop="title">eXon</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/eXon/videojs-vimeo" class="js-current-repository js-repo-home-link">videojs-vimeo</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/eXon/videojs-vimeo" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /eXon/videojs-vimeo">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/eXon/videojs-vimeo/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /eXon/videojs-vimeo/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/eXon/videojs-vimeo/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /eXon/videojs-vimeo/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/eXon/videojs-vimeo/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /eXon/videojs-vimeo/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/eXon/videojs-vimeo/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /eXon/videojs-vimeo/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/eXon/videojs-vimeo/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /eXon/videojs-vimeo/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/eXon/videojs-vimeo.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/eXon/videojs-vimeo.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/eXon/videojs-vimeo" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/eXon/videojs-vimeo" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

              <a href="/eXon/videojs-vimeo/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:2dea0c12e975b86a1299f367f3fb6eab -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/eXon/videojs-vimeo/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eXon/videojs-vimeo/blob/master/vjs.vimeo.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/eXon/videojs-vimeo" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">videojs-vimeo</span></a></span></span><span class="separator"> / </span><strong class="final-path">vjs.vimeo.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="vjs.vimeo.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://1.gravatar.com/avatar/678c4d24215553c1c5ba0f6a09c37e0c?d=https%3A%2F%2Fidenticons.github.com%2F9589203d857780bc28de632977db6fe2.png&amp;s=140" width="24" />
    <span class="author"><a href="/eXon" rel="author">eXon</a></span>
    <time class="js-relative-date" datetime="2013-07-14T08:17:35-07:00" title="2013-07-14 08:17:35">July 14, 2013</time>
    <div class="commit-title">
        <a href="/eXon/videojs-vimeo/commit/0b13d8059fb4450e061737824e96a430e70637c6" class="message" data-pjax="true" title="Completely rewritten for VideoJS 4.1">Completely rewritten for VideoJS 4.1</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/678c4d24215553c1c5ba0f6a09c37e0c?d=https%3A%2F%2Fidenticons.github.com%2F9589203d857780bc28de632977db6fe2.png&amp;s=140" width="24" />
            <a href="/eXon">eXon</a>
          </li>
      </ul>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>16 lines (16 sloc)</span>
        <span>6.792 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped leftwards"
               href="http://windows.github.com" title="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled js-entice" href=""
                 data-entice="You must be signed in to make or propose changes">Edit</a>
          <a href="/eXon/videojs-vimeo/raw/master/vjs.vimeo.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/eXon/videojs-vimeo/blame/master/vjs.vimeo.js" class="button minibutton ">Blame</a>
          <a href="/eXon/videojs-vimeo/commits/master/vjs.vimeo.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon js-entice" href=""
             data-entice="You must be signed in and on a branch to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><span class="kd">var</span> <span class="nx">VimeoState</span><span class="o">=</span><span class="p">{</span><span class="nx">UNSTARTED</span><span class="o">:-</span><span class="mi">1</span><span class="p">,</span><span class="nx">ENDED</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">PLAYING</span><span class="o">:</span><span class="mi">1</span><span class="p">,</span><span class="nx">PAUSED</span><span class="o">:</span><span class="mi">2</span><span class="p">,</span><span class="nx">BUFFERING</span><span class="o">:</span><span class="mi">3</span><span class="p">};</span></div><div class='line' id='LC2'><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="o">=</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">MediaTechController</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span><span class="nx">init</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">){</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">MediaTechController</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="o">=</span><span class="nx">a</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_el_</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">id</span><span class="p">());</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">controls</span><span class="p">(</span><span class="o">!</span><span class="mi">1</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">options</span><span class="p">().</span><span class="nx">src</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/</span><span class="p">))</span><span class="k">this</span><span class="p">.</span><span class="nx">videoId</span><span class="o">=</span><span class="nx">a</span><span class="p">[</span><span class="mi">5</span><span class="p">];</span><span class="k">this</span><span class="p">.</span><span class="nx">id_</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">id</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;_vimeo_api&quot;</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">el_</span><span class="o">=</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Component</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">createEl</span><span class="p">(</span><span class="s2">&quot;iframe&quot;</span><span class="p">,{</span><span class="nx">id</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">id_</span><span class="p">,</span><span class="nx">className</span><span class="o">:</span><span class="s2">&quot;vjs-tech&quot;</span><span class="p">,</span><span class="nx">scrolling</span><span class="o">:</span><span class="s2">&quot;no&quot;</span><span class="p">,</span><span class="nx">marginWidth</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">marginHeight</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC3'><span class="nx">frameBorder</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">webkitAllowFullScreen</span><span class="o">:</span><span class="s2">&quot;&quot;</span><span class="p">,</span><span class="nx">mozallowfullscreen</span><span class="o">:</span><span class="s2">&quot;&quot;</span><span class="p">,</span><span class="nx">allowFullScreen</span><span class="o">:</span><span class="s2">&quot;&quot;</span><span class="p">});</span><span class="k">this</span><span class="p">.</span><span class="nx">player_el_</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">el_</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">player_el_</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">);</span><span class="nx">a</span><span class="o">=</span><span class="p">{</span><span class="nx">api</span><span class="o">:</span><span class="mi">1</span><span class="p">,</span><span class="nx">byline</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">portrait</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">show_title</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">show_byline</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">show_portait</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">fullscreen</span><span class="o">:</span><span class="mi">1</span><span class="p">,</span><span class="nx">player_id</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">id_</span><span class="p">,</span><span class="nx">autoplay</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">options</span><span class="p">().</span><span class="nx">autoplay</span><span class="o">?</span><span class="mi">1</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">loop</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">options</span><span class="p">().</span><span class="nx">loop</span><span class="o">?</span><span class="mi">1</span><span class="o">:</span><span class="mi">0</span><span class="p">};</span><span class="k">this</span><span class="p">.</span><span class="nx">baseUrl</span><span class="o">=</span><span class="s2">&quot;https&quot;</span><span class="o">==</span><span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span><span class="o">?</span><span class="s2">&quot;https://secure.vimeo.com/video/&quot;</span><span class="o">:</span><span class="s2">&quot;http://player.vimeo.com/video/&quot;</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeo</span><span class="o">=</span><span class="p">{};</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="o">=</span><span class="p">{};</span><span class="k">this</span><span class="p">.</span><span class="nx">el_</span><span class="p">.</span><span class="nx">vjsTech</span><span class="o">=</span><span class="k">this</span><span class="p">;</span></div><div class='line' id='LC4'><span class="k">this</span><span class="p">.</span><span class="nx">el_</span><span class="p">.</span><span class="nx">onload</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">vjsTech</span><span class="p">.</span><span class="nx">onLoad</span><span class="p">()};</span><span class="k">this</span><span class="p">.</span><span class="nx">el_</span><span class="p">.</span><span class="nx">src</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">baseUrl</span><span class="o">+</span><span class="k">this</span><span class="p">.</span><span class="nx">videoId</span><span class="o">+</span><span class="s2">&quot;?&quot;</span><span class="o">+</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">makeQueryString</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="kd">var</span> <span class="nx">h</span><span class="o">=</span><span class="k">this</span><span class="p">;</span><span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">bigPlayButton</span><span class="p">.</span><span class="nx">el</span><span class="p">();</span><span class="nx">a</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="nx">a</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">controlBar</span><span class="p">.</span><span class="nx">el</span><span class="p">();</span><span class="nx">a</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">a</span><span class="p">)},</span><span class="mi">50</span><span class="p">)}});</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">dispose</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeo</span><span class="p">.</span><span class="nx">api</span><span class="p">(</span><span class="s2">&quot;unload&quot;</span><span class="p">);</span><span class="k">delete</span> <span class="k">this</span><span class="p">.</span><span class="nx">vimeo</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">el_</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">el_</span><span class="p">);</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">MediaTechController</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">dispose</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">)};</span></div><div class='line' id='LC5'><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">play</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeo</span><span class="p">.</span><span class="nx">api</span><span class="p">(</span><span class="s2">&quot;play&quot;</span><span class="p">)};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">pause</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeo</span><span class="p">.</span><span class="nx">api</span><span class="p">(</span><span class="s2">&quot;pause&quot;</span><span class="p">)};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">paused</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">lastState</span><span class="o">!==</span><span class="nx">VimeoState</span><span class="p">.</span><span class="nx">PLAYING</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">lastState</span><span class="o">!==</span><span class="nx">VimeoState</span><span class="p">.</span><span class="nx">BUFFERING</span><span class="p">};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">currentTime</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="p">.</span><span class="nx">time</span><span class="o">||</span><span class="mi">0</span><span class="p">};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">setCurrentTime</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeo</span><span class="p">.</span><span class="nx">api</span><span class="p">(</span><span class="s2">&quot;seekTo&quot;</span><span class="p">,</span><span class="nx">a</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;timeupdate&quot;</span><span class="p">)};</span></div><div class='line' id='LC6'><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">duration</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="p">.</span><span class="nx">duration</span><span class="o">||</span><span class="mi">0</span><span class="p">};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">buffered</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="nx">videojs</span><span class="p">.</span><span class="nx">createTimeRange</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="p">.</span><span class="nx">buffered</span><span class="o">||</span><span class="mi">0</span><span class="p">)};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">volume</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="p">.</span><span class="nx">muted</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="p">.</span><span class="nx">muteVolume</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="p">.</span><span class="nx">volume</span><span class="p">};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">setVolume</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeo</span><span class="p">.</span><span class="nx">api</span><span class="p">(</span><span class="s2">&quot;setvolume&quot;</span><span class="p">,</span><span class="nx">a</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeo</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="p">.</span><span class="nx">volume</span><span class="o">=</span><span class="nx">a</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;volumechange&quot;</span><span class="p">)};</span></div><div class='line' id='LC7'><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">muted</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="p">.</span><span class="nx">muted</span><span class="o">||!</span><span class="mi">1</span><span class="p">};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">setMuted</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="o">?</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="p">.</span><span class="nx">muteVolume</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="p">.</span><span class="nx">volume</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">setVolume</span><span class="p">(</span><span class="mi">0</span><span class="p">))</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">setVolume</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="p">.</span><span class="nx">muteVolume</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="p">.</span><span class="nx">muted</span><span class="o">=</span><span class="nx">a</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;volumechange&quot;</span><span class="p">)};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onReady</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">isReady_</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;techready&quot;</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">triggerReady</span><span class="p">();</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;durationchange&quot;</span><span class="p">)};</span></div><div class='line' id='LC8'><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onLoad</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeo</span><span class="o">=</span><span class="nx">$f</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">el_</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="o">=</span><span class="p">{</span><span class="nx">state</span><span class="o">:</span><span class="nx">VimeoState</span><span class="p">.</span><span class="nx">UNSTARTED</span><span class="p">,</span><span class="nx">volume</span><span class="o">:</span><span class="mi">1</span><span class="p">,</span><span class="nx">muted</span><span class="o">:!</span><span class="mi">1</span><span class="p">,</span><span class="nx">muteVolume</span><span class="o">:</span><span class="mi">1</span><span class="p">,</span><span class="nx">time</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">duration</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">buffered</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">url</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">baseUrl</span><span class="o">+</span><span class="k">this</span><span class="p">.</span><span class="nx">videoId</span><span class="p">,</span><span class="nx">error</span><span class="o">:</span><span class="kc">null</span><span class="p">};</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeo</span><span class="p">.</span><span class="nx">addEvent</span><span class="p">(</span><span class="s2">&quot;ready&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">a</span><span class="p">).</span><span class="nx">vjsTech</span><span class="p">.</span><span class="nx">onReady</span><span class="p">()});</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeo</span><span class="p">.</span><span class="nx">addEvent</span><span class="p">(</span><span class="s2">&quot;loadProgress&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">d</span><span class="p">).</span><span class="nx">vjsTech</span><span class="p">.</span><span class="nx">onLoadProgress</span><span class="p">(</span><span class="nx">a</span><span class="p">)});</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeo</span><span class="p">.</span><span class="nx">addEvent</span><span class="p">(</span><span class="s2">&quot;playProgress&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">d</span><span class="p">).</span><span class="nx">vjsTech</span><span class="p">.</span><span class="nx">onPlayProgress</span><span class="p">(</span><span class="nx">a</span><span class="p">)});</span></div><div class='line' id='LC9'><span class="k">this</span><span class="p">.</span><span class="nx">vimeo</span><span class="p">.</span><span class="nx">addEvent</span><span class="p">(</span><span class="s2">&quot;play&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">a</span><span class="p">).</span><span class="nx">vjsTech</span><span class="p">.</span><span class="nx">onPlay</span><span class="p">()});</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeo</span><span class="p">.</span><span class="nx">addEvent</span><span class="p">(</span><span class="s2">&quot;pause&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">a</span><span class="p">).</span><span class="nx">vjsTech</span><span class="p">.</span><span class="nx">onPause</span><span class="p">()});</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeo</span><span class="p">.</span><span class="nx">addEvent</span><span class="p">(</span><span class="s2">&quot;finish&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">a</span><span class="p">).</span><span class="nx">vjsTech</span><span class="p">.</span><span class="nx">onFinish</span><span class="p">()});</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeo</span><span class="p">.</span><span class="nx">addEvent</span><span class="p">(</span><span class="s2">&quot;seek&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">a</span><span class="p">).</span><span class="nx">vjsTech</span><span class="p">.</span><span class="nx">onSeek</span><span class="p">(</span><span class="nx">data</span><span class="p">)})};</span></div><div class='line' id='LC10'><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onLoadProgress</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=!</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="p">.</span><span class="nx">duration</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="p">.</span><span class="nx">duration</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">duration</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="p">.</span><span class="nx">buffered</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">percent</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;progress&quot;</span><span class="p">);</span><span class="nx">d</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;durationchange&quot;</span><span class="p">)};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onPlayProgress</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="p">.</span><span class="nx">time</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">seconds</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;timeupdate&quot;</span><span class="p">)};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onPlay</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="p">.</span><span class="nx">state</span><span class="o">=</span><span class="nx">VimeoState</span><span class="p">.</span><span class="nx">PLAYING</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;play&quot;</span><span class="p">)};</span></div><div class='line' id='LC11'><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onPause</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="p">.</span><span class="nx">state</span><span class="o">=</span><span class="nx">VimeoState</span><span class="p">.</span><span class="nx">PAUSED</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;pause&quot;</span><span class="p">)};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onFinish</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="p">.</span><span class="nx">state</span><span class="o">=</span><span class="nx">VimeoState</span><span class="p">.</span><span class="nx">ENDED</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;ended&quot;</span><span class="p">)};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onSeek</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">vimeoInfo</span><span class="p">.</span><span class="nx">time</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">seconds</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;timeupdate&quot;</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;seeked&quot;</span><span class="p">)};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onError</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">error</span><span class="o">=</span><span class="nx">a</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;error&quot;</span><span class="p">)};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">isSupported</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span><span class="o">!</span><span class="mi">0</span><span class="p">};</span></div><div class='line' id='LC12'><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">supportsFullScreen</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span><span class="o">!</span><span class="mi">1</span><span class="p">};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">canPlaySource</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span><span class="s2">&quot;video/vimeo&quot;</span><span class="o">==</span><span class="nx">a</span><span class="p">.</span><span class="nx">type</span><span class="p">};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Vimeo</span><span class="p">.</span><span class="nx">makeQueryString</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="p">[],</span><span class="nx">e</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="nx">e</span> <span class="k">in</span> <span class="nx">a</span><span class="p">)</span><span class="nx">a</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">d</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;=&quot;</span><span class="o">+</span><span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="nx">e</span><span class="p">]));</span><span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;&amp;&quot;</span><span class="p">)};</span></div><div class='line' id='LC13'><span class="kd">var</span> <span class="nx">Froogaloop</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="kd">function</span> <span class="nx">a</span><span class="p">(</span><span class="nx">m</span><span class="p">){</span><span class="k">return</span> <span class="k">new</span> <span class="nx">a</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">init</span><span class="p">(</span><span class="nx">m</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">d</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">b</span><span class="p">.</span><span class="nx">contentWindow</span><span class="p">.</span><span class="nx">postMessage</span><span class="p">)</span><span class="k">return</span><span class="o">!</span><span class="mi">1</span><span class="p">;</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;src&quot;</span><span class="p">).</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;?&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span><span class="nx">a</span><span class="o">=</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">({</span><span class="nx">method</span><span class="o">:</span><span class="nx">a</span><span class="p">,</span><span class="nx">value</span><span class="o">:</span><span class="nx">c</span><span class="p">});</span><span class="s2">&quot;//&quot;</span><span class="o">===</span><span class="nx">d</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">2</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">d</span><span class="o">=</span><span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span><span class="o">+</span><span class="nx">d</span><span class="p">);</span><span class="nx">b</span><span class="p">.</span><span class="nx">contentWindow</span><span class="p">.</span><span class="nx">postMessage</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">d</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">e</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="p">,</span><span class="nx">b</span><span class="p">;</span><span class="k">try</span><span class="p">{</span><span class="nx">c</span><span class="o">=</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">data</span><span class="p">),</span><span class="nx">b</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">event</span><span class="o">||</span><span class="nx">c</span><span class="p">.</span><span class="nx">method</span><span class="p">}</span><span class="k">catch</span><span class="p">(</span><span class="nx">d</span><span class="p">){}</span><span class="s2">&quot;ready&quot;</span><span class="o">!=</span><span class="nx">b</span><span class="o">||</span><span class="nx">k</span><span class="o">||</span><span class="p">(</span><span class="nx">k</span><span class="o">=!</span><span class="mi">0</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">origin</span><span class="o">!=</span><span class="nx">l</span><span class="p">)</span><span class="k">return</span><span class="o">!</span><span class="mi">1</span><span class="p">;</span><span class="nx">a</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="o">===</span><span class="nx">g</span><span class="o">?</span><span class="kc">null</span><span class="o">:</span><span class="nx">c</span><span class="p">.</span><span class="nx">player_id</span><span class="p">;</span><span class="nx">c</span><span class="o">=</span><span class="nx">g</span><span class="o">?</span><span class="nx">f</span><span class="p">[</span><span class="nx">g</span><span class="p">][</span><span class="nx">b</span><span class="p">]</span><span class="o">:</span><span class="nx">f</span><span class="p">[</span><span class="nx">b</span><span class="p">];</span><span class="nx">b</span><span class="o">=</span><span class="p">[];</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">c</span><span class="p">)</span><span class="k">return</span><span class="o">!</span><span class="mi">1</span><span class="p">;</span><span class="k">void</span> <span class="mi">0</span><span class="o">!==</span></div><div class='line' id='LC14'><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="nx">e</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span><span class="nx">g</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">g</span><span class="p">);</span><span class="k">return</span> <span class="mi">0</span><span class="o">&lt;</span><span class="nx">b</span><span class="p">.</span><span class="nx">length</span><span class="o">?</span><span class="nx">c</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span><span class="nx">b</span><span class="p">)</span><span class="o">:</span><span class="nx">c</span><span class="p">.</span><span class="nx">call</span><span class="p">()}</span><span class="kd">function</span> <span class="nx">h</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="nx">b</span><span class="o">?</span><span class="p">(</span><span class="nx">f</span><span class="p">[</span><span class="nx">b</span><span class="p">]</span><span class="o">||</span><span class="p">(</span><span class="nx">f</span><span class="p">[</span><span class="nx">b</span><span class="p">]</span><span class="o">=</span><span class="p">{}),</span><span class="nx">f</span><span class="p">[</span><span class="nx">b</span><span class="p">][</span><span class="nx">a</span><span class="p">]</span><span class="o">=</span><span class="nx">c</span><span class="p">)</span><span class="o">:</span><span class="nx">f</span><span class="p">[</span><span class="nx">a</span><span class="p">]</span><span class="o">=</span><span class="nx">c</span><span class="p">}</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="p">{},</span><span class="nx">k</span><span class="o">=!</span><span class="mi">1</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">;</span><span class="nx">a</span><span class="p">.</span><span class="nx">fn</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">prototype</span><span class="o">=</span><span class="p">{</span><span class="nx">element</span><span class="o">:</span><span class="kc">null</span><span class="p">,</span><span class="nx">init</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="s2">&quot;string&quot;</span><span class="o">===</span><span class="k">typeof</span> <span class="nx">a</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">a</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">a</span><span class="p">));</span><span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="o">=</span><span class="nx">a</span><span class="p">;</span><span class="nx">a</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;src&quot;</span><span class="p">);</span><span class="s2">&quot;//&quot;</span><span class="o">===</span><span class="nx">a</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">2</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">a</span><span class="o">=</span><span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span><span class="o">+</span><span class="nx">a</span><span class="p">);</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">);</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">,</span><span class="nx">b</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">d</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">b</span><span class="o">&lt;</span><span class="nx">d</span><span class="p">;</span><span class="nx">b</span><span class="o">++</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="mi">3</span><span class="o">&gt;</span><span class="nx">b</span><span class="p">)</span><span class="nx">c</span><span class="o">+=</span><span class="nx">a</span><span class="p">[</span><span class="nx">b</span><span class="p">];</span><span class="k">else</span> <span class="k">break</span><span class="p">;</span><span class="mi">2</span><span class="o">&gt;</span><span class="nx">b</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">c</span><span class="o">+=</span><span class="s2">&quot;/&quot;</span><span class="p">)}</span><span class="nx">l</span><span class="o">=</span><span class="nx">c</span><span class="p">;</span><span class="k">return</span> <span class="k">this</span><span class="p">},</span><span class="nx">api</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="o">||</span></div><div class='line' id='LC15'><span class="o">!</span><span class="nx">a</span><span class="p">)</span><span class="k">return</span><span class="o">!</span><span class="mi">1</span><span class="p">;</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="o">!==</span><span class="nx">b</span><span class="p">.</span><span class="nx">id</span><span class="o">?</span><span class="nx">b</span><span class="p">.</span><span class="nx">id</span><span class="o">:</span><span class="kc">null</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="nx">c</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">constructor</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">call</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">apply</span><span class="o">?</span><span class="kc">null</span><span class="o">:</span><span class="nx">c</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="nx">c</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">constructor</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">call</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">apply</span><span class="o">?</span><span class="nx">c</span><span class="o">:</span><span class="kc">null</span><span class="p">;</span><span class="nx">g</span><span class="o">&amp;&amp;</span><span class="nx">h</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">g</span><span class="p">,</span><span class="nx">e</span><span class="p">);</span><span class="nx">d</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">b</span><span class="p">);</span><span class="k">return</span> <span class="k">this</span><span class="p">},</span><span class="nx">addEvent</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">)</span><span class="k">return</span><span class="o">!</span><span class="mi">1</span><span class="p">;</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="o">!==</span><span class="nx">b</span><span class="p">.</span><span class="nx">id</span><span class="o">?</span><span class="nx">b</span><span class="p">.</span><span class="nx">id</span><span class="o">:</span><span class="kc">null</span><span class="p">;</span><span class="nx">h</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">e</span><span class="p">);</span><span class="s2">&quot;ready&quot;</span><span class="o">!=</span><span class="nx">a</span><span class="o">?</span><span class="nx">d</span><span class="p">(</span><span class="s2">&quot;addEventListener&quot;</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">)</span><span class="o">:</span><span class="s2">&quot;ready&quot;</span><span class="o">==</span><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="nx">k</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span><span class="nx">e</span><span class="p">);</span><span class="k">return</span> <span class="k">this</span><span class="p">},</span><span class="nx">removeEvent</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">)</span><span class="k">return</span><span class="o">!</span><span class="mi">1</span><span class="p">;</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">,</span><span class="nx">b</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="o">!==</span><span class="nx">c</span><span class="p">.</span><span class="nx">id</span><span class="o">?</span><span class="nx">c</span><span class="p">.</span><span class="nx">id</span><span class="o">:</span><span class="kc">null</span><span class="p">;</span><span class="nx">a</span><span class="o">:</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">b</span><span class="o">&amp;&amp;</span><span class="nx">f</span><span class="p">[</span><span class="nx">b</span><span class="p">]){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">f</span><span class="p">[</span><span class="nx">b</span><span class="p">][</span><span class="nx">a</span><span class="p">]){</span><span class="nx">b</span><span class="o">=!</span><span class="mi">1</span><span class="p">;</span><span class="k">break</span> <span class="nx">a</span><span class="p">}</span><span class="nx">f</span><span class="p">[</span><span class="nx">b</span><span class="p">][</span><span class="nx">a</span><span class="p">]</span><span class="o">=</span><span class="kc">null</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">f</span><span class="p">[</span><span class="nx">a</span><span class="p">]){</span><span class="nx">b</span><span class="o">=</span></div><div class='line' id='LC16'><span class="o">!</span><span class="mi">1</span><span class="p">;</span><span class="k">break</span> <span class="nx">a</span><span class="p">}</span><span class="nx">f</span><span class="p">[</span><span class="nx">a</span><span class="p">]</span><span class="o">=</span><span class="kc">null</span><span class="p">}</span><span class="nx">b</span><span class="o">=!</span><span class="mi">0</span><span class="p">}</span><span class="s2">&quot;ready&quot;</span><span class="o">!=</span><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="o">&amp;&amp;</span><span class="nx">d</span><span class="p">(</span><span class="s2">&quot;removeEventListener&quot;</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">)}};</span><span class="nx">a</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">init</span><span class="p">.</span><span class="nx">prototype</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">fn</span><span class="p">;</span><span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="o">?</span><span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;message&quot;</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">)</span><span class="o">:</span><span class="nb">window</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="s2">&quot;onmessage&quot;</span><span class="p">,</span><span class="nx">e</span><span class="p">);</span><span class="k">return</span> <span class="nb">window</span><span class="p">.</span><span class="nx">Froogaloop</span><span class="o">=</span><span class="nb">window</span><span class="p">.</span><span class="nx">$f</span><span class="o">=</span><span class="nx">a</span><span class="p">}();</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.03224s from github-fe123-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/eXon/videojs-vimeo/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

