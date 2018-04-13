'use strict';

/**
 * @ngdoc function
 * @name angularFormioBuilderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularFormioBuilderApp
 */
angular.module('angularFormioBuilderApp')
  .controller('MainCtrl',['$scope', 'formioComponents', '$timeout', 'apiService', function ($scope, formioComponents, $timeout, apiService) {
    $scope.displays = [{
      name: 'form',
      title: 'Form'
    }, {
      name: 'wizard',
      title: 'Wizard'
    }];
    $scope.form = {"type":"form","tags":[],"owner":"5ac4e2213c2be2b387d2d13b","components":[{"input":true,"tableView":true,"label":"Are you married","key":"H_UNTAX_INCOME-H_MARRIED","placeholder":"","data":{"values":[{"value":"Y","label":"Yes"},{"value":"N","label":"No"}],"json":"","url":"","resource":"","custom":""},"dataSrc":"values","valueProperty":"","defaultValue":"","refreshOn":"","filter":"","authenticate":false,"template":"<span>{{ item.label }}</span>","multiple":false,"protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"validate":{"required":true,"customMessage":"You must specify if you are married","json":{"or":[{"==":[{"var":["data.H_UNTAX_INCOME-H_MARRIED"]},"Y"]},{"==":[{"var":["data.H_UNTAX_INCOME-H_MARRIED"]},"N"]},"You must specify if you are married"]}},"type":"select","hideLabel":false,"labelPosition":"top","tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{},"lockKey":true,"customError":"You must specify if you are married","autofocus":false},{"clearOnHide":false,"key":"Rec1","input":false,"tableView":false,"type":"well","hideLabel":false,"tags":[],"conditional":{"show":"false","when":"H_UNTAX_INCOME-H_MARRIED","eq":""},"properties":{},"lockKey":true,"components":[{"lockKey":false,"key":"content","input":false,"html":"<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" cols=\"6\" id=\"ACE_H_TDVCCS_UNT_W0_GROUPBOX1\" role=\"presentation\" width=\"913\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td align=\"left\" colspan=\"3\" valign=\"top\">\n\t\t\t<p><strong>Report total annual amounts for 2014. If an item does not apply use &quot;0&quot;. Boxes left blank will result in additional information being requested. Additional requests to clarify conflicting information may delay the determination of your financial aid eligibility.</strong></p>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\n","type":"content","tags":[],"conditional":{"show":"false","when":"H_UNTAX_INCOME-H_MARRIED","eq":""},"properties":{},"hideLabel":false},{"key":"html","input":false,"tag":"p","attrs":[{"value":"","attr":""}],"className":"","content":"Payments made to tax-deferred pension and retirement savings plans\nList any payments (direct or withheld from earnings) to tax-deferred pension and retirement savings plans (e.g., 401(k) or 403(b) plans), including, but not limited to, amounts reported on W-2 forms in Boxes 12a through 12d with codes D, E, F, G, H, and S.","type":"htmlelement","tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{},"hideLabel":false,"label":"Content"},{"clearOnHide":false,"input":false,"tableView":false,"key":"columns","type":"columns","tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{},"hideLabel":false,"label":"Columns","columns":[{"components":[{"lockKey":true,"properties":{},"conditional":{"eq":"","when":null,"show":""},"tags":[],"labelPosition":"top","type":"number","validate":{"custom":"","multiple":"","integer":"","step":"any","max":"","min":10,"required":true,"json":{"if":[{">=":[{"var":["data.H_UNTAX_INCOME-H_STD_AMNT_1"]},0]},true,"You must specify a value greater than or equal to 0"]},"customMessage":"You must specify a value greater than or equal to 0"},"clearOnHide":true,"hidden":false,"persistent":true,"protected":false,"defaultValue":"","suffix":"","prefix":"","placeholder":"","key":"H_UNTAX_INCOME-H_STD_AMNT_1","label":"Student Amount","inputType":"number","tableView":true,"input":true,"hideLabel":false,"customClass":"","customConditional":"","customError":false,"autofocus":false}],"width":6,"offset":0,"push":0,"pull":0},{"components":[{"customError":false,"properties":{},"conditional":{"eq":"Y","when":"H_UNTAX_INCOME-H_MARRIED","show":"true"},"tags":[],"labelPosition":"top","type":"number","validate":{"custom":"","multiple":"","integer":"","step":"any","max":"","min":null,"required":false,"customMessage":"You must specify a value greater than or equal to 0"},"clearOnHide":true,"hidden":false,"persistent":true,"protected":false,"defaultValue":"","suffix":"","prefix":"","placeholder":"","key":"H_UNTAX_INCOME-H_SP_AMNT_1","label":"Spouse Amount","inputType":"number","tableView":true,"input":true,"hideLabel":false,"customClass":"","lockKey":true,"autofocus":false}],"width":6,"offset":0,"push":0,"pull":0}]},{"key":"html2","input":false,"tag":"p","attrs":[{"value":"","attr":""}],"className":"","content":"IRA Deductions & payments to self-employed SEP, SIMPLE, Keough, and other qualified plans\nList the total amounts from IRS 1040 - line 28 and line 32 or IRS 1040A - line 17.","type":"htmlelement","tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{},"hideLabel":false,"label":"Content"},{"clearOnHide":false,"input":false,"tableView":false,"key":"columns2","type":"columns","tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{},"hideLabel":false,"label":"Columns","columns":[{"components":[{"lockKey":true,"properties":{},"conditional":{"eq":"","when":null,"show":""},"tags":[],"labelPosition":"top","type":"number","validate":{"custom":"","multiple":"","integer":"","step":"any","max":"","min":null,"required":false,"json":{"if":[{">=":[{"var":["data.H_UNTAX_INCOME-H_STD_AMNT_2"]},0]},true,"You must specify a value greater than or equal to 0"]},"customMessage":"You must specify a value greater than or equal to 0"},"clearOnHide":true,"hidden":false,"persistent":true,"protected":false,"defaultValue":"","suffix":"","prefix":"","placeholder":"","key":"H_UNTAX_INCOME-H_STD_AMNT_2","label":"Student Amount","inputType":"number","tableView":true,"input":true,"hideLabel":false,"customConditional":"","customError":false,"autofocus":false}],"width":6,"offset":0,"push":0,"pull":0},{"components":[{"lockKey":true,"properties":{},"conditional":{"eq":"Y","when":"H_UNTAX_INCOME-H_MARRIED","show":"true"},"tags":[],"labelPosition":"top","type":"number","validate":{"custom":"","multiple":"","integer":"","step":"any","max":"","min":null,"required":false,"json":{"or":[{"and":[{">=":[{"var":["data.H_UNTAX_INCOME-H_SP_AMNT_2"]},0]},{"==":[{"var":["data.H_UNTAX_INCOME-H_MARRIED"]},"Y"]}]},{"and":[{"==":[{"var":["data.H_UNTAX_INCOME-H_SP_AMNT_2"]},null]},{"!=":[{"var":["data.H_UNTAX_INCOME-H_MARRIED"]},"Y"]}]},"You must specify a Spouse amount greater than or equal to 0"]},"customMessage":"You must specify a value greater than or equal to 0"},"clearOnHide":true,"hidden":false,"persistent":true,"protected":false,"defaultValue":"","suffix":"","prefix":"","placeholder":"","key":"H_UNTAX_INCOME-H_SP_AMNT_2","label":"Spouse Amount","inputType":"number","tableView":true,"input":true,"hideLabel":false,"customError":false,"autofocus":false}],"width":6,"offset":0,"push":0,"pull":0}]},{"key":"html3","input":false,"tag":"p","attrs":[{"value":"","attr":""}],"className":"","content":"Child Support Received\nList actual amount received in 2016 for any children in your household. Do not include foster care payments, adoption payments, or court-order amounts not actually paid. SUPPORT FOR THIS","type":"htmlelement","tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{},"hideLabel":false,"label":"Content"},{"clearOnHide":false,"input":false,"tableView":false,"key":"columns3","type":"columns","tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{},"hideLabel":false,"label":"Columns","columns":[{"components":[{"lockKey":true,"input":true,"tableView":true,"inputType":"number","label":"Student Amount","key":"H_UNTAX_INCOME-H_STD_AMNT_3","placeholder":"","prefix":"","suffix":"","defaultValue":"","protected":false,"persistent":true,"hidden":false,"clearOnHide":true,"validate":{"required":false,"min":null,"max":"","step":"any","integer":"","multiple":"","custom":"","json":{"if":[{">=":[{"var":["data.H_UNTAX_INCOME-H_STD_AMNT_3"]},0]},true,"You must specify a value greater than or equal to 0"]},"customMessage":"You must specify a value greater than or equal to 0"},"type":"number","labelPosition":"top","tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{},"hideLabel":false,"customConditional":"","customError":false,"autofocus":false}],"width":6,"offset":0,"push":0,"pull":0},{"components":[{"lockKey":true,"input":true,"tableView":true,"inputType":"number","label":"Spouse Amount","key":"H_UNTAX_INCOME-H_SP_AMNT_3","placeholder":"","prefix":"","suffix":"","defaultValue":"","protected":false,"persistent":true,"hidden":false,"clearOnHide":true,"validate":{"required":false,"min":null,"max":"","step":"any","integer":"","multiple":"","custom":"","json":{"or":[{"and":[{">=":[{"var":["data.H_UNTAX_INCOME-H_SP_AMNT_3"]},0]},{"==":[{"var":["data.H_UNTAX_INCOME-H_MARRIED"]},"Y"]}]},{"and":[{"==":[{"var":["data.H_UNTAX_INCOME-H_SP_AMNT_3"]},null]},{"!=":[{"var":["data.H_UNTAX_INCOME-H_MARRIED"]},"Y"]}]},"You must specify a Spouse amount greater than or equal to 0"]},"customMessage":"You must specify a value greater than or equal to 0"},"type":"number","labelPosition":"top","tags":[],"conditional":{"show":"true","when":"H_UNTAX_INCOME-H_MARRIED","eq":"Y"},"properties":{},"hideLabel":false,"customError":false,"autofocus":false}],"width":6,"offset":0,"push":0,"pull":0}]}]},{"clearOnHide":false,"key":"Rec2","input":false,"tableView":false,"type":"well","tags":[],"conditional":{"show":"","when":"","eq":""},"properties":{},"lockKey":true,"hideLabel":false,"customConditional":"/* Show Child Support Grid if Student or Spouse paid child support */\nshow = (data['H_UNTAX_INCOME-H_STD_AMNT_3'] > 0 || data['H_UNTAX_INCOME-H_SP_AMNT_3'] > 0);","components":[{"properties":{},"conditional":{"eq":"","when":null,"show":""},"tags":[],"type":"content","html":"<p><strong>Please provide the name of the child(ren) for whom support was provided and the adult that received the payment.</strong></p>\n","input":false,"key":"content2","hideLabel":false},{"input":true,"tree":true,"tableView":true,"label":"Child Support Information","key":"H_CHILD_SUP","protected":false,"persistent":true,"hidden":false,"clearOnHide":true,"type":"datagrid","addAnotherPosition":"bottom","tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{},"lockKey":true,"customConditional":"","hideLabel":false,"validate":{"minLength":null,"customMessage":"","json":{"or":[{"and":[{">":[{"var":["data.H_UNTAX_INCOME-H_SP_AMNT_3"]},0]},{"==":[{"var":["data.H_UNTAX_INCOME-H_STD_AMNT_3"]},0]},{">=":[{"var":["data.H_CHILD_SUP.length"]},1]}]},{"and":[{"or":[{"==":[{"var":["data.H_UNTAX_INCOME-H_SP_AMNT_3"]},0]},{"==":[{"var":["data.H_UNTAX_INCOME-H_SP_AMNT_3"]},null]}]},{">":[{"var":["data.H_UNTAX_INCOME-H_STD_AMNT_3"]},0]},{">=":[{"var":["data.H_CHILD_SUP.length"]},1]}]},{"and":[{"or":[{"==":[{"var":["data.H_UNTAX_INCOME-H_SP_AMNT_3"]},0]},{"==":[{"var":["data.H_UNTAX_INCOME-H_SP_AMNT_3"]},null]}]},{"==":[{"var":["data.H_UNTAX_INCOME-H_STD_AMNT_3"]},0]},{"or":[{"==":[{"var":["data.H_CHILD_SUP.length"]},0]},{"==":[{"var":["data.H_CHILD_SUP.length"]},null]}]}]},{"and":[{">":[{"var":["data.H_UNTAX_INCOME-H_SP_AMNT_3"]},0]},{">":[{"var":["data.H_UNTAX_INCOME-H_STD_AMNT_3"]},0]},{">=":[{"var":["data.H_CHILD_SUP.length"]},2]}]},"You must specify the Child(ren) that you and/or your spouse paid child support for"]}},"customError":"You must specify the Child(ren) that you and/or your spouse paid child support for","autofocus":false,"components":[{"lockKey":true,"input":true,"tableView":true,"inputType":"text","inputMask":"","label":"Child's First Name","key":"H_CHILD_SUP-H_CHILD_FN","placeholder":"","prefix":"","suffix":"","multiple":false,"defaultValue":"","protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"validate":{"required":false,"minLength":"","maxLength":"","pattern":"","custom":"","customPrivate":false},"conditional":{"show":"","when":null,"eq":""},"type":"textfield","hideLabel":true,"labelPosition":"top","tags":[],"properties":{},"customDefaultValue":"","inDataGrid":true,"autofocus":false,"spellcheck":true},{"lockKey":true,"input":true,"tableView":true,"inputType":"text","inputMask":"","label":"Child's Last Name","key":"H_CHILD_SUP-H_CHILD_LN","placeholder":"","prefix":"","suffix":"","multiple":false,"defaultValue":"","protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"validate":{"required":false,"minLength":"","maxLength":"","pattern":"","custom":"","customPrivate":false},"conditional":{"show":"","when":null,"eq":""},"type":"textfield","hideLabel":true,"labelPosition":"top","tags":[],"properties":{},"inDataGrid":true,"autofocus":false,"spellcheck":true},{"lockKey":true,"input":true,"tableView":true,"inputType":"text","inputMask":"","label":"Adult's First Name","key":"H_CHILD_SUP-H_ADULT_FN","placeholder":"","prefix":"","suffix":"","multiple":false,"defaultValue":"","protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"validate":{"required":false,"minLength":"","maxLength":"","pattern":"","custom":"","customPrivate":false},"conditional":{"show":"","when":null,"eq":""},"type":"textfield","hideLabel":true,"labelPosition":"top","tags":[],"properties":{},"inDataGrid":true,"autofocus":false,"spellcheck":true},{"lockKey":true,"input":true,"tableView":true,"inputType":"text","inputMask":"","label":"Adult's Last Name","key":"H_CHILD_SUP-H_ADULT_LN","placeholder":"","prefix":"","suffix":"","multiple":false,"defaultValue":"","protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"validate":{"required":false,"minLength":"","maxLength":"","pattern":"","custom":"","customPrivate":false},"conditional":{"show":"","when":null,"eq":""},"type":"textfield","hideLabel":true,"labelPosition":"top","tags":[],"properties":{},"inDataGrid":true,"autofocus":false,"spellcheck":true}]}]},{"hideLabel":false,"type":"button","theme":"primary","disableOnInvalid":false,"action":"submit","block":false,"rightIcon":"","leftIcon":"","size":"md","key":"submit","tableView":false,"label":"Submit","input":true,"tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{},"autofocus":false}],"revisions":"","_vid":0,"access":[{"roles":[],"type":"create_own"},{"roles":[],"type":"create_all"},{"roles":[],"type":"read_own"},{"roles":["5ac4e41afad38b75e5041de5","5ac4e41afad38b2bec041de6","5ac4e41afad38bb779041de7"],"type":"read_all"},{"roles":[],"type":"update_own"},{"roles":[],"type":"update_all"},{"roles":[],"type":"delete_own"},{"roles":[],"type":"delete_all"},{"roles":[],"type":"team_read"},{"roles":[],"type":"team_write"},{"roles":[],"type":"team_admin"}],"submissionAccess":[{"roles":["5ac4e41afad38bb779041de7"],"type":"create_own"},{"roles":[],"type":"create_all"},{"roles":["5ac4e41afad38bb779041de7"],"type":"read_own"},{"roles":["5ac4e41afad38bb779041de7"],"type":"read_all"},{"roles":["5ac4e41afad38bb779041de7"],"type":"update_own"},{"roles":["5ac4e41afad38bb779041de7"],"type":"update_all"},{"roles":["5ac4e41afad38bb779041de7"],"type":"delete_own"},{"roles":["5ac4e41afad38bb779041de7"],"type":"delete_all"},{"roles":[],"type":"team_read"},{"roles":[],"type":"team_write"},{"roles":[],"type":"team_admin"}],"created":"2018-04-04T14:42:36.708Z","_id":"5ac4e45c3c2be25241d2d162","title":"Student Untaxed Income","display":"form","settings":{},"name":"studentuntaxedincome","path":"studentuntaxedincome","project":"5ac4e41afad38b78a4041de4","modified":"2018-04-12T17:03:04.667Z","machineName":"mkznlmrjiahqmow:studentuntaxedincome"};

    $scope.renderForm = true;

    apiService.fetch('https://httpbin.org/uuid').then(function(data) {
      console.log(data);
    });

    $scope.$on('formUpdate', function(event, form) {
      angular.merge($scope.form, form);
      $scope.renderForm = false;
      setTimeout(function() {
        $scope.renderForm = true;
      }, 10);
    });

    var originalComps = _.cloneDeep($scope.form.components);
    originalComps.push(angular.copy(formioComponents.components.button.settings));
    $scope.jsonCollapsed = true;
    $timeout(function() {
      $scope.jsonCollapsed = false;
    }, 200);
    var currentDisplay = 'form';
    $scope.$watch('form.display', function(display) {
      if (display && (display !== currentDisplay)) {
        currentDisplay = display;
        if (display === 'form') {
          $scope.form.components = originalComps;
        } else {
          $scope.form.components = [{
            type: 'panel',
            input: false,
            title: 'Page 1',
            theme: 'default',
            components: originalComps
          }];
        }
      }
    });

  }]);
