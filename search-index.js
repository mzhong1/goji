var searchIndex = {};
searchIndex["goji"] = {"doc":"Goji provides an interface for Jira&#39;s REST api","items":[[3,"Transitions","goji","issue transition interface",null,null],[3,"Issues","","issue options",null,null],[3,"Search","","search interface",null,null],[3,"SearchOptions","","options availble for search",null,null],[3,"SearchOptionsBuilder","","a builder interface for search option\nTypically this is initialized with SearchOptions::builder()",null,null],[3,"Errors","","represents an general jira error response",null,null],[12,"error_messages","","",0,null],[12,"errors","","",0,null],[3,"Issue","","represents a single jira issue",null,null],[12,"self_link","","",1,null],[12,"key","","",1,null],[12,"id","","",1,null],[12,"fields","","",1,null],[3,"Project","","",null,null],[12,"id","","",2,null],[12,"key","","",2,null],[12,"name","","",2,null],[3,"IssueLink","","represents link relationship between issues",null,null],[12,"id","","",3,null],[12,"self_link","","",3,null],[12,"outward_issue","","",3,null],[12,"inward_issue","","",3,null],[12,"link_type","","",3,null],[3,"LinkType","","represents type of issue relation",null,null],[12,"id","","",4,null],[12,"inward","","",4,null],[12,"name","","",4,null],[12,"outward","","",4,null],[12,"self_link","","",4,null],[3,"Version","","",null,null],[12,"archived","","",5,null],[12,"id","","",5,null],[12,"name","","",5,null],[12,"released","","",5,null],[12,"self_link","","",5,null],[3,"User","","",null,null],[12,"active","","",6,null],[12,"avatar_urls","","",6,null],[12,"display_name","","",6,null],[12,"email_address","","",6,null],[12,"key","","",6,null],[12,"name","","",6,null],[12,"self_link","","",6,null],[12,"timezone","","",6,null],[3,"Status","","",null,null],[12,"description","","",7,null],[12,"icon_url","","",7,null],[12,"id","","",7,null],[12,"name","","",7,null],[12,"self_link","","",7,null],[3,"Priority","","",null,null],[12,"icon_url","","",8,null],[12,"id","","",8,null],[12,"name","","",8,null],[12,"self_link","","",8,null],[3,"IssueType","","",null,null],[12,"description","","",9,null],[12,"icon_url","","",9,null],[12,"id","","",9,null],[12,"name","","",9,null],[12,"self_link","","",9,null],[12,"subtask","","",9,null],[3,"SearchResults","","",null,null],[12,"total","","",10,null],[12,"max_results","","",10,null],[12,"start_at","","",10,null],[12,"expand","","",10,null],[12,"issues","","",10,null],[3,"TransitionOption","","",null,null],[12,"id","","",11,null],[12,"name","","",11,null],[12,"to","","",11,null],[3,"TransitionTo","","",null,null],[12,"name","","",12,null],[12,"id","","",12,null],[3,"TransitionOptions","","contains list of options an issue can transitions through",null,null],[12,"transitions","","",13,null],[3,"TransitionTriggerOptions","","",null,null],[12,"transition","","",14,null],[12,"fields","","",14,null],[3,"TransitionTriggerOptionsBuilder","","",null,null],[12,"transition","","",15,null],[12,"fields","","",15,null],[3,"Resolution","","",null,null],[3,"Transition","","",null,null],[12,"id","","",16,null],[3,"Jira","","Entrypoint into client interface\nhttps://docs.atlassian.com/jira/REST/latest/",null,null],[4,"Error","","an enumeration over potential errors\nthat may happen when sending a request to jira",null,null],[13,"Http","","error associated with http request",17,null],[13,"IO","","error associated IO",17,null],[13,"Serde","","error associated with parsing or serializing",17,null],[13,"Fault","","client request errors",17,null],[12,"code","goji::Error","",17,null],[12,"errors","","",17,null],[13,"Unauthorized","goji","invalid credentials",17,null],[4,"Credentials","","Types of authentication credentials",null,null],[13,"Basic","","username and password credentials",18,null],[11,"new","","",19,{"inputs":[{"name":"jira"},{"name":"k"}],"output":{"name":"transitions"}}],[11,"list","","return list of transitions options for this issue",19,null],[11,"trigger","","trigger a issue transition\nto transition with a resolution use TransitionTrigger::builder(id).resolution(name)",19,null],[11,"new","","",20,{"inputs":[{"name":"jira"}],"output":{"name":"issues"}}],[11,"get","","",20,null],[11,"new","","",21,{"inputs":[{"name":"jira"}],"output":{"name":"search"}}],[11,"list","","returns a single page of search results\nhttps://docs.atlassian.com/jira/REST/latest/#api/2/search",21,null],[11,"iter","","runs a type why may be used to iterate over consecutive pages of results\nhttps://docs.atlassian.com/jira/REST/latest/#api/2/search",21,null],[11,"default","","",22,{"inputs":[],"output":{"name":"searchoptions"}}],[11,"builder","","return a new instance of a builder for options",22,{"inputs":[],"output":{"name":"searchoptionsbuilder"}}],[11,"serialize","","serialize options as a string. returns None if no options are defined",22,null],[11,"default","","",23,{"inputs":[],"output":{"name":"searchoptionsbuilder"}}],[11,"new","","",23,{"inputs":[],"output":{"name":"searchoptionsbuilder"}}],[11,"fields","","",23,null],[11,"validate","","",23,null],[11,"max_results","","",23,null],[11,"start_at","","",23,null],[11,"expand","","",23,null],[11,"build","","",23,null],[11,"fmt","","",17,null],[11,"from","","",17,{"inputs":[{"name":"serdeerror"}],"output":{"name":"error"}}],[11,"from","","",17,{"inputs":[{"name":"httperror"}],"output":{"name":"error"}}],[11,"from","","",17,{"inputs":[{"name":"ioerror"}],"output":{"name":"error"}}],[11,"fmt","","",0,null],[11,"fmt","","",1,null],[11,"field","","resolves a typed field from an issues lists of arbitrary fields",1,null],[11,"assignee","","user assigned to issue",1,null],[11,"creator","","user that created the issue",1,null],[11,"reporter","","user that reported the issue",1,null],[11,"status","","the current status of the issue",1,null],[11,"summary","","brief summary of the issue",1,null],[11,"description","","description of the issue",1,null],[11,"updated","","updated timestamp",1,null],[11,"created","","created timestamp",1,null],[11,"resolution_date","","",1,null],[11,"issue_type","","an issue type",1,null],[11,"labels","","labels associated with the issue",1,null],[11,"fix_versions","","list of versions associated with the issue",1,null],[11,"priority","","priority of the issue",1,null],[11,"links","","links to other issues",1,null],[11,"project","","",1,null],[11,"resolution","","",1,null],[11,"fmt","","",2,null],[11,"fmt","","",3,null],[11,"fmt","","",4,null],[11,"fmt","","",5,null],[11,"fmt","","",6,null],[11,"fmt","","",7,null],[11,"fmt","","",8,null],[11,"fmt","","",9,null],[11,"fmt","","",10,null],[11,"fmt","","",11,null],[11,"fmt","","",12,null],[11,"fmt","","",13,null],[11,"fmt","","",14,null],[11,"new","","creates a new instance",14,{"inputs":[{"name":"i"}],"output":{"name":"transitiontriggeroptions"}}],[11,"builder","","",14,{"inputs":[{"name":"i"}],"output":{"name":"transitiontriggeroptionsbuilder"}}],[11,"new","","creates a new instance",15,{"inputs":[{"name":"i"}],"output":{"name":"transitiontriggeroptionsbuilder"}}],[11,"field","","appends a field to update as part of transition",15,null],[11,"resolution","","updates resolution in transition",15,null],[11,"build","","",15,null],[11,"fmt","","",24,null],[11,"clone","","",16,null],[11,"fmt","","",16,null],[6,"Result","","",null,null],[11,"new","","creates a new instance of a jira client",25,{"inputs":[{"name":"h"},{"name":"credentials"},{"name":"client"}],"output":{"name":"jira"}}],[11,"transitions","","return transitions interface",25,null],[11,"search","","return search interface",25,null],[11,"issues","","",25,null]],"paths":[[3,"Errors"],[3,"Issue"],[3,"Project"],[3,"IssueLink"],[3,"LinkType"],[3,"Version"],[3,"User"],[3,"Status"],[3,"Priority"],[3,"IssueType"],[3,"SearchResults"],[3,"TransitionOption"],[3,"TransitionTo"],[3,"TransitionOptions"],[3,"TransitionTriggerOptions"],[3,"TransitionTriggerOptionsBuilder"],[3,"Transition"],[4,"Error"],[4,"Credentials"],[3,"Transitions"],[3,"Issues"],[3,"Search"],[3,"SearchOptions"],[3,"SearchOptionsBuilder"],[3,"Resolution"],[3,"Jira"]]};
initSearch(searchIndex);