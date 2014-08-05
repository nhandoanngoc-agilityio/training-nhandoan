angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/assets/templates/commons/footer.html',
    "<footer class=\"sub-footer\">\n" +
    "   <div class=\"pull-right\"><i class=\"fa fa-heart text-danger\"></i> Lovingly made in NYC &amp; SF</div>\n" +
    "   <div class=\"pull-left\">2014 ©<a>eTherapi</a></div>\n" +
    "</footer>\n"
  );


  $templateCache.put('/assets/templates/commons/header.html',
    "<header class=\"main-header navbar navbar-default navbar-fixed-top\">\n" +
    "   <div class=\"navbar-header logo-wrapper\">\n" +
    "      <h1><a href=\"index.html\" id=\"main-logo\">etherapi</a></h1>\n" +
    "   </div>\n" +
    "   <form class=\"navbar-form navbar-left header-form\">\n" +
    "      <div class=\"form-group search-client\">\n" +
    "         <select data-placeholder=\"Search Patients\" class=\"form-control select-chosen input-search\" style=\"display: none;\"></select>\n" +
    "         <div class=\"chosen-container chosen-container-single chosen-container-single-nosearch\" style=\"width: 100%;\" title=\"\">\n" +
    "            <a class=\"chosen-single chosen-default\" tabindex=\"-1\">\n" +
    "               <span>Search Patients</span>\n" +
    "               <div><b></b></div>\n" +
    "            </a>\n" +
    "            <div class=\"chosen-drop\">\n" +
    "               <div class=\"chosen-search\"><input type=\"text\" autocomplete=\"off\" readonly=\"\"></div>\n" +
    "               <ul class=\"chosen-results\"></ul>\n" +
    "            </div>\n" +
    "         </div>\n" +
    "      </div>\n" +
    "      <button class=\"btn add-client\" type=\"submit\"><i class=\"hi hi-plus\"></i>  Add Patient</button>\n" +
    "   </form>\n" +
    "   <ul class=\"nav navbar-nav pull-right\">\n" +
    "      <li><a ui-sref=\"home\"><i class=\"icon-house integr-icon\"></i>Home</a></li>\n" +
    "      <li><a ui-sref=\"appointment\"><i class=\"icon-calendar6 integr-icon\"></i>Appointments</a></li>\n" +
    "      <li><a ui-sref=\"messages\"><i class=\"icon-envelope4 integr-icon\"></i>Messages</a></li>\n" +
    "      <li class=\"user-menu\"><a ui-sref=\"profile\">John Doe<i class=\"fa fa-bars fa-fw integr-rev-icon\"></i></a></li>\n" +
    "   </ul>\n" +
    "</header>\n"
  );


  $templateCache.put('/assets/templates/commons/profile.html',
    "<div ui-view='header'></div>\n" +
    "<div class=\"main-container\">\n" +
    "\n" +
    "  <div class=\"content-container\">\n" +
    "    <div ui-view></div>\n" +
    "    <div class=\"main-content\">\n" +
    "  <div class=\"top-banner\"></div>\n" +
    "  <div class=\"public-profile-container container-fluid\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"personal-detail col-md-7\">\n" +
    "        <!--define user-avatar-->\n" +
    "        <div class=\"avatar-container row no-gutter\">\n" +
    "          <div class=\"user-avatar-section clearfix\">\n" +
    "            <div class=\"user-avatar\">\n" +
    "              <a class=\"img-rounded\"><img src=\"http://placehold.it/220x220\" alt=\"avatar\"></a>\n" +
    "              <div class=\"hidden-box\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"avatar-action\">\n" +
    "              <div class=\"user-name large-title\"><a href=\"javascript:void(0)\">Karen Chambre </a><span class=\"group-addon-lg\"><i data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" class=\"icon-location\" data-original-title=\"Pasadena, CA\"></i></span></div>\n" +
    "              <div class=\"user-status\">Marriage and Family Therapist</div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <!--define user history-->\n" +
    "        <div class=\"history\">\n" +
    "          <div class=\"large-title\">About Karen Chambre</div>\n" +
    "          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, laborum, quod cumque vel maxime minus recusandae quam deserunt magni fugiat quasi deleniti similique rerum obcaecati aliquam incidunt sit itaque dignissimos.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, laborum, quod cumque vel maxime minus recusandae quam deserunt magni fugiat quasi deleniti similique rerum obcaecati aliquam incidunt sit itaque dignissimos.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, laborum, quod cumque vel maxime minus recusandae quam deserunt magni fugiat quasi deleniti similique rerum obcaecati aliquam incidunt sit itaque dignissimos.</p>\n" +
    "          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, laborum, quod cumque vel maxime minus recusandae quam deserunt magni fugiat quasi deleniti similique rerum obcaecati aliquam incidunt sit itaque dignissimos.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, laborum, quod cumque vel maxime minus recusandae quam deserunt magni fugiat quasi deleniti similique rerum obcaecati aliquam incidunt sit itaque dignissimos.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, laborum, quod cumque vel maxime minus recusandae quam deserunt magni fugiat quasi deleniti similique rerum obcaecati aliquam incidunt sit itaque dignissimos.</p>\n" +
    "        </div>\n" +
    "        <div class=\"specialties detail-component-list block\">\n" +
    "          <div class=\"block-title\">\n" +
    "            <h2>Specialties</h2>\n" +
    "          </div>\n" +
    "          <form class=\"form-horizontal form-bordered\">\n" +
    "            <div class=\"medium-title\">Areas of Focus</div>\n" +
    "            <div class=\"form-group no-gutter\">\n" +
    "              <div class=\"row no-gutter\">\n" +
    "                <ul class=\"fa-ul list-li-push show-item col-md-12 no-gutter\">\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa-check fa icon-arrow-right10\"></i>Depression</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Anxiety</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Codependency</li>\n" +
    "                </ul>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"medium-title\">Additional Expertise</div>\n" +
    "            <div class=\"form-group no-gutter\">\n" +
    "              <div class=\"row no-gutter\">\n" +
    "                <ul class=\"fa-ul list-li-push show-item col-md-12 no-gutter\">\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Employment</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Dual Diagnosis</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>PTSD</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Family Conflict</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Panic Attacks</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Grief</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Women's Issues</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Oppositional Defiance</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Career Counseling</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Anxiety</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Chronic Pain</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Behavioral Issues</li>\n" +
    "                </ul>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "        <div class=\"treatment-approach detail-component-list block\">\n" +
    "          <div class=\"block-title\">\n" +
    "            <h2>Treatment Approach</h2>\n" +
    "          </div>\n" +
    "          <form class=\"form-horizontal form-bordered\">\n" +
    "            <div class=\"form-group no-gutter\">\n" +
    "              <div class=\"row no-gutter\">\n" +
    "                <ul class=\"fa-ul list-li-push show-item col-md-12 no-gutter\">\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Cognitive Behavioral (CBT)</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Play Therapy</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Eclectic</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Psychodynamic</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Forensic Psychology</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Dialectical (DBT)</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Interpersonal</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Mindfulness-based</li>\n" +
    "                </ul>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "        <div class=\"demographics-served detail-component-list block\">\n" +
    "          <div class=\"block-title\">\n" +
    "            <h2>Demographics Served</h2>\n" +
    "          </div>\n" +
    "          <form class=\"form-horizontal form-bordered\">\n" +
    "            <div class=\"form-group no-gutter\">\n" +
    "              <div class=\"row no-gutter\">\n" +
    "                <ul class=\"fa-ul list-li-push show-item col-md-12 no-gutter\">\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Adolescent</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Jewish</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Adult</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Buddhist</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Christian</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>African American</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Muslim</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Latino American</li>\n" +
    "                </ul>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "        <div class=\"language-spoken detail-component-list block\">\n" +
    "          <div class=\"block-title\">\n" +
    "            <h2>Languages Spoken</h2>\n" +
    "          </div>\n" +
    "          <form class=\"form-horizontal form-bordered\">\n" +
    "            <div class=\"form-group no-gutter\">\n" +
    "              <div class=\"row no-gutter\">\n" +
    "                <ul class=\"fa-ul list-li-push show-item col-md-12 no-gutter\">\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>English</li>\n" +
    "                  <li class=\"col-md-6 col-xs-6 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Spanish</li>\n" +
    "                </ul>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "        <div class=\"credentials detail-component-list block\">\n" +
    "          <div class=\"block-title\">\n" +
    "            <h2>Credentials</h2>\n" +
    "            <h2 class=\"check-sign pull-right\"><i class=\"fa fa-check-circle\"></i>Background Checked</h2>\n" +
    "          </div>\n" +
    "          <form class=\"form-horizontal form-bordered\">\n" +
    "            <div class=\"medium-title\">Years in Practice</div>\n" +
    "            <div class=\"form-group no-gutter\">\n" +
    "              <div class=\"row no-gutter\">\n" +
    "                <ul class=\"fa-ul list-li-push show-item col-md-12 no-gutter\">\n" +
    "                  <li class=\"col-md-12 col-xs-12 no-gutter\"><i class=\"fa-check fa icon-arrow-right10\"></i>32 years</li>\n" +
    "                </ul>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"medium-title\">Licenses</div>\n" +
    "            <div class=\"form-group no-gutter\">\n" +
    "              <div class=\"row no-gutter\">\n" +
    "                <ul class=\"fa-ul list-li-push show-item\">\n" +
    "                  <li class=\"col-md-12 col-xs-12 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>License Type 1 State - 4343564</li>\n" +
    "                  <li class=\"col-md-12 col-xs-12 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>License Type 2 State - 4348764</li>\n" +
    "                </ul>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"medium-title\">Education</div>\n" +
    "            <div class=\"form-group no-gutter\">\n" +
    "              <div class=\"row no-gutter\">\n" +
    "                <ul class=\"fa-ul list-li-push show-item col-md-12 no-gutter\">\n" +
    "                  <li class=\"col-md-12 col-xs-12 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>CalSouthern University, Psy.D. - Psychology 2001</li>\n" +
    "                  <li class=\"col-md-12 col-xs-12 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Hunter College, B.S. - Nursing 1976</li>\n" +
    "                  <li class=\"col-md-12 col-xs-12 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Argosy, M.A. - Psychology 1983</li>\n" +
    "                </ul>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"medium-title\">Additional Credentials</div>\n" +
    "            <div class=\"form-group no-gutter\">\n" +
    "              <div class=\"row no-gutter\">\n" +
    "                <ul class=\"fa-ul list-li-push show-item col-md-12 no-gutter\">\n" +
    "                  <li class=\"col-md-12 col-xs-12 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>California Association of Marriage Family Therapist</li>\n" +
    "                  <li class=\"col-md-12 col-xs-12 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>American Council of Hypnotist Examiners</li>\n" +
    "                </ul>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"relative-info col-md-3\">\n" +
    "        <div class=\"video-container\">\n" +
    "          <a href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#show-video-modal\" class=\"video-show\"></a><iframe src=\"http://www.youtube.com/embed/_ETbH13kqL8\" allowfullscreen=\"true\" frameborder=\"0\" width=\"100%\" height=\"100%\"></iframe>\n" +
    "          <div class=\"hidden-box\"></div>\n" +
    "        </div>\n" +
    "        <form class=\"form-horizontal\">\n" +
    "          <div class=\"tips-info\">\n" +
    "            <div class=\"cash\"><i class=\"fa fa-dollar\"></i>120</div>\n" +
    "            <div class=\"time\"><i data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" class=\"icon-clock3\" data-original-title=\"Session Duration\"></i>55 minutes</div>\n" +
    "            <div class=\"calendarium\"><i class=\"icon-calendar6\"></i>Sliding scale available</div>\n" +
    "          </div>\n" +
    "          <a type=\"button\" data-toggle=\"modal\" href=\"mailto\" class=\"message-me-btn btn btn-success\">Message Me</a><button type=\"button\" data-toggle=\"modal\" data-target=\"#appointment-booking-modal\" class=\"btn btn-info\">Request Appointment</button>\n" +
    "          <div class=\"tips-info\">\n" +
    "            <div class=\"time-tips\">Next available time</div>\n" +
    "            <div class=\"date-info\">Mar 10, 2014 at 10am</div>\n" +
    "          </div>\n" +
    "        </form>\n" +
    "        <div class=\"insurance-plan detail-component-list block\">\n" +
    "          <div class=\"block-title\">\n" +
    "            <h2>Insurance Plans Accepted</h2>\n" +
    "          </div>\n" +
    "          <form class=\"form-horizontal form-bordered\">\n" +
    "            <div class=\"form-group no-gutter\">\n" +
    "              <div class=\"row no-gutter\">\n" +
    "                <ul class=\"fa-ul list-li-push show-item col-md-12 no-gutter\">\n" +
    "                  <li class=\"col-md-12 col-xs-12 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Aetna (CA)</li>\n" +
    "                  <li class=\"col-md-12 col-xs-12 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Anthern Blue Cross California (Wellpoint)...</li>\n" +
    "                  <li class=\"col-md-12 col-xs-12 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Blue Shield of CA - Magellan/HAI-CA (CA)</li>\n" +
    "                  <li class=\"col-md-12 col-xs-12 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Coventry Health Care (CA)</li>\n" +
    "                  <li class=\"col-md-12 col-xs-12 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Magellan Behavioral Health/Human Affairs...</li>\n" +
    "                  <li class=\"col-md-12 col-xs-12 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>MHN Managed Health Network (CA)</li>\n" +
    "                  <li class=\"col-md-12 col-xs-12 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>MHNet (CA)</li>\n" +
    "                  <li class=\"col-md-12 col-xs-12 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>United Behavioral Health/Optum (CA)</li>\n" +
    "                  <li class=\"col-md-12 col-xs-12 no-gutter\"><i class=\"fa icon-arrow-right10\"></i>Value Options (CA)</li>\n" +
    "                </ul>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "    <div ui-view='footer'></div>\n" +
    "  </div>\n" +
    "  <div ui-view='sidebar'></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/assets/templates/commons/sidebar.html',
    "<aside class=\"main-sidebar-user\">\n" +
    "   <div class=\"sidebar-section sidebar-user clearfix\">\n" +
    "      <div class=\"sidebar-user-avatar themed-background-snow\"><a href=\"#\"><img src=\"http://placehold.it/65x65\" alt=\"user avatar\"></a></div>\n" +
    "      <div class=\"sidebar-username\">Example</div>\n" +
    "      <div class=\"edit-profile text-primary\"><a ui-sref=\"therapist-edit-profile\">Edit Profile</a></div>\n" +
    "   </div>\n" +
    "   <ul class=\"sidebar-nav\">\n" +
    "      <li><a class=\"active\" ui-sref=\"home\"><i class=\"icon-house integr-icon\"></i>Home</a></li>\n" +
    "      <li>\n" +
    "         <a ui-sref=\"appointment\" class=\"sidebar-nav-menu\"><i class=\"fa fa-angle-left sidebar-nav-indicator\"></i><i class=\"icon-calendar6 integr-icon\"></i>Appointments</a>\n" +
    "         <ul>\n" +
    "            <li><a href=\"javascript:void(0);\">Upcoming</a></li>\n" +
    "            <li><a href=\"javascript:void(0);\">Requests</a></li>\n" +
    "            <li><a href=\"javascript:void(0);\">Past or Canceled</a></li>\n" +
    "         </ul>\n" +
    "      </li>\n" +
    "      <li><a href=\"#\"><i class=\"icon-envelope4 integr-icon\"></i>Messages</a></li>\n" +
    "      <li><a href=\"#\"><i class=\"icon-users4 integr-icon\"></i>Patients</a></li>\n" +
    "      <li><a href=\"#\"><i class=\"icon-alarm3 integr-icon\"></i>Your Availability</a></li>\n" +
    "      <li><a href=\"#\"><i class=\"icon-creditcard integr-icon\"></i>Billing</a></li>\n" +
    "      <li>\n" +
    "         <a ui-sref=\"profile\" class=\"sidebar-nav-menu\"><i class=\"fa fa-angle-left sidebar-nav-indicator\"></i><i class=\"icon-user8 integr-icon\"></i>Profile</a>\n" +
    "         <ul>\n" +
    "            <li><a href=\"javascript:void(0);\">Profile Picture and Video</a></li>\n" +
    "            <li><a href=\"javascript:void(0);\">About</a></li>\n" +
    "            <li><a href=\"javascript:void(0);\">Finances</a></li>\n" +
    "            <li><a href=\"javascript:void(0);\">Specialties and Expertise</a></li>\n" +
    "            <li><a href=\"javascript:void(0);\">Credentials</a></li>\n" +
    "         </ul>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "         <a ui-sref=\"therapist-account\" class=\"sidebar-nav-menu\"><i class=\"fa fa-angle-left sidebar-nav-indicator\"></i><i class=\"icon-archive2 integr-icon\"></i>Account</a>\n" +
    "         <ul>\n" +
    "            <li><a href=\"javascript:void(0);\">Account Information</a></li>\n" +
    "            <li><a href=\"javascript:void(0);\">Practice Details</a></li>\n" +
    "            <li><a href=\"javascript:void(0);\">Intake Forms</a></li>\n" +
    "            <li><a href=\"javascript:void(0);\">Change Password</a></li>\n" +
    "         </ul>\n" +
    "      </li>\n" +
    "      <li><a href=\"#\"><i class=\"icon-wand integr-icon\"></i>Technical Support</a></li>\n" +
    "      <li><a href=\"#\"><i class=\"icon-dashboard2 integr-icon\"></i>Test your System</a></li>\n" +
    "      <li><a href=\"#\"><i class=\"icon-in-alt integr-icon\"></i>Log Out</a></li>\n" +
    "   </ul>\n" +
    "</aside>\n"
  );


  $templateCache.put('/assets/templates/commons/therapist-account.html',
    "<div ui-view='header'></div>\n" +
    "<div class=\"main-container\">\n" +
    "\n" +
    "  <div class=\"content-container\">\n" +
    "    <div ui-view></div>\n" +
    "    <div class=\"sub-header-wrap\">\n" +
    "      <div class=\"notice themed-background-warning\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button><span class=\"system-notify\">Join upcoming session with<span class=\"user-name\">John Patient</span></span><span class=\"action-notify\">Action Submitted</span></div>\n" +
    "      <div class=\"sub-header-section\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"main-content\">\n" +
    "      <div tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" class=\"general-modal modal fade\" id=\"th-intake-modal\">\n" +
    "        <div class=\"modal-dialog\">\n" +
    "          <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "              <button data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">×</button>\n" +
    "              <modal-title>Practice Rules</modal-title>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "              <p>Copy and paste your Practice Rules, Consent to Treatment and Notice of Privacy Practices below. Patients will be asked to agree at the time of their first appointment.</p>\n" +
    "              <form method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n" +
    "                <div class=\"form-group\">\n" +
    "                  <div class=\"col-md-12\"><textarea class=\"form-control intake-input\"></textarea></div>\n" +
    "                </div>\n" +
    "                <div class=\"form-actions\"><button type=\"submit\" class=\"btn btn-info btn-large\">Save</button></div>\n" +
    "              </form>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"therapist-account\">\n" +
    "        <!--sub header-->\n" +
    "        <div class=\"content-header\">\n" +
    "          <div class=\"header-section\">\n" +
    "            <h1>Account Settings<i class=\"icon-archive2\"></i></h1>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div data-offset-top=\"200\" data-spy=\"affix\" class=\"aside-content affix-menu-nav col-md-3 affix-top\">\n" +
    "            <div class=\"slave-nav\">\n" +
    "              <ul class=\"list-group nav\">\n" +
    "                <li class=\"active\">\n" +
    "                  <a href=\"javascript:void(0)\" class=\"list-group-item\">\n" +
    "                    <h4 class=\"list-group-item-heading\">Account Information</h4>\n" +
    "                  </a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                  <a href=\"javascript:void(0)\" class=\"list-group-item\">\n" +
    "                    <h4 class=\"list-group-item-heading\">Practice Details</h4>\n" +
    "                  </a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                  <a href=\"javascript:void(0)\" class=\"list-group-item\">\n" +
    "                    <h4 class=\"list-group-item-heading\">Intake Forms</h4>\n" +
    "                  </a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                  <a href=\"javascript:void(0)\" class=\"list-group-item\">\n" +
    "                    <h4 class=\"list-group-item-heading\">Change Password</h4>\n" +
    "                  </a>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"pri-content col-md-9 account-content\">\n" +
    "            <div class=\"block block-form\">\n" +
    "              <div class=\"block-title\">\n" +
    "                <h2>Account Information (required)</h2>\n" +
    "              </div>\n" +
    "              <form class=\"form-horizontal\">\n" +
    "                <div class=\"form-group\">\n" +
    "                  <label class=\"control-label col-md-4\">Provider First Name</label>\n" +
    "                  <div class=\"col-md-5\">\n" +
    "                    <div class=\"input-group\"><input type=\"text\" placeholder=\"e.g., Amanda\" class=\"form-control input-md\"><span class=\"input-group-addon group-addon-lg\"><i class=\"icon-user7\"></i></span></div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                  <label class=\"control-label col-md-4\">Provider Last Name</label>\n" +
    "                  <div class=\"col-md-5\">\n" +
    "                    <div class=\"input-group\"><input type=\"text\" placeholder=\"e.g., Robison\" class=\"form-control input-md\"><span class=\"input-group-addon group-addon-lg\"><i class=\"icon-user7\"></i></span></div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                  <label class=\"control-label col-md-4\">Email Address</label>\n" +
    "                  <div class=\"col-md-5\">\n" +
    "                    <div class=\"input-group\"><input type=\"text\" placeholder=\"e.g., arobinson@mail.com\" class=\"form-control input-md\"><span class=\"input-group-addon group-addon-lg\"><i class=\"fa fa-envelope\"></i></span></div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group form-action\">\n" +
    "                  <div class=\"col-md-4 col-md-offset-4\"><button type=\"submit\" class=\"btn btn-info btn-large\">Save Account Infomation</button></div>\n" +
    "                </div>\n" +
    "              </form>\n" +
    "            </div>\n" +
    "            <div class=\"block block-form\">\n" +
    "              <div class=\"block-title\">\n" +
    "                <h2>Practice Details (required)</h2>\n" +
    "              </div>\n" +
    "              <form class=\"form-horizontal\">\n" +
    "                <div class=\"form-group\">\n" +
    "                  <label class=\"control-label col-md-4\">Street Address</label>\n" +
    "                  <div class=\"col-md-5\">\n" +
    "                    <div class=\"input-group\"><input type=\"text\" placeholder=\"e.g., 123 Main St.\" class=\"form-control input-md\"><span class=\"input-group-addon group-addon-lg\"><i class=\"icon-pin\"></i></span></div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                  <label class=\"control-label col-md-4\">City</label>\n" +
    "                  <div class=\"col-md-5\">\n" +
    "                    <div class=\"input-group\"><input type=\"text\" placeholder=\"e.g., New York\" class=\"form-control input-md\"><span class=\"input-group-addon group-addon-lg\"><i class=\"icon-pin\"></i></span></div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                  <label class=\"control-label col-md-4\">State</label>\n" +
    "                  <div class=\"col-md-5\">\n" +
    "                    <div class=\"input-group\"><input type=\"text\" placeholder=\"e.g., NY\" class=\"form-control input-md\"><span class=\"input-group-addon group-addon-lg\"><i class=\"icon-pin\"></i></span></div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group has-error\">\n" +
    "                  <label class=\"control-label col-md-4\">Zip Code</label>\n" +
    "                  <div class=\"col-md-5\">\n" +
    "                    <div class=\"input-group\"><input type=\"text\" placeholder=\"e.g., 10018\" class=\"form-control input-md\"><span class=\"input-group-addon group-addon-lg\"><i class=\"icon-pin\"></i></span></div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                  <label class=\"control-label col-md-4\">Country</label>\n" +
    "                  <div class=\"col-md-5\">\n" +
    "                    <select data-placeholder=\"Chosse a Country\" class=\"form-control select-chosen input-md\" style=\"display: none;\">\n" +
    "                      <option value=\"10\" selected=\"selected\">USA</option>\n" +
    "                    </select>\n" +
    "                    <div class=\"chosen-container chosen-container-single\" style=\"width: 100%;\" title=\"\">\n" +
    "                      <a class=\"chosen-single\" tabindex=\"-1\">\n" +
    "                        <span>USA</span>\n" +
    "                        <div><b></b></div>\n" +
    "                      </a>\n" +
    "                      <div class=\"chosen-drop\">\n" +
    "                        <div class=\"chosen-search\"><input type=\"text\" autocomplete=\"off\"></div>\n" +
    "                        <ul class=\"chosen-results\"></ul>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                  <label class=\"control-label col-md-4\">Phone Number</label>\n" +
    "                  <div class=\"col-md-5\">\n" +
    "                    <div class=\"input-group\"><input type=\"text\" placeholder=\"xxx-xxx-xxxx\" class=\"form-control input-md\"><span class=\"input-group-addon group-addon-lg\"><i class=\"icon-phone3\"></i></span></div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                  <label class=\"control-label col-md-4\">Timezone</label>\n" +
    "                  <div class=\"col-md-5\">\n" +
    "                    <select data-placeholder=\"Chosse a Timezone\" class=\"form-control select-chosen input-md\" style=\"display: none;\"></select>\n" +
    "                    <div class=\"chosen-container chosen-container-single chosen-container-single-nosearch\" style=\"width: 100%;\" title=\"\">\n" +
    "                      <a class=\"chosen-single chosen-default\" tabindex=\"-1\">\n" +
    "                        <span>Chosse a Timezone</span>\n" +
    "                        <div><b></b></div>\n" +
    "                      </a>\n" +
    "                      <div class=\"chosen-drop\">\n" +
    "                        <div class=\"chosen-search\"><input type=\"text\" autocomplete=\"off\" readonly=\"\"></div>\n" +
    "                        <ul class=\"chosen-results\"></ul>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group has-error\">\n" +
    "                  <label class=\"control-label col-md-4\">National Provider Identifier (NPI)</label>\n" +
    "                  <div class=\"col-md-5\">\n" +
    "                    <div class=\"input-group\"><input type=\"text\" class=\"form-control input-md\"><span class=\"input-group-addon group-addon-lg\"><i class=\"icon-vcard2\"></i></span></div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group has-error\">\n" +
    "                  <label class=\"control-label col-md-4\">Social Security Number</label>\n" +
    "                  <div class=\"include-popover popover-group col-md-5\">\n" +
    "                    <div class=\"input-group\"><input type=\"text\" id=\"masked_ssn\" placeholder=\"xxx-xx-xxxx\" class=\"form-control input-md\"><span class=\"input-group-addon group-addon-lg\"><i class=\"icon-vcard2\"></i></span></div>\n" +
    "                    <div class=\"popover right default-popover\">\n" +
    "                      <div class=\"arrow\"></div>\n" +
    "                      <div class=\"pop-over-content\">Your social security number will be used only for taxpayer identification and payment processing.</div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group form-action\">\n" +
    "                  <div class=\"col-md-4 col-md-offset-4\"><button type=\"submit\" class=\"btn btn-info btn-large\">Save Practie Details</button></div>\n" +
    "                </div>\n" +
    "              </form>\n" +
    "            </div>\n" +
    "            <div class=\"block\">\n" +
    "              <div class=\"block-title\">\n" +
    "                <h2>Intake Forms</h2>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\"><span class=\"control-label standout-label\">Practice Rules, Consent to Treatment, Notice of Privacy Practices</span><button class=\"btn btn-info btn-large\" data-toggle=\"modal\" data-target=\"#th-intake-modal\">View/Edit</button></div>\n" +
    "            </div>\n" +
    "            <div class=\"block block-form\">\n" +
    "              <div class=\"block-title\">\n" +
    "                <h2>Change Password</h2>\n" +
    "              </div>\n" +
    "              <form class=\"form-horizontal\">\n" +
    "                <div class=\"form-group\">\n" +
    "                  <label class=\"control-label col-md-4\">New Password</label>\n" +
    "                  <div class=\"col-md-5\">\n" +
    "                    <div class=\"input-group\"><input type=\"password\" class=\"form-control input-md\"><span class=\"input-group-addon group-addon-lg\"><i class=\"fa fa-asterisk\"></i></span></div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                  <label class=\"control-label col-md-4\">Confirm New Password</label>\n" +
    "                  <div class=\"col-md-5\">\n" +
    "                    <div class=\"input-group\"><input type=\"password\" class=\"form-control input-md\"><span class=\"input-group-addon group-addon-lg\"><i class=\"fa fa-asterisk\"></i></span></div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group form-action\">\n" +
    "                  <div class=\"col-md-4 col-md-offset-4\"><button type=\"submit\" class=\"btn btn-info btn-large\">Save Password</button></div>\n" +
    "                </div>\n" +
    "              </form>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div ui-view='footer'></div>\n" +
    "  </div>\n" +
    "  <div ui-view='sidebar'></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/assets/templates/commons/therapist-edit-profile.html',
    "<div ui-view='header'></div>\n" +
    "<div class=\"main-container\">\n" +
    "\n" +
    "  <div class=\"content-container\">\n" +
    "    <div ui-view></div>\n" +
    "    <div class=\"sub-header-wrap\">\n" +
    "      <div class=\"notice themed-background-warning\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button><span class=\"system-notify\">Join upcoming session with<span class=\"user-name\">John Patient</span></span><span class=\"action-notify\">Action Submitted</span></div>\n" +
    "      <div class=\"sub-header-section\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"main-content\">\n" +
    "      <!--the therapist-edit-profile page-->\n" +
    "      <div class=\"therapist-edit-profile\">\n" +
    "        <!--degine the content-header of the edit-profile page-->\n" +
    "        <div class=\"content-header\">\n" +
    "          <div class=\"header-section\">\n" +
    "            <h1>Public Profile<i class=\"icon-user8\"></i></h1>\n" +
    "            <br><small>The information on this page will be visible to users searching for therapists or psychiatrists on the eTherapi website.</small>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <!--define the content of edit-profile page-->\n" +
    "        <div class=\"row\">\n" +
    "          <div data-offset-top=\"200\" data-spy=\"affix\" class=\"edit-profile-nav slave-nav no-gutter aside-content affix-menu-nav col-md-3 affix-top\">\n" +
    "            <!--define the list-group-->\n" +
    "            <ul class=\"list-group nav\">\n" +
    "              <li class=\"active\">\n" +
    "                <a href=\"javascript:void(0)\" class=\"list-group-item\">\n" +
    "                  <h4 class=\"list-group-item-heading\">Profile Picture and Video</h4>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a href=\"javascript:void(0)\" class=\"list-group-item\">\n" +
    "                  <h4 class=\"list-group-item-heading\">About</h4>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a href=\"javascript:void(0)\" class=\"list-group-item\">\n" +
    "                  <h4 class=\"list-group-item-heading\">Finances</h4>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a href=\"javascript:void(0)\" class=\"list-group-item\">\n" +
    "                  <h4 class=\"list-group-item-heading\">Specialties and Expertise</h4>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a href=\"javascript:void(0)\" class=\"list-group-item\">\n" +
    "                  <h4 class=\"list-group-item-heading\">Credentials</h4>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "          <div class=\"pri-content edit-profile-content listview-content col-md-9\">\n" +
    "            <div class=\"profile-button-group\"><button type=\"button\" class=\"btn btn-success\">View Profile</button><button type=\"button\" class=\"btn btn-info\">Save Profile</button></div>\n" +
    "            <div class=\"edit-profile-detail\">\n" +
    "              <!--define the picture-video block-->\n" +
    "              <div class=\"picture-video block col-md-12\">\n" +
    "                <div class=\"block-title\">\n" +
    "                  <h2>Profile Picture and Video</h2>\n" +
    "                </div>\n" +
    "                <form method=\"post\" class=\"form-horizontal form-bordered\">\n" +
    "                  <div class=\"avatar-container row no-gutter\">\n" +
    "                    <div class=\"col-md-6 no-gutter\">\n" +
    "                      <div class=\"user-avatar-section clearfix\">\n" +
    "                        <div class=\"user-avatar\"><a href=\"javascript:void(0)\" class=\"img-rounded\"><img src=\"http://placehold.it/120x120\" alt=\"avatar\"></a></div>\n" +
    "                        <div class=\"avatar-action\">\n" +
    "                          <div class=\"user-avatar-upload\"><a data-toggle=\"modal\" data-target=\"#profile-upload-modal\" type=\"button\" class=\"btn btn-info\">Upload New Picture</a></div>\n" +
    "                          <div class=\"user-avatar-delete\"><a href=\"javascript:void(0)\" class=\"text-danger\">Delete picture</a></div>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </form>\n" +
    "                <form method=\"post\" class=\"introduction-video form-horizontal form-bordered\">\n" +
    "                  <div class=\"title\">Introduction Video</div>\n" +
    "                  <div class=\"record-video row no-gutter\">\n" +
    "                    <div class=\"col-md-12 no-gutter\"><a href=\"https://youtube.com/my_webcam\" target=\"_blank\" class=\"btn btn-info record-btn\">Record an introduction video using youtube</a></div>\n" +
    "                    <div class=\"col-md-12 no-gutter\">\n" +
    "                      <label class=\"control-label\">Enter the link to your introduction YouTube video.</label>\n" +
    "                      <div class=\"input-group\"><input type=\"text\" placeholder=\"e.g.,http://youtu.be/fxyhfiCO_XQ\" class=\"form-control medium-form-control\"><span class=\"input-group-addon group-addon-lg\"><i class=\"fa fa-youtube-play\"></i></span></div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </form>\n" +
    "              </div>\n" +
    "              <!--define the about block-->\n" +
    "              <div class=\"about block col-md-12\">\n" +
    "                <div class=\"block-title\">\n" +
    "                  <h2>About</h2>\n" +
    "                </div>\n" +
    "                <form method=\"post\" class=\"form-horizontal form-bordered\">\n" +
    "                  <div class=\"title\">Bio</div>\n" +
    "                  <div class=\"form-group\">\n" +
    "                    <div class=\"editor-group col-xs-12\">\n" +
    "                      <ul class=\"wysihtml5-toolbar\"></ul>\n" +
    "                      <ul class=\"wysihtml5-toolbar\">\n" +
    "                        <li class=\"dropdown\">\n" +
    "                          <a class=\"btn btn-default dropdown-toggle \" data-toggle=\"dropdown\">\n" +
    "                          <span class=\"fa fa-font\"></span>\n" +
    "                          <span class=\"current-font\">Normal text</span>\n" +
    "                          <b class=\"caret\"></b>\n" +
    "                          </a>\n" +
    "                          <ul class=\"dropdown-menu\">\n" +
    "                            <li><a data-wysihtml5-command=\"formatBlock\" data-wysihtml5-command-value=\"p\" tabindex=\"-1\" href=\"javascript:;\" unselectable=\"on\">Normal text</a></li>\n" +
    "                            <li><a data-wysihtml5-command=\"formatBlock\" data-wysihtml5-command-value=\"h1\" tabindex=\"-1\" href=\"javascript:;\" unselectable=\"on\">Heading 1</a></li>\n" +
    "                            <li><a data-wysihtml5-command=\"formatBlock\" data-wysihtml5-command-value=\"h2\" tabindex=\"-1\" href=\"javascript:;\" unselectable=\"on\">Heading 2</a></li>\n" +
    "                            <li><a data-wysihtml5-command=\"formatBlock\" data-wysihtml5-command-value=\"h3\" tabindex=\"-1\" href=\"javascript:;\" unselectable=\"on\">Heading 3</a></li>\n" +
    "                            <li><a data-wysihtml5-command=\"formatBlock\" data-wysihtml5-command-value=\"h4\" tabindex=\"-1\" href=\"javascript:;\" unselectable=\"on\">Heading 4</a></li>\n" +
    "                            <li><a data-wysihtml5-command=\"formatBlock\" data-wysihtml5-command-value=\"h5\" tabindex=\"-1\" href=\"javascript:;\" unselectable=\"on\">Heading 5</a></li>\n" +
    "                            <li><a data-wysihtml5-command=\"formatBlock\" data-wysihtml5-command-value=\"h6\" tabindex=\"-1\" href=\"javascript:;\" unselectable=\"on\">Heading 6</a></li>\n" +
    "                          </ul>\n" +
    "                        </li>\n" +
    "                        <li>\n" +
    "                          <div class=\"btn-group\">\n" +
    "                            <a class=\"btn  btn-default\" data-wysihtml5-command=\"bold\" title=\"CTRL+B\" tabindex=\"-1\" href=\"javascript:;\" unselectable=\"on\">Bold</a>\n" +
    "                            <a class=\"btn  btn-default\" data-wysihtml5-command=\"italic\" title=\"CTRL+I\" tabindex=\"-1\" href=\"javascript:;\" unselectable=\"on\">Italic</a>\n" +
    "                            <a class=\"btn  btn-default\" data-wysihtml5-command=\"underline\" title=\"CTRL+U\" tabindex=\"-1\" href=\"javascript:;\" unselectable=\"on\">Underline</a>\n" +
    "                            <a class=\"btn  btn-default\" data-wysihtml5-command=\"small\" title=\"CTRL+S\" tabindex=\"-1\" href=\"javascript:;\" unselectable=\"on\">Small</a>\n" +
    "                          </div>\n" +
    "                        </li>\n" +
    "                        <li>\n" +
    "                          <a class=\"btn  btn-default\" data-wysihtml5-command=\"formatBlock\" data-wysihtml5-command-value=\"blockquote\" data-wysihtml5-display-format-name=\"false\" tabindex=\"-1\" href=\"javascript:;\" unselectable=\"on\">\n" +
    "                          <span class=\"fa fa-quote-left\"></span>\n" +
    "                          </a>\n" +
    "                        </li>\n" +
    "                        <li>\n" +
    "                          <div class=\"btn-group\">\n" +
    "                            <a class=\"btn  btn-default\" data-wysihtml5-command=\"insertUnorderedList\" title=\"Unordered list\" tabindex=\"-1\" href=\"javascript:;\" unselectable=\"on\"><span class=\"fa fa-list\"></span></a>\n" +
    "                            <a class=\"btn  btn-default\" data-wysihtml5-command=\"insertOrderedList\" title=\"Ordered list\" tabindex=\"-1\" href=\"javascript:;\" unselectable=\"on\"><span class=\"fa fa-th-list\"></span></a>\n" +
    "                            <a class=\"btn  btn-default\" data-wysihtml5-command=\"Outdent\" title=\"Outdent\" tabindex=\"-1\" href=\"javascript:;\" unselectable=\"on\"><span class=\"fa fa-indent\"></span></a>\n" +
    "                            <a class=\"btn  btn-default\" data-wysihtml5-command=\"Indent\" title=\"Indent\" tabindex=\"-1\" href=\"javascript:;\" unselectable=\"on\"><span class=\"fa fa-outdent\"></span></a>\n" +
    "                          </div>\n" +
    "                        </li>\n" +
    "                        <li>\n" +
    "                          <div class=\"bootstrap-wysihtml5-insert-link-modal modal fade\">\n" +
    "                            <div class=\"modal-dialog\">\n" +
    "                              <div class=\"modal-content\">\n" +
    "                                <div class=\"modal-header\">\n" +
    "                                  <a class=\"close\" data-dismiss=\"modal\">×</a>\n" +
    "                                  <h3>Insert link</h3>\n" +
    "                                </div>\n" +
    "                                <div class=\"modal-body\">\n" +
    "                                  <input value=\"http://\" class=\"bootstrap-wysihtml5-insert-link-url form-control\">\n" +
    "                                  <label class=\"checkbox\"> <input type=\"checkbox\" class=\"bootstrap-wysihtml5-insert-link-target\" checked=\"\">Open link in new window</label>\n" +
    "                                </div>\n" +
    "                                <div class=\"modal-footer\">\n" +
    "                                  <a class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</a>\n" +
    "                                  <a href=\"#\" class=\"btn btn-primary\" data-dismiss=\"modal\">Insert link</a>\n" +
    "                                </div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                          <a class=\"btn  btn-default\" data-wysihtml5-command=\"createLink\" title=\"Insert link\" tabindex=\"-1\" href=\"javascript:;\" unselectable=\"on\">\n" +
    "                          <span class=\"fa fa-external-link\"></span>\n" +
    "                          </a>\n" +
    "                        </li>\n" +
    "                        <li>\n" +
    "                          <div class=\"bootstrap-wysihtml5-insert-image-modal modal fade\">\n" +
    "                            <div class=\"modal-dialog\">\n" +
    "                              <div class=\"modal-content\">\n" +
    "                                <div class=\"modal-header\">\n" +
    "                                  <a class=\"close\" data-dismiss=\"modal\">×</a>\n" +
    "                                  <h3>Insert image</h3>\n" +
    "                                </div>\n" +
    "                                <div class=\"modal-body\">\n" +
    "                                  <input value=\"http://\" class=\"bootstrap-wysihtml5-insert-image-url form-control\">\n" +
    "                                </div>\n" +
    "                                <div class=\"modal-footer\">\n" +
    "                                  <a class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</a>\n" +
    "                                  <a class=\"btn btn-primary\" data-dismiss=\"modal\">Insert image</a>\n" +
    "                                </div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                          <a class=\"btn  btn-default\" data-wysihtml5-command=\"insertImage\" title=\"Insert image\" tabindex=\"-1\" href=\"javascript:;\" unselectable=\"on\">\n" +
    "                          <span class=\"fa fa-picture-o\"></span>\n" +
    "                          </a>\n" +
    "                        </li>\n" +
    "                      </ul>\n" +
    "                      <textarea rows=\"10\" class=\"form-control textarea-editor\" style=\"display: none;\"></textarea>\n" +
    "                      <input type=\"hidden\" name=\"_wysihtml5_mode\" value=\"1\"><iframe class=\"wysihtml5-sandbox\" security=\"restricted\" allowtransparency=\"true\" frameborder=\"0\" width=\"0\" height=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"border-collapse: separate; border: 1px solid rgb(219, 225, 232); clear: none; display: block; float: none; margin: 1px 0px; outline: rgb(57, 66, 99) none 0px; outline-offset: 0px; padding: 6px 8px; position: static; top: auto; left: auto; right: auto; bottom: auto; z-index: auto; vertical-align: baseline; text-align: start; box-sizing: border-box; -webkit-box-shadow: none; box-shadow: none; border-top-right-radius: 4px; border-bottom-right-radius: 4px; border-bottom-left-radius: 4px; border-top-left-radius: 4px; width: 1146.265625px; height: 194px; background-color: rgb(255, 255, 255);\"></iframe><input type=\"hidden\" name=\"_wysihtml5_mode\" value=\"1\"><iframe security=\"restricted\" allowtransparency=\"true\" frameborder=\"0\" width=\"0\" height=\"0\" marginwidth=\"0\" marginheight=\"0\" class=\"wysihtml5-sandbox\"></iframe>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"title language-title\">Languages Spoken</div>\n" +
    "                  <div class=\"form-group\">\n" +
    "                    <div class=\"include-popover language-spoken col-md-12\">\n" +
    "                      <div class=\"chosen-wrapper col-md-6 no-gutter\">\n" +
    "                        <div class=\"tagsinput col-md-9\">\n" +
    "                          <div class=\"hidden-container\"></div>\n" +
    "                          <span class=\"tag\"><span class=\"tags-label-content\">ICD10</span><a href=\"javascript:void(0)\" title=\"Removing tag\">x</a></span><span class=\"tag\"><span class=\"tags-label-content\">ICD20</span><a href=\"javascript:void(0)\" title=\"Removing tag\">x</a></span><span class=\"tag\"><span class=\"tags-label-content\">ICD40</span><a href=\"javascript:void(0)\" title=\"Removing tag\">x</a></span>\n" +
    "                          <div class=\"add-tag\"><input placeholder=\"Add code\"></div>\n" +
    "                          <div class=\"tags_clear\"></div>\n" +
    "                        </div>\n" +
    "                        <div class=\"popover right\">\n" +
    "                          <div class=\"arrow\"></div>\n" +
    "                          <div class=\"pop-over-content\">Click to select among the options provided.</div>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </form>\n" +
    "              </div>\n" +
    "              <!--define the price block-->\n" +
    "              <div class=\"price block col-md-12\">\n" +
    "                <div class=\"block-title\">\n" +
    "                  <h2>Finances</h2>\n" +
    "                </div>\n" +
    "                <form method=\"post\" class=\"form-horizontal form-bordered\">\n" +
    "                  <div class=\"title\">Pricing</div>\n" +
    "                  <!--form-group include select cash and time-->\n" +
    "                  <div class=\"pricing form-group has-error\">\n" +
    "                    <div class=\"col-md-7 col-xs-7\">\n" +
    "                      <div class=\"cash col-md-5 col-xs-5\">\n" +
    "                        <div class=\"input-group\">\n" +
    "                          <div class=\"input-group-addon\"><i class=\"fa fa-usd\"></i></div>\n" +
    "                          <input type=\"text\" class=\"form-control medium-form-control valid\">\n" +
    "                        </div>\n" +
    "                        <div class=\"help-block animation-slideDown\">Please enter a number!</div>\n" +
    "                      </div>\n" +
    "                      <div class=\"solid-text col-md-2 col-xs-2\">for up to</div>\n" +
    "                      <div class=\"time col-md-5 col-xs-5\">\n" +
    "                        <select class=\"select-chosen form-control\" style=\"display: none;\">\n" +
    "                          <option value=\"0\">30 minutes</option>\n" +
    "                          <option value=\"1\">35 minutes</option>\n" +
    "                          <option value=\"2\">40 minutes</option>\n" +
    "                          <option value=\"3\">45 minutes</option>\n" +
    "                          <option value=\"4\">50 minutes</option>\n" +
    "                          <option value=\"5\">55 minutes</option>\n" +
    "                          <option value=\"6\">60 minutes</option>\n" +
    "                          <option value=\"7\">65 minutes</option>\n" +
    "                          <option value=\"8\">70 minutes</option>\n" +
    "                          <option value=\"9\">75 minutes</option>\n" +
    "                          <option value=\"10\" selected=\"selected\">80 minutes</option>\n" +
    "                          <option value=\"11\">85 minutes</option>\n" +
    "                          <option value=\"12\">90 minutes</option>\n" +
    "                        </select>\n" +
    "                        <div class=\"chosen-container chosen-container-single\" style=\"width: 100%;\" title=\"\">\n" +
    "                          <a class=\"chosen-single\" tabindex=\"-1\">\n" +
    "                            <span>80 minutes</span>\n" +
    "                            <div><b></b></div>\n" +
    "                          </a>\n" +
    "                          <div class=\"chosen-drop\">\n" +
    "                            <div class=\"chosen-search\"><input type=\"text\" autocomplete=\"off\"></div>\n" +
    "                            <ul class=\"chosen-results\"></ul>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"pricing-offer col-md-7 col-xs-7\">\n" +
    "                      <div class=\"checkbox\"><label><input type=\"checkbox\"><span>I offer a sliding scale - Let patients contact me for details</span></label></div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <!--subtitle for block-->\n" +
    "                  <div class=\"title cancellation-title\">Cancellation</div>\n" +
    "                  <!--form-group include checkbox and popover-->\n" +
    "                  <div class=\"cancellation include-popover form-group\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                      <div class=\"checkbox\">\n" +
    "                        <label>\n" +
    "                          <input type=\"checkbox\"><span>Charge a cancellation fee if a client cancels with less than 24 hours notice</span>\n" +
    "                          <div class=\"popover right\">\n" +
    "                            <div class=\"arrow\"></div>\n" +
    "                            <div class=\"pop-over-content\">You will be given the option to charge the client up to the session amount after the late cancellation occurs.</div>\n" +
    "                          </div>\n" +
    "                          <div class=\"popover top\">\n" +
    "                            <div class=\"arrow\"></div>\n" +
    "                            <div class=\"pop-over-content\">Click to select among the options provided or enter additional ones.</div>\n" +
    "                          </div>\n" +
    "                        </label>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"title\">Insurance Plans Accepted</div>\n" +
    "                  <div class=\"insurance-plan form-group\">\n" +
    "                    <div class=\"include-popover col-md-12\">\n" +
    "                      <!--define the select-chosen-multiple-->\n" +
    "                      <div class=\"chosen-wrapper col-md-6 no-gutter\">\n" +
    "                        <div class=\"tagsinput col-md-9\">\n" +
    "                          <div class=\"hidden-container\"></div>\n" +
    "                          <span class=\"tag\"><span class=\"tags-label-content\">ICD10</span><a href=\"javascript:void(0)\" title=\"Removing tag\">x</a></span><span class=\"tag\"><span class=\"tags-label-content\">ICD20</span><a href=\"javascript:void(0)\" title=\"Removing tag\">x</a></span><span class=\"tag\"><span class=\"tags-label-content\">ICD40</span><a href=\"javascript:void(0)\" title=\"Removing tag\">x</a></span>\n" +
    "                          <div class=\"add-tag\"><input placeholder=\"Add code\"></div>\n" +
    "                          <div class=\"tags_clear\"></div>\n" +
    "                        </div>\n" +
    "                        <div class=\"popover right\">\n" +
    "                          <div class=\"arrow\"></div>\n" +
    "                          <div class=\"pop-over-content\">Click to select among the options provided.</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"popover top\">\n" +
    "                          <div class=\"arrow\"></div>\n" +
    "                          <div class=\"pop-over-content\">Click to select among the options provided.</div>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </form>\n" +
    "              </div>\n" +
    "              <!--define the Expertise and Specialties block-->\n" +
    "              <div class=\"expertise block col-md-12\">\n" +
    "                <div class=\"block-title\">\n" +
    "                  <h2>Specialties and Expertise</h2>\n" +
    "                </div>\n" +
    "                <form method=\"post\" class=\"specialties-form form-horizontal form-bordered\">\n" +
    "                  <div class=\"form-group\">\n" +
    "                    <div class=\"row no-gutter\">\n" +
    "                      <div class=\"col-md-6\">\n" +
    "                        <div class=\"title\">Specialties (up to 3)</div>\n" +
    "                        <div class=\"specialties form-group\">\n" +
    "                          <div class=\"include-popover col-md-12 no-gutter\">\n" +
    "                            <!--define the select-chosen-multiple-->\n" +
    "                            <div class=\"chosen-wrapper col-md-5 no-gutter\">\n" +
    "                              <div class=\"tagsinput col-md-9\">\n" +
    "                                <div class=\"hidden-container\"></div>\n" +
    "                                <span class=\"tag\"><span class=\"tags-label-content\">ICD10</span><a href=\"javascript:void(0)\" title=\"Removing tag\">x</a></span><span class=\"tag\"><span class=\"tags-label-content\">ICD20</span><a href=\"javascript:void(0)\" title=\"Removing tag\">x</a></span><span class=\"tag\"><span class=\"tags-label-content\">ICD40</span><a href=\"javascript:void(0)\" title=\"Removing tag\">x</a></span>\n" +
    "                                <div class=\"add-tag\"><input placeholder=\"Add code\"></div>\n" +
    "                                <div class=\"tags_clear\"></div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"popover right\">\n" +
    "                              <div class=\"arrow\"></div>\n" +
    "                              <div class=\"pop-over-content\">Click to select among the options provided or enter additional ones.</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"popover top\">\n" +
    "                              <div class=\"arrow\"></div>\n" +
    "                              <div class=\"pop-over-content\">Click to select among the options provided or enter additional ones.</div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                      <div class=\"col-md-6\">\n" +
    "                        <div class=\"title\">Additional Expertise</div>\n" +
    "                        <div class=\"additional-expertise form-group\">\n" +
    "                          <div class=\"include-popover col-md-12 no-gutter\">\n" +
    "                            <!--define the select-chosen-multiple-->\n" +
    "                            <div class=\"chosen-wrapper col-md-5 no-gutter\">\n" +
    "                              <select multiple=\"multiple\" data-placeholder=\"Select or Type\" class=\"select-chosen\" style=\"display: none;\">\n" +
    "                                <option value=\"English\">English</option>\n" +
    "                                <option value=\"Spanish\">Spanish</option>\n" +
    "                                <option value=\"Vietnamese\">Vietnamese</option>\n" +
    "                              </select>\n" +
    "                              <div class=\"chosen-container chosen-container-multi\" style=\"width: 100%;\" title=\"\">\n" +
    "                                <ul class=\"chosen-choices\">\n" +
    "                                  <li class=\"search-field\"><input type=\"text\" value=\"Select or Type\" class=\"default\" autocomplete=\"off\" style=\"width: 108px;\"></li>\n" +
    "                                </ul>\n" +
    "                                <div class=\"chosen-drop\">\n" +
    "                                  <ul class=\"chosen-results\"></ul>\n" +
    "                                </div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"popover right\">\n" +
    "                              <div class=\"arrow\"></div>\n" +
    "                              <div class=\"pop-over-content\">Click to select among the options provided or enter additional ones.</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"popover top\">\n" +
    "                              <div class=\"arrow\"></div>\n" +
    "                              <div class=\"pop-over-content\">Click to select among the options provided or enter additional ones.</div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"treatment form-group\">\n" +
    "                    <div class=\"row no-gutter\">\n" +
    "                      <div class=\"col-md-6\">\n" +
    "                        <div class=\"title\">Treatment Approach</div>\n" +
    "                        <div class=\"treatment-approach form-group\">\n" +
    "                          <div class=\"include-popover col-md-12 no-gutter\">\n" +
    "                            <!--define the select-chosen-multiple-->\n" +
    "                            <div class=\"chosen-wrapper col-md-5 no-gutter\">\n" +
    "                              <select multiple=\"multiple\" data-placeholder=\"Select or Type\" class=\"select-chosen\" style=\"display: none;\">\n" +
    "                                <option value=\"English\">English</option>\n" +
    "                                <option value=\"Spanish\">Spanish</option>\n" +
    "                                <option value=\"Vietnamese\">Vietnamese</option>\n" +
    "                              </select>\n" +
    "                              <div class=\"chosen-container chosen-container-multi\" style=\"width: 100%;\" title=\"\">\n" +
    "                                <ul class=\"chosen-choices\">\n" +
    "                                  <li class=\"search-field\"><input type=\"text\" value=\"Select or Type\" class=\"default\" autocomplete=\"off\" style=\"width: 108px;\"></li>\n" +
    "                                </ul>\n" +
    "                                <div class=\"chosen-drop\">\n" +
    "                                  <ul class=\"chosen-results\"></ul>\n" +
    "                                </div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"popover right\">\n" +
    "                              <div class=\"arrow\"></div>\n" +
    "                              <div class=\"pop-over-content\">Click to select among the options provided or enter additional ones.</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"popover top\">\n" +
    "                              <div class=\"arrow\"></div>\n" +
    "                              <div class=\"pop-over-content\">Click to select among the options provided or enter additional ones.</div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                      <div class=\"col-md-6\">\n" +
    "                        <div class=\"title\">Demographics Served</div>\n" +
    "                        <div class=\"demographic-served form-group\">\n" +
    "                          <div class=\"include-popover col-md-12 no-gutter\">\n" +
    "                            <!--define the select-chosen-multiple-->\n" +
    "                            <div class=\"chosen-wrapper col-md-5 no-gutter\">\n" +
    "                              <select multiple=\"multiple\" data-placeholder=\"Select or Type\" class=\"select-chosen\" style=\"display: none;\">\n" +
    "                                <option value=\"English\">English</option>\n" +
    "                                <option value=\"Spanish\">Spanish</option>\n" +
    "                                <option value=\"Vietnamese\">Vietnamese</option>\n" +
    "                              </select>\n" +
    "                              <div class=\"chosen-container chosen-container-multi\" style=\"width: 100%;\" title=\"\">\n" +
    "                                <ul class=\"chosen-choices\">\n" +
    "                                  <li class=\"search-field\"><input type=\"text\" value=\"Select or Type\" class=\"default\" autocomplete=\"off\" style=\"width: 108px;\"></li>\n" +
    "                                </ul>\n" +
    "                                <div class=\"chosen-drop\">\n" +
    "                                  <ul class=\"chosen-results\"></ul>\n" +
    "                                </div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"popover right\">\n" +
    "                              <div class=\"arrow\"></div>\n" +
    "                              <div class=\"pop-over-content\">Click to select among the options provided or enter additional ones.</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"popover top\">\n" +
    "                              <div class=\"arrow\"></div>\n" +
    "                              <div class=\"pop-over-content\">Click to select among the options provided or enter additional ones.</div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </form>\n" +
    "              </div>\n" +
    "              <!--define the Credentials block-->\n" +
    "              <div class=\"credential block col-md-12\">\n" +
    "                <div class=\"block-title\">\n" +
    "                  <h2>Credentials</h2>\n" +
    "                </div>\n" +
    "                <form method=\"post\" class=\"form-horizontal form-bordered\">\n" +
    "                  <!--define the data table of license-->\n" +
    "                  <div class=\"title\">License(s)</div>\n" +
    "                  <div class=\"license-group form-group\">\n" +
    "                    <div class=\"total-block-data\">\n" +
    "                      <!--define the header columns of table-->\n" +
    "                      <header class=\"header-striped-row clearfix\">\n" +
    "                        <div class=\"state general-column\">\n" +
    "                          <div class=\"cell-wrapper\">\n" +
    "                            <div class=\"cell\"><span>State</span></div>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"license-type general-column\">\n" +
    "                          <div class=\"cell-wrapper\">\n" +
    "                            <div class=\"cell\"><span>License Type</span></div>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"license general-column\">\n" +
    "                          <div class=\"cell-wrapper\">\n" +
    "                            <div class=\"cell\"><span>License #</span></div>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"expiration general-column\">\n" +
    "                          <div class=\"cell-wrapper\">\n" +
    "                            <div class=\"cell\"><span>Expiration</span></div>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                      </header>\n" +
    "                      <!--data content-->\n" +
    "                      <div class=\"data-group\">\n" +
    "                        <!--data row-->\n" +
    "                        <div class=\"striped-row\">\n" +
    "                          <!--the data of state header-->\n" +
    "                          <div class=\"state general-column\">\n" +
    "                            <div class=\"cell-wrapper\">\n" +
    "                              <div class=\"cell\">\n" +
    "                                <select data-placeholder=\" \" class=\"select-chosen form-control\" style=\"display: none;\">\n" +
    "                                  <option selected=\"selected\"></option>\n" +
    "                                  <option value=\"0\">CA</option>\n" +
    "                                  <option value=\"1\">CA</option>\n" +
    "                                </select>\n" +
    "                                <div class=\"chosen-container chosen-container-single\" style=\"width: 100%;\" title=\"\">\n" +
    "                                  <a class=\"chosen-single chosen-default\" tabindex=\"-1\">\n" +
    "                                    <span> </span>\n" +
    "                                    <div><b></b></div>\n" +
    "                                  </a>\n" +
    "                                  <div class=\"chosen-drop\">\n" +
    "                                    <div class=\"chosen-search\"><input type=\"text\" autocomplete=\"off\"></div>\n" +
    "                                    <ul class=\"chosen-results\"></ul>\n" +
    "                                  </div>\n" +
    "                                </div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                          <!--the data of License Type header-->\n" +
    "                          <div class=\"license-type general-column\">\n" +
    "                            <div class=\"cell-wrapper\">\n" +
    "                              <div class=\"cell\">\n" +
    "                                <select data-placeholder=\"Choose a License Type\" class=\"select-chosen\" style=\"display: none;\">\n" +
    "                                  <option selected=\"selected\"></option>\n" +
    "                                  <option value=\"0\">Marriage and Family Therapist</option>\n" +
    "                                  <option value=\"1\">Marriage and Family Therapist</option>\n" +
    "                                </select>\n" +
    "                                <div class=\"chosen-container chosen-container-single\" style=\"width: 100%;\" title=\"\">\n" +
    "                                  <a class=\"chosen-single chosen-default\" tabindex=\"-1\">\n" +
    "                                    <span>Choose a License Type</span>\n" +
    "                                    <div><b></b></div>\n" +
    "                                  </a>\n" +
    "                                  <div class=\"chosen-drop\">\n" +
    "                                    <div class=\"chosen-search\"><input type=\"text\" autocomplete=\"off\"></div>\n" +
    "                                    <ul class=\"chosen-results\"></ul>\n" +
    "                                  </div>\n" +
    "                                </div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                          <!--the data of License header-->\n" +
    "                          <div class=\"license general-column\">\n" +
    "                            <div class=\"cell-wrapper\">\n" +
    "                              <div class=\"cell\">\n" +
    "                                <div class=\"input-group\"><input type=\"text\" class=\"medium-form-control form-control\"><span class=\"input-group-addon group-addon-lg\"><i class=\"icon-vcard2\"></i></span></div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                          <!--the data of expiration header-->\n" +
    "                          <div class=\"expiration general-column\">\n" +
    "                            <div class=\"cell-wrapper\">\n" +
    "                              <div class=\"cell\">\n" +
    "                                <div class=\"input-group\"><input type=\"text\" placeholder=\"dd/mm/yy\" date-date-format=\"dd/mm/yy\" class=\"medium-form-control form-control input-datepicker\"><span class=\"input-group-addon group-addon-lg\"><i class=\"icon-calendar6\"></i></span></div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                          <!--the end of row-->\n" +
    "                          <div class=\"end-row general-column\">\n" +
    "                            <div class=\"cell-wrapper\"><a href=\"javascript:void(0)\"><i class=\"icon-cancel\"></i></a></div>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                        <!--data row-->\n" +
    "                        <div class=\"striped-row\">\n" +
    "                          <!--the data of state header-->\n" +
    "                          <div class=\"state general-column\">\n" +
    "                            <div class=\"cell-wrapper\">\n" +
    "                              <div class=\"cell\">\n" +
    "                                <select data-placeholder=\" \" class=\"select-chosen form-control\" style=\"display: none;\">\n" +
    "                                  <option selected=\"selected\"></option>\n" +
    "                                  <option value=\"0\">CA</option>\n" +
    "                                  <option value=\"1\">CA</option>\n" +
    "                                </select>\n" +
    "                                <div class=\"chosen-container chosen-container-single\" style=\"width: 100%;\" title=\"\">\n" +
    "                                  <a class=\"chosen-single chosen-default\" tabindex=\"-1\">\n" +
    "                                    <span> </span>\n" +
    "                                    <div><b></b></div>\n" +
    "                                  </a>\n" +
    "                                  <div class=\"chosen-drop\">\n" +
    "                                    <div class=\"chosen-search\"><input type=\"text\" autocomplete=\"off\"></div>\n" +
    "                                    <ul class=\"chosen-results\"></ul>\n" +
    "                                  </div>\n" +
    "                                </div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                          <!--the data of License Type header-->\n" +
    "                          <div class=\"license-type general-column\">\n" +
    "                            <div class=\"cell-wrapper\">\n" +
    "                              <div class=\"cell\">\n" +
    "                                <select data-placeholder=\"Choose a License Type\" class=\"select-chosen\" style=\"display: none;\">\n" +
    "                                  <option selected=\"selected\"></option>\n" +
    "                                  <option value=\"0\">Marriage and Family Therapist</option>\n" +
    "                                  <option value=\"1\">Marriage and Family Therapist</option>\n" +
    "                                </select>\n" +
    "                                <div class=\"chosen-container chosen-container-single\" style=\"width: 100%;\" title=\"\">\n" +
    "                                  <a class=\"chosen-single chosen-default\" tabindex=\"-1\">\n" +
    "                                    <span>Choose a License Type</span>\n" +
    "                                    <div><b></b></div>\n" +
    "                                  </a>\n" +
    "                                  <div class=\"chosen-drop\">\n" +
    "                                    <div class=\"chosen-search\"><input type=\"text\" autocomplete=\"off\"></div>\n" +
    "                                    <ul class=\"chosen-results\"></ul>\n" +
    "                                  </div>\n" +
    "                                </div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                          <!--the data of License header-->\n" +
    "                          <div class=\"license general-column\">\n" +
    "                            <div class=\"cell-wrapper\">\n" +
    "                              <div class=\"cell\">\n" +
    "                                <div class=\"input-group\"><input type=\"text\" class=\"medium-form-control form-control\"><span class=\"input-group-addon group-addon-lg\"><i class=\"icon-vcard2\"></i></span></div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                          <!--the data of expiration header-->\n" +
    "                          <div class=\"expiration general-column\">\n" +
    "                            <div class=\"cell-wrapper\">\n" +
    "                              <div class=\"cell\">\n" +
    "                                <div class=\"input-group\"><input type=\"text\" placeholder=\"dd/mm/yy\" date-date-format=\"dd/mm/yy\" class=\"medium-form-control form-control input-datepicker\"><span class=\"input-group-addon group-addon-lg\"><i class=\"icon-calendar6\"></i></span></div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                          <!--the end of row-->\n" +
    "                          <div class=\"end-row general-column\">\n" +
    "                            <div class=\"cell-wrapper\"><a href=\"javascript:void(0)\"><i class=\"icon-cancel\"></i></a></div>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                        <!--data row-->\n" +
    "                        <div class=\"striped-row\">\n" +
    "                          <!--the data of state header-->\n" +
    "                          <div class=\"state general-column\">\n" +
    "                            <div class=\"cell-wrapper\">\n" +
    "                              <div class=\"cell\">\n" +
    "                                <select data-placeholder=\" \" class=\"select-chosen form-control\" style=\"display: none;\">\n" +
    "                                  <option selected=\"selected\"></option>\n" +
    "                                  <option value=\"0\">CA</option>\n" +
    "                                  <option value=\"1\">CA</option>\n" +
    "                                </select>\n" +
    "                                <div class=\"chosen-container chosen-container-single\" style=\"width: 100%;\" title=\"\">\n" +
    "                                  <a class=\"chosen-single chosen-default\" tabindex=\"-1\">\n" +
    "                                    <span> </span>\n" +
    "                                    <div><b></b></div>\n" +
    "                                  </a>\n" +
    "                                  <div class=\"chosen-drop\">\n" +
    "                                    <div class=\"chosen-search\"><input type=\"text\" autocomplete=\"off\"></div>\n" +
    "                                    <ul class=\"chosen-results\"></ul>\n" +
    "                                  </div>\n" +
    "                                </div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                          <!--the data of License Type header-->\n" +
    "                          <div class=\"license-type general-column\">\n" +
    "                            <div class=\"cell-wrapper\">\n" +
    "                              <div class=\"cell\">\n" +
    "                                <select data-placeholder=\"Choose a License Type\" class=\"select-chosen\" style=\"display: none;\">\n" +
    "                                  <option selected=\"selected\"></option>\n" +
    "                                  <option value=\"0\">Marriage and Family Therapist</option>\n" +
    "                                  <option value=\"1\">Marriage and Family Therapist</option>\n" +
    "                                </select>\n" +
    "                                <div class=\"chosen-container chosen-container-single\" style=\"width: 100%;\" title=\"\">\n" +
    "                                  <a class=\"chosen-single chosen-default\" tabindex=\"-1\">\n" +
    "                                    <span>Choose a License Type</span>\n" +
    "                                    <div><b></b></div>\n" +
    "                                  </a>\n" +
    "                                  <div class=\"chosen-drop\">\n" +
    "                                    <div class=\"chosen-search\"><input type=\"text\" autocomplete=\"off\"></div>\n" +
    "                                    <ul class=\"chosen-results\"></ul>\n" +
    "                                  </div>\n" +
    "                                </div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                          <!--the data of License header-->\n" +
    "                          <div class=\"license general-column\">\n" +
    "                            <div class=\"cell-wrapper\">\n" +
    "                              <div class=\"cell\">\n" +
    "                                <div class=\"input-group\"><input type=\"text\" class=\"medium-form-control form-control\"><span class=\"input-group-addon group-addon-lg\"><i class=\"icon-vcard2\"></i></span></div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                          <!--the data of expiration header-->\n" +
    "                          <div class=\"expiration general-column\">\n" +
    "                            <div class=\"cell-wrapper\">\n" +
    "                              <div class=\"cell\">\n" +
    "                                <div class=\"input-group\"><input type=\"text\" placeholder=\"dd/mm/yy\" date-date-format=\"dd/mm/yy\" class=\"medium-form-control form-control input-datepicker\"><span class=\"input-group-addon group-addon-lg\"><i class=\"icon-calendar6\"></i></span></div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                          <!--the end of row-->\n" +
    "                          <div class=\"end-row general-column\">\n" +
    "                            <div class=\"cell-wrapper\"><a href=\"javascript:void(0)\"><i class=\"icon-cancel\"></i></a></div>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                      <a href=\"javascript:void(0)\" class=\"add-more\">+ Add another license</a>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"title\">Years in Practice</div>\n" +
    "                  <div class=\"practice form-group\">\n" +
    "                    <div class=\"col-md-3\">\n" +
    "                      <select data-placeholder=\"Select a Number\" class=\"select-chosen\" style=\"display: none;\">\n" +
    "                        <option selected=\"selected\"></option>\n" +
    "                        <option value=\"1\">1</option>\n" +
    "                        <option value=\"2\">2</option>\n" +
    "                        <option value=\"3\">3</option>\n" +
    "                        <option value=\"4\">4</option>\n" +
    "                        <option value=\"5\">5</option>\n" +
    "                        <option value=\"6\">6</option>\n" +
    "                        <option value=\"7\">7</option>\n" +
    "                        <option value=\"8\">8</option>\n" +
    "                        <option value=\"9\">9</option>\n" +
    "                        <option value=\"10\">10</option>\n" +
    "                        <option value=\"11\">11</option>\n" +
    "                        <option value=\"12\">12</option>\n" +
    "                        <option value=\"13\">13</option>\n" +
    "                        <option value=\"14\">14</option>\n" +
    "                        <option value=\"15\">15</option>\n" +
    "                        <option value=\"16\">16</option>\n" +
    "                        <option value=\"17\">17</option>\n" +
    "                        <option value=\"18\">18</option>\n" +
    "                        <option value=\"19\">19</option>\n" +
    "                        <option value=\"20\">20</option>\n" +
    "                        <option value=\"21\">21</option>\n" +
    "                        <option value=\"22\">22</option>\n" +
    "                        <option value=\"23\">23</option>\n" +
    "                        <option value=\"24\">24</option>\n" +
    "                        <option value=\"25\">25</option>\n" +
    "                        <option value=\"26\">26</option>\n" +
    "                        <option value=\"27\">27</option>\n" +
    "                        <option value=\"28\">28</option>\n" +
    "                        <option value=\"29\">29</option>\n" +
    "                        <option value=\"30\">30</option>\n" +
    "                        <option value=\"31\">31</option>\n" +
    "                        <option value=\"32\">32</option>\n" +
    "                        <option value=\"33\">33</option>\n" +
    "                        <option value=\"34\">34</option>\n" +
    "                        <option value=\"35\">35</option>\n" +
    "                        <option value=\"36\">36</option>\n" +
    "                        <option value=\"37\">37</option>\n" +
    "                        <option value=\"38\">38</option>\n" +
    "                        <option value=\"39\">39</option>\n" +
    "                        <option value=\"40\">40</option>\n" +
    "                        <option value=\"41\">41</option>\n" +
    "                        <option value=\"42\">42</option>\n" +
    "                        <option value=\"43\">43</option>\n" +
    "                        <option value=\"44\">44</option>\n" +
    "                        <option value=\"45\">45</option>\n" +
    "                        <option value=\"46\">46</option>\n" +
    "                        <option value=\"47\">47</option>\n" +
    "                        <option value=\"48\">48</option>\n" +
    "                        <option value=\"49\">49</option>\n" +
    "                        <option value=\"50\">50</option>\n" +
    "                        <option value=\"51\">51</option>\n" +
    "                        <option value=\"52\">52</option>\n" +
    "                        <option value=\"53\">53</option>\n" +
    "                        <option value=\"54\">54</option>\n" +
    "                        <option value=\"55\">55</option>\n" +
    "                        <option value=\"56\">56</option>\n" +
    "                        <option value=\"57\">57</option>\n" +
    "                        <option value=\"58\">58</option>\n" +
    "                        <option value=\"59\">59</option>\n" +
    "                        <option value=\"60\">60</option>\n" +
    "                        <option value=\"61\">61</option>\n" +
    "                        <option value=\"62\">62</option>\n" +
    "                        <option value=\"63\">63</option>\n" +
    "                        <option value=\"64\">64</option>\n" +
    "                        <option value=\"65\">65</option>\n" +
    "                        <option value=\"66\">66</option>\n" +
    "                        <option value=\"67\">67</option>\n" +
    "                        <option value=\"68\">68</option>\n" +
    "                        <option value=\"69\">69</option>\n" +
    "                        <option value=\"70\">70</option>\n" +
    "                      </select>\n" +
    "                      <div class=\"chosen-container chosen-container-single\" style=\"width: 100%;\" title=\"\">\n" +
    "                        <a class=\"chosen-single chosen-default\" tabindex=\"-1\">\n" +
    "                          <span>Select a Number</span>\n" +
    "                          <div><b></b></div>\n" +
    "                        </a>\n" +
    "                        <div class=\"chosen-drop\">\n" +
    "                          <div class=\"chosen-search\"><input type=\"text\" autocomplete=\"off\"></div>\n" +
    "                          <ul class=\"chosen-results\"></ul>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <!--define the data table of schools block-->\n" +
    "                  <div class=\"school-block-title title\">Schools and Degrees</div>\n" +
    "                  <div class=\"include-popover school-degree form-group\">\n" +
    "                    <div class=\"total-block-data\">\n" +
    "                      <!--data content-->\n" +
    "                      <div class=\"data-group\">\n" +
    "                        <!--data row-->\n" +
    "                        <div class=\"striped-row\">\n" +
    "                          <!--the data of state header-->\n" +
    "                          <div class=\"text-filling general-column\">\n" +
    "                            <div class=\"cell-wrapper\">\n" +
    "                              <div class=\"cell\">\n" +
    "                                <div class=\"input-group\"><input type=\"text\" value=\"University of Chicago: PSY.D - 2001\" class=\"medium-form-control form-control\"><span class=\"input-group-addon group-addon-lg\"><i class=\"icon-graduation\"></i></span></div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                          <!--the end of row-->\n" +
    "                          <div class=\"end-row general-column\">\n" +
    "                            <div class=\"cell-wrapper\"><a href=\"javascript:void(0)\"><i class=\"icon-cancel\"></i></a></div>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"striped-row\">\n" +
    "                          <!--the data of state header-->\n" +
    "                          <div class=\"text-filling general-column\">\n" +
    "                            <div class=\"cell-wrapper\">\n" +
    "                              <div class=\"cell\">\n" +
    "                                <div class=\"input-group\"><input type=\"text\" placeholder=\"University of Chicago: PSY.D - 2001\" class=\"medium-form-control form-control\"><span class=\"input-group-addon group-addon-lg\"><i class=\"icon-graduation\"></i></span></div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                          <!--the end of row-->\n" +
    "                          <div class=\"end-row general-column\">\n" +
    "                            <div class=\"cell-wrapper\"><a href=\"javascript:void(0)\"><i class=\"icon-cancel\"></i></a></div>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                      <a href=\"javascript:void(0)\" class=\"add-more\">+ Add School and Degree</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"popover right\">\n" +
    "                      <div class=\"arrow\"></div>\n" +
    "                      <div class=\"pop-over-content\">It's best if you use this format: School Name: Degree - Degree year</div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <!--defiine the Professional Association block-->\n" +
    "                  <div class=\"association-block-title title\">Professional Associations</div>\n" +
    "                  <div class=\"association form-group\">\n" +
    "                    <div class=\"total-block-data\">\n" +
    "                      <!--data content-->\n" +
    "                      <div class=\"data-group\">\n" +
    "                        <!--data row-->\n" +
    "                        <div class=\"striped-row\">\n" +
    "                          <!--the data of state header-->\n" +
    "                          <div class=\"text-filling general-column\">\n" +
    "                            <div class=\"cell-wrapper\">\n" +
    "                              <div class=\"cell\">\n" +
    "                                <div class=\"input-group\"><input type=\"text\" value=\"California Psychology Association\" class=\"medium-form-control form-control\"><span class=\"input-group-addon group-addon-lg\"><i class=\"gi gi-group\"></i></span></div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                          <!--the end of row-->\n" +
    "                          <div class=\"end-row general-column\">\n" +
    "                            <div class=\"cell-wrapper\"><a href=\"javascript:void(0)\"><i class=\"icon-cancel\"></i></a></div>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"striped-row\">\n" +
    "                          <!--the data of state header-->\n" +
    "                          <div class=\"text-filling general-column\">\n" +
    "                            <div class=\"cell-wrapper\">\n" +
    "                              <div class=\"cell\">\n" +
    "                                <div class=\"input-group\"><input type=\"text\" placeholder=\"California Psychology Association\" class=\"medium-form-control form-control\"><span class=\"input-group-addon group-addon-lg\"><i class=\"gi gi-group\"></i></span></div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                          <!--the end of row-->\n" +
    "                          <div class=\"end-row general-column\">\n" +
    "                            <div class=\"cell-wrapper\"><a href=\"javascript:void(0)\"><i class=\"icon-cancel\"></i></a></div>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                      <a href=\"javascript:void(0)\" class=\"add-more\">+ Add Professional Association</a>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </form>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"profile-button-group\"><button type=\"button\" class=\"btn btn-success\">View Profile</button><button type=\"button\" class=\"btn btn-info\">Save Profile</button></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "</div>\n" +
    "    <div ui-view='footer'></div>\n" +
    "  </div>\n" +
    "  <div ui-view='sidebar'></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/assets/templates/home.html',
    "<div ui-view='header'></div>\n" +
    "<div class=\"main-container\">\n" +
    "\n" +
    "  <div class=\"content-container\">\n" +
    "    <div ui-view></div>\n" +
    "    <div class=\"main-content\">\n" +
    "      <div class=\"top-banner\"></div>\n" +
    "      <div class=\"search-result-container full-width\">\n" +
    "          <!--define the quick-search-->\n" +
    "         <div class=\"request-search\">\n" +
    "          <ul class=\"request-search-content clearfix\">\n" +
    "            <li>\n" +
    "              <select data-placeholder=\"Specialty\" class=\"select-chosen\" style=\"display: none;\"></select>\n" +
    "              <div class=\"chosen-container chosen-container-single chosen-container-single-nosearch\" style=\"width: 100%;\" title=\"\">\n" +
    "                <a class=\"chosen-single chosen-default\" tabindex=\"-1\">\n" +
    "                  <span>Specialty</span>\n" +
    "                  <div><b></b></div>\n" +
    "                </a>\n" +
    "                <div class=\"chosen-drop\">\n" +
    "                  <div class=\"chosen-search\"><input type=\"text\" autocomplete=\"off\" readonly=\"\"></div>\n" +
    "                  <ul class=\"chosen-results\"></ul>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "              <select data-placeholder=\"Provider Type\" class=\"select-chosen\" style=\"display: none;\"></select>\n" +
    "              <div class=\"chosen-container chosen-container-single chosen-container-single-nosearch\" style=\"width: 100%;\" title=\"\">\n" +
    "                <a class=\"chosen-single chosen-default\" tabindex=\"-1\">\n" +
    "                  <span>Provider Type</span>\n" +
    "                  <div><b></b></div>\n" +
    "                </a>\n" +
    "                <div class=\"chosen-drop\">\n" +
    "                  <div class=\"chosen-search\"><input type=\"text\" autocomplete=\"off\" readonly=\"\"></div>\n" +
    "                  <ul class=\"chosen-results\"></ul>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "              <select data-placeholder=\"Payment Type\" class=\"select-chosen\" style=\"display: none;\"></select>\n" +
    "              <div class=\"chosen-container chosen-container-single chosen-container-single-nosearch\" style=\"width: 100%;\" title=\"\">\n" +
    "                <a class=\"chosen-single chosen-default\" tabindex=\"-1\">\n" +
    "                  <span>Payment Type</span>\n" +
    "                  <div><b></b></div>\n" +
    "                </a>\n" +
    "                <div class=\"chosen-drop\">\n" +
    "                  <div class=\"chosen-search\"><input type=\"text\" autocomplete=\"off\" readonly=\"\"></div>\n" +
    "                  <ul class=\"chosen-results\"></ul>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li><input type=\"text\" placeholder=\"Zipcode/State\" class=\"form-control\"></li>\n" +
    "            <li><input type=\"text\" placeholder=\"Find by Name\" class=\"form-control\"></li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div ui-view='footer'></div>\n" +
    "  </div>\n" +
    "  <div ui-view='sidebar'></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/assets/templates/patien.html',
    "<p>This is the about view.</p>\n"
  );


  $templateCache.put('/assets/templates/therapist.html',
    "<div ui-view='header'></div>\n" +
    "<div class=\"main-container\">\n" +
    "\n" +
    "  <div class=\"content-container\">\n" +
    "    <div ui-view=\"appointment\">\n" +
    "      <div class=\"sub-header-wrap\">\n" +
    "        <div class=\"notice themed-background-warning\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button><span class=\"system-notify\">Join upcoming session with<span class=\"user-name\">John Patient</span></span><span class=\"action-notify\">Action Submitted</span></div>\n" +
    "        <div class=\"sub-header-section\"></div>\n" +
    "     </div>\n" +
    "     <div class=\"main-content\">\n" +
    "        <div class=\"appointment-listview\">\n" +
    "           <!--Modals for Appointment cancel-->\n" +
    "           <div tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" class=\"general-modal modal fade\" id=\"pt-cancel\">\n" +
    "              <div class=\"modal-dialog\">\n" +
    "                 <div class=\"modal-content\">\n" +
    "                    <div class=\"modal-header\">\n" +
    "                       <button data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button>\n" +
    "                       <modal-title>Are you sure?</modal-title>\n" +
    "                    </div>\n" +
    "                    <div class=\"modal-body\">\n" +
    "                       <h3>Are you sure you want to cancel your appointment with Arthur Belriver? Cancellation charges may apply.</h3>\n" +
    "                       <form method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n" +
    "                          <div class=\"form-group\">\n" +
    "                             <div class=\"message-title\"><strong>Message</strong> (optional)</div>\n" +
    "                             <div class=\"col-md-12\"><textarea class=\"form-control\"></textarea></div>\n" +
    "                          </div>\n" +
    "                          <div class=\"form-actions\"><button type=\"submit\" class=\"btn btn-info\">Yes, Cancel Appointment</button><a href=\"#\" class=\"text-danger link-confirm\">No, go back</a></div>\n" +
    "                       </form>\n" +
    "                    </div>\n" +
    "                 </div>\n" +
    "              </div>\n" +
    "           </div>\n" +
    "           <!--Modal for successfully cancels an appointment-->\n" +
    "           <div tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" class=\"general-modal modal fade\" id=\"pt-cancel-success\">\n" +
    "              <div class=\"modal-dialog\">\n" +
    "                 <div class=\"modal-content\">\n" +
    "                    <div class=\"modal-header\">\n" +
    "                       <button data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button>\n" +
    "                       <modal-title>Appointment canceled</modal-title>\n" +
    "                    </div>\n" +
    "                    <div class=\"modal-body larger-bottom\">\n" +
    "                       <h3>The appointment with [THERAPIST FIRST AND LAST NAME] was canceled</h3>\n" +
    "                    </div>\n" +
    "                 </div>\n" +
    "              </div>\n" +
    "           </div>\n" +
    "           <div class=\"tab-content\">\n" +
    "              <!--%article.main-content-->\n" +
    "              <div class=\"content-header\">\n" +
    "                 <div class=\"header-section\">\n" +
    "                    <h1>Appointments<i class=\"icon-calendar6\"></i></h1>\n" +
    "                 </div>\n" +
    "              </div>\n" +
    "              <!--list view tab-->\n" +
    "              <div class=\"list-view row\">\n" +
    "                 <!--The list view navigation-->\n" +
    "                 <div data-offset-top=\"200\" data-spy=\"affix\" class=\"aside-content affix-menu-nav col-md-3\">\n" +
    "                    <div class=\"slave-nav\">\n" +
    "                       <ul class=\"list-group nav\">\n" +
    "                          <li class=\"active\">\n" +
    "                             <a href=\"javascript:void(0)\" class=\"list-group-item\">\n" +
    "                                <h4 class=\"list-group-item-heading\">Upcoming</h4>\n" +
    "                             </a>\n" +
    "                          </li>\n" +
    "                          <li>\n" +
    "                             <a href=\"javascript:void(0)\" class=\"list-group-item\">\n" +
    "                                <h4 class=\"list-group-item-heading\">Pending Requests</h4>\n" +
    "                             </a>\n" +
    "                          </li>\n" +
    "                          <li>\n" +
    "                             <a href=\"javascript:void(0)\" class=\"list-group-item\">\n" +
    "                                <h4 class=\"list-group-item-heading\">Past or Canceled</h4>\n" +
    "                             </a>\n" +
    "                          </li>\n" +
    "                       </ul>\n" +
    "                    </div>\n" +
    "                 </div>\n" +
    "                 <!--The list view content-->\n" +
    "                 <div class=\"pri-content listview-content patient-appointment col-md-9\">\n" +
    "                    <div class=\"btn-container\"><a href=\"javascript:void(0)\" class=\"btn btn-info btn-large\">Schedule New Appointment</a></div>\n" +
    "                    <div class=\"block upcoming-appt\">\n" +
    "                       <div class=\"block-title\">\n" +
    "                          <h2>Upcoming Appointments</h2>\n" +
    "                       </div>\n" +
    "                       <div class=\"appointment-content-wrap clearfix\">\n" +
    "                          <div class=\"block-data-wrap\">\n" +
    "                             <header class=\"block-data-header\">\n" +
    "                                <div class=\"status-col col-style\">\n" +
    "                                   <div class=\"cell-wrapper\"><span class=\"cell\">Status</span></div>\n" +
    "                                </div>\n" +
    "                                <div class=\"user-col col-style\">\n" +
    "                                   <div class=\"cell-wrapper\"><span class=\"cell\">Therapist Name</span></div>\n" +
    "                                </div>\n" +
    "                                <div class=\"date-col col-style\">\n" +
    "                                   <div class=\"cell-wrapper\"><span class=\"cell\">Date</span></div>\n" +
    "                                </div>\n" +
    "                                <div class=\"time-col col-style\">\n" +
    "                                   <div class=\"cell-wrapper\"><span class=\"cell\">Time</span></div>\n" +
    "                                </div>\n" +
    "                                <div class=\"options-col col-style\">\n" +
    "                                   <div class=\"cell-wrapper\"><span class=\"cell\">Options</span></div>\n" +
    "                                </div>\n" +
    "                             </header>\n" +
    "                             <div class=\"block-data\">\n" +
    "                                <div class=\"data-row\">\n" +
    "                                   <div class=\"status-col col-style text-success\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">Confirmed</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"user-col col-style\">\n" +
    "                                      <div class=\"user-infor\">\n" +
    "                                         <div class=\"sidebar-user-avatar\"><a href=\"#\"><img src=\"http://placehold.it/32x32\" alt=\"user avatar\" /></a></div>\n" +
    "                                         <div class=\"avatar-name cell-wrapper\"><span class=\"cell\"><a href=\"javascript:void(0)\">Winter Decol</a></span></div>\n" +
    "                                      </div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"date-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">Today</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"time-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">5 PM</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"options-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\">\n" +
    "                                         <div class=\"cell\">\n" +
    "                                            <button type=\"button\" class=\"btn btn-info btn-action\">Go to Session</button><a type=\"button\" class=\"btn btn-info btn-action\">View Details</a>\n" +
    "                                            <div class=\"option-link-wrap\"><a data-toggle=\"modal\" data-target=\"#pt-cancel\" href=\"#\" class=\"text-danger\">Cancel</a></div>\n" +
    "                                         </div>\n" +
    "                                      </div>\n" +
    "                                   </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"data-row\">\n" +
    "                                   <div class=\"status-col col-style text-success\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">Confirmed</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"user-col col-style\">\n" +
    "                                      <div class=\"user-infor\">\n" +
    "                                         <div class=\"sidebar-user-avatar\"><a href=\"#\"><img src=\"http://placehold.it/32x32\" alt=\"user avatar\" /></a></div>\n" +
    "                                         <div class=\"avatar-name cell-wrapper\"><span class=\"cell\"><a href=\"javascript:void(0)\">Winter Decol</a></span></div>\n" +
    "                                      </div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"date-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">Today</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"time-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">5 PM</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"options-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\">\n" +
    "                                         <div class=\"cell\">\n" +
    "                                            <button type=\"button\" class=\"btn btn-info btn-action\">Go to Session</button><a type=\"button\" class=\"btn btn-info btn-action\">View Details</a>\n" +
    "                                            <div class=\"option-link-wrap\"><a data-toggle=\"modal\" data-target=\"#pt-cancel\" href=\"#\" class=\"text-danger\">Cancel</a></div>\n" +
    "                                         </div>\n" +
    "                                      </div>\n" +
    "                                   </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"data-row\">\n" +
    "                                   <div class=\"status-col col-style text-success\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">Confirmed</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"user-col col-style\">\n" +
    "                                      <div class=\"user-infor\">\n" +
    "                                         <div class=\"sidebar-user-avatar\"><a href=\"#\"><img src=\"http://placehold.it/32x32\" alt=\"user avatar\" /></a></div>\n" +
    "                                         <div class=\"avatar-name cell-wrapper\"><span class=\"cell\"><a href=\"javascript:void(0)\">Winter Decol</a></span></div>\n" +
    "                                      </div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"date-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">Today</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"time-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">5 PM</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"options-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\">\n" +
    "                                         <div class=\"cell\">\n" +
    "                                            <button type=\"button\" class=\"btn btn-info btn-action\">Go to Session</button><a type=\"button\" class=\"btn btn-info btn-action\">View Details</a>\n" +
    "                                            <div class=\"option-link-wrap\"><a data-toggle=\"modal\" data-target=\"#pt-cancel\" href=\"#\" class=\"text-danger\">Cancel</a></div>\n" +
    "                                         </div>\n" +
    "                                      </div>\n" +
    "                                   </div>\n" +
    "                                </div>\n" +
    "                             </div>\n" +
    "                          </div>\n" +
    "                       </div>\n" +
    "                    </div>\n" +
    "                    <!--Appointment requests-->\n" +
    "                    <div class=\"block request-appt\">\n" +
    "                       <div class=\"block-title\">\n" +
    "                          <h2>Pending Appointment Requests</h2>\n" +
    "                       </div>\n" +
    "                       <div class=\"appointment-content-wrap clearfix\">\n" +
    "                          <div class=\"block-data-wrap\">\n" +
    "                             <header class=\"block-data-header\">\n" +
    "                                <div class=\"status-col col-style\">\n" +
    "                                   <div class=\"cell-wrapper\"><span class=\"cell\">Status</span></div>\n" +
    "                                </div>\n" +
    "                                <div class=\"user-col col-style\">\n" +
    "                                   <div class=\"cell-wrapper\"><span class=\"cell\">Therapist Name</span></div>\n" +
    "                                </div>\n" +
    "                                <div class=\"date-col col-style\">\n" +
    "                                   <div class=\"cell-wrapper\"><span class=\"cell\">Date</span></div>\n" +
    "                                </div>\n" +
    "                                <div class=\"time-col col-style\">\n" +
    "                                   <div class=\"cell-wrapper\"><span class=\"cell\">Time</span></div>\n" +
    "                                </div>\n" +
    "                                <div class=\"options-col col-style\">\n" +
    "                                   <div class=\"cell-wrapper\"><span class=\"cell\">Options</span></div>\n" +
    "                                </div>\n" +
    "                             </header>\n" +
    "                             <div class=\"block-data\">\n" +
    "                                <div class=\"data-row\">\n" +
    "                                   <div class=\"status-col col-style text-warning\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">Pending</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"user-col col-style\">\n" +
    "                                      <div class=\"user-infor\">\n" +
    "                                         <div class=\"sidebar-user-avatar\"><a href=\"#\"><img src=\"http://placehold.it/32x32\" alt=\"user avatar\" /></a></div>\n" +
    "                                         <div class=\"avatar-name cell-wrapper\"><span class=\"cell\"><a href=\"javascript:void(0)\">Winter Decol</a></span></div>\n" +
    "                                      </div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"date-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">Today</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"time-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">5 PM</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"options-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\">\n" +
    "                                         <div class=\"cell\">\n" +
    "                                            <button data-toggle=\"modal\" data-target=\"#confirm-modal\" type=\"button\" class=\"btn btn-action btn-info\">View Details</button>\n" +
    "                                            <div class=\"option-link-wrap\"><a data-toggle=\"modal\" data-target=\"#pt-cancel\" href=\"#\" class=\"text-danger\">Cancel</a></div>\n" +
    "                                         </div>\n" +
    "                                      </div>\n" +
    "                                   </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"data-row\">\n" +
    "                                   <div class=\"status-col col-style text-warning\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">Pending</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"user-col col-style\">\n" +
    "                                      <div class=\"user-infor\">\n" +
    "                                         <div class=\"sidebar-user-avatar\"><a href=\"#\"><img src=\"http://placehold.it/32x32\" alt=\"user avatar\" /></a></div>\n" +
    "                                         <div class=\"avatar-name cell-wrapper\"><span class=\"cell\"><a href=\"javascript:void(0)\">Winter Decol</a></span></div>\n" +
    "                                      </div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"date-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">Pending</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"time-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">5 PM</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"options-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\">\n" +
    "                                         <div class=\"cell\">\n" +
    "                                            <button data-toggle=\"modal\" data-target=\"#confirm-modal\" type=\"button\" class=\"btn btn-action btn-info\">View Details</button>\n" +
    "                                            <div class=\"option-link-wrap\"><a data-toggle=\"modal\" data-target=\"#pt-cancel\" href=\"#\" class=\"text-danger\">Cancel</a></div>\n" +
    "                                         </div>\n" +
    "                                      </div>\n" +
    "                                   </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"data-row\">\n" +
    "                                   <div class=\"status-col col-style text-warning\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">Pending</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"user-col col-style\">\n" +
    "                                      <div class=\"user-infor\">\n" +
    "                                         <div class=\"sidebar-user-avatar\"><a href=\"#\"><img src=\"http://placehold.it/32x32\" alt=\"user avatar\" /></a></div>\n" +
    "                                         <div class=\"avatar-name cell-wrapper\"><span class=\"cell\"><a href=\"javascript:void(0)\">Winter Decol</a></span></div>\n" +
    "                                      </div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"date-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">Today</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"time-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">5 PM</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"options-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\">\n" +
    "                                         <div class=\"cell\">\n" +
    "                                            <button data-toggle=\"modal\" data-target=\"#confirm-modal\" type=\"button\" class=\"btn btn-action btn-info\">View Details</button>\n" +
    "                                            <div class=\"option-link-wrap\"><a data-toggle=\"modal\" data-target=\"#pt-cancel\" href=\"#\" class=\"text-danger\">Cancel</a></div>\n" +
    "                                         </div>\n" +
    "                                      </div>\n" +
    "                                   </div>\n" +
    "                                </div>\n" +
    "                             </div>\n" +
    "                          </div>\n" +
    "                       </div>\n" +
    "                    </div>\n" +
    "                    <!--Past and canceled appointments-->\n" +
    "                    <div class=\"block\">\n" +
    "                       <div class=\"block-title\">\n" +
    "                          <h2>Past or Canceled Appointments</h2>\n" +
    "                       </div>\n" +
    "                       <div class=\"appointment-content-wrap clearfix\">\n" +
    "                          <div class=\"block-data-wrap\">\n" +
    "                             <header class=\"block-data-header\">\n" +
    "                                <div class=\"status-col col-style\">\n" +
    "                                   <div class=\"cell-wrapper\"><span class=\"cell\">Status</span></div>\n" +
    "                                </div>\n" +
    "                                <div class=\"user-col col-style\">\n" +
    "                                   <div class=\"cell-wrapper\"><span class=\"cell\">Therapist Name</span></div>\n" +
    "                                </div>\n" +
    "                                <div class=\"date-col col-style\">\n" +
    "                                   <div class=\"cell-wrapper\"><span class=\"cell\">Date</span></div>\n" +
    "                                </div>\n" +
    "                                <div class=\"time-col col-style\">\n" +
    "                                   <div class=\"cell-wrapper\"><span class=\"cell\">Time</span></div>\n" +
    "                                </div>\n" +
    "                             </header>\n" +
    "                             <div class=\"block-data\">\n" +
    "                                <div class=\"data-row\">\n" +
    "                                   <div class=\"status-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"text-success cell\">Confirmed</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"user-col col-style\">\n" +
    "                                      <div class=\"user-infor\">\n" +
    "                                         <div class=\"sidebar-user-avatar\"><a href=\"#\"><img src=\"http://placehold.it/32x32\" alt=\"user avatar\" /></a></div>\n" +
    "                                         <div class=\"avatar-name cell-wrapper\"><span class=\"cell\"><a href=\"javascript:void(0)\">Winter Decol</a></span></div>\n" +
    "                                      </div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"date-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">Today</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"time-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">5 PM</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"options-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\">\n" +
    "                                         <div class=\"cell\"><button type=\"button\" class=\"btn btn-info btn-action\">View Receipt</button></div>\n" +
    "                                      </div>\n" +
    "                                   </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"data-row\">\n" +
    "                                   <div class=\"status-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"text-danger cell\">Canceled</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"user-col col-style\">\n" +
    "                                      <div class=\"user-infor\">\n" +
    "                                         <div class=\"sidebar-user-avatar\"><a href=\"#\"><img src=\"http://placehold.it/32x32\" alt=\"user avatar\" /></a></div>\n" +
    "                                         <div class=\"avatar-name cell-wrapper\"><span class=\"cell\"><a href=\"javascript:void(0)\">Winter Decol</a></span></div>\n" +
    "                                      </div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"date-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">Today</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"time-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\"><span class=\"cell\">5 PM</span></div>\n" +
    "                                   </div>\n" +
    "                                   <div class=\"options-col col-style\">\n" +
    "                                      <div class=\"cell-wrapper\">\n" +
    "                                         <div class=\"cell\"><button type=\"button\" class=\"btn btn-info btn-action\">View  Receipt</button></div>\n" +
    "                                      </div>\n" +
    "                                   </div>\n" +
    "                                </div>\n" +
    "                             </div>\n" +
    "                          </div>\n" +
    "                       </div>\n" +
    "                    </div>\n" +
    "                 </div>\n" +
    "              </div>\n" +
    "           </div>\n" +
    "        </div>\n" +
    "     </div>\n" +
    "    </div>\n" +
    "    <div ui-view=\"appointment.therapist\"></div>\n" +
    "    <div ui-view='footer'></div>\n" +
    "  </div>\n" +
    "  <div ui-view='sidebar'></div>\n" +
    "</div>\n"
  );

}]);