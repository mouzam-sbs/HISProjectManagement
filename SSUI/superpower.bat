call echo Manzoor you have got super powers! Please dont share it with others! Your magic starts in next 10 secs
call timeout 10
call npm install @angular/cli --global
call ng new SSUI --skip-install --routing=true --style=css
call move SSUI\* .
call move SSUI\e2e .
call move SSUI\src .
call mkdir wwwroot
call copy NUL wwwroot\text.txt
call echo Kindly change the  "outputPath": "wwwroot" in angular.json in 60 secs
call timeout 60
call echo Good job now wait and watch!
call npm install --save
call echo Now! Do you want me to add paging sir?
call timeout 10
call npm install ngx-pagination
call echo Now! Do you want me to add searching sir?
call timeout 10
call npm install ng2-search-filter
call echo Now! Do you want me to add sorting sir?
call timeout 10
call npm install ngx-order-pipe
call echo Now! Do you want me to add bootstrap and jquery sir?
call timeout 10
call npm install bootstrap jquery
call echo Now! Do you want me to add local web storage sir?
call timeout 10
call npm install angular-web-storage --save
call echo Now! Do you want me to add all components sir?
call timeout 10
call ng g c header --skipTests
call ng g c footer --skipTests
call ng g c home --skipTests
call ng g c login --skipTests
call ng g c register --skipTests
call ng g c error --skipTests
call ng g c user/readstories --skipTests
call ng g c user/poststory --skipTests
call ng g c admin/approvestory --skipTests
call echo Now! Do you want me to add all services sir?
call timeout 10
call ng g s services/api --skipTests
call ng g s services/auth --skipTests
call echo Now! Do you want me to add all models sir?
call timeout 10
call ng g class models/story --skipTests
call ng g class models/ssuser --skipTests
call ng g class models/loginvm --skipTests
call echo Now! Do you want me to Build it sir?
call timeout 10
call npm install --save
call ng build
call echo Now! Atleast you should run the app sir.. I am tired...
call timeout 10
call ng serve -o
