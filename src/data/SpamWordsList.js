// Updated 22/3/2022
const SpamWordsList = {
  urgent: [
    /\baccess the dog heads\b/gi,
    /\bAccess\b/gi,
    /\bAccess now\b/gi,
    /\bAct\b/gi,
    /\bAct immediately\b/gi,
    /\bAct now\b/gi,
    /\bAct now!\b/gi,
    /\bAction\b/gi,
    /\bAction required\b/gi,
    /\bApply here\b/gi,
    /\bApply now\b/gi,
    /\bApply now!\b/gi,
    /\bApply online\b/gi,
    /\bBecome a member\b/gi,
    /\bBefore it's too late\b/gi,
    /\bBeing a member\b/gi,
    /\bBuy\b/gi,
    /\bBuy direct\b/gi,
    /\bBuy now\b/gi,
    /\bBuy today\b/gi,
    /\bCall\b/gi,
    /\bCall free\b/gi,
    /\bCall free now\b/gi,
    /\bCall me\b/gi,
    /\bCall now\b/gi,
    /\bCall now!\b/gi,
    /\bCan we have a minute of your time?\b/gi,
    /\bCancel now\b/gi,
    /\bCancellation required\b/gi,
    /\bClaim now\b/gi,
    /\bClick\b/gi,
    /\bClick below\b/gi,
    /\bClick here\b/gi,
    /\bClick me to download\b/gi,
    /\bClick now\b/gi,
    /\bClick this link\b/gi,
    /\bClick to get\b/gi,
    /\bClick to remove\b/gi,
    /\bContact us immediately\b/gi,
    /\bDeal ending soon\b/gi,
    /\bDo it now\b/gi,
    /\bDo it today\b/gi,
    /\bDon't delete\b/gi,
    /\bDon't hesitate\b/gi,
    /\bDon't waste time\b/gi,
    /\bDon’t delete\b/gi,
    /\bExclusive deal\b/gi,
    /\bExpire\b/gi,
    /\bExpires today\b/gi,
    /\bFinal call\b/gi,
    /\bFor instant access\b/gi,
    /\bFor Only\b/gi,
    /\bFor you\b/gi,
    /\bFriday before [holiday]\b/gi,
    /\bGet it away\b/gi,
    /\bGet it now\b/gi,
    /\bGet now\b/gi,
    /\bGet paid\b/gi,
    /\bGet started\b/gi,
    /\bGet started now\b/gi,
    /\bGreat offer\b/gi,
    /\bHurry up\b/gi,
    /\bImmediately\b/gi,
    /\bInfo you requested\b/gi,
    /\bInformation you requested\b/gi,
    /\bInstant\b/gi,
    /\bLimited time\b/gi,
    /\bNew customers only\b/gi,
    /\bNow\b/gi,
    /\bNow only\b/gi,
    /\bOffer expires\b/gi,
    /\bOnce in lifetime\b/gi,
    /\bOnly\b/gi,
    /\bOrder now\b/gi,
    /\bOrder today\b/gi,
    /\bPlease read\b/gi,
    /\bPurchase now\b/gi,
    /\bSign up free\b/gi,
    /\bSign up free today\b/gi,
    /\bSupplies are limited\b/gi,
    /\bTake action\b/gi,
    /\bTake action now\b/gi,
    /\bThis won’t last\b/gi,
    /\bTime limited\b/gi,
    /\bToday\b/gi,
    /\bTop urgent\b/gi,
    /\bTrial\b/gi,
    /\bUrgent\b/gi,
    /\bWhat are you waiting for?\b/gi,
    /\bWhile supplies last\b/gi,
    /\bYou are a winner\b/gi,
  ],

  shady: [
    /\b0 down\b/gi,
    /\bAll\b/gi,
    /\bAll natural\b/gi,
    /\bAll natural new\b/gi,
    /\bAll new\b/gi,
    /\bAll-natural\b/gi,
    /\bAll-new\b/gi,
    /\bAllowance\b/gi,
    /\bAs seen on\b/gi,
    /\bAs seen on Oprah\b/gi,
    /\bAt no cost\b/gi,
    /\bAuto email removal\b/gi,
    /\bAvoice bankruptcy\b/gi,
    /\bAvoid\b/gi,
    /\bBeneficial offer\b/gi,
    /\bBeneficiary\b/gi,
    /\bBill 1618\b/gi,
    /\bBrand new pager\b/gi,
    /\bBulk email\b/gi,
    /\bBuying judgements\b/gi,
    /\bBuying judgments\b/gi,
    /\bCable converter\b/gi,
    /\bCalling creditors\b/gi,
    /\bCan you help us?\b/gi,
    /\bCancel at any time\b/gi,
    /\bCannot be combined\b/gi,
    /\bCelebrity\b/gi,
    /\bCell phone cancer scam\b/gi,
    /\bCertified\b/gi,
    /\bChance\b/gi,
    /\bCheap\b/gi,
    /\bCheap meds\b/gi,
    /\bCialis\b/gi,
    /\bClaims\b/gi,
    /\bClaims not to be selling anything\b/gi,
    /\bClaims to be in accordance with some spam law\b/gi,
    /\bClaims to be legal\b/gi,
    /\bClearance\b/gi,
    /\bCollect\b/gi,
    /\bCollect child support\b/gi,
    /\bCompare\b/gi,
    /\bCompare now\b/gi,
    /\bCompare online\b/gi,
    /\bCompare rates\b/gi,
    /\bCompete for your business\b/gi,
    /\bConfidentiality\b/gi,
    /\bCongratulations\b/gi,
    /\bConsolidate debt and credit\b/gi,
    /\bConsolidate your debt\b/gi,
    /\bCopy accurately\b/gi,
    /\bCopy DVDs\b/gi,
    /\bCOVID\b/gi,
    /\bCures\b/gi,
    /\bCures baldness\b/gi,
    /\bDiagnostic\b/gi,
    /\bDIAGNOSTICS\b/gi,
    /\bDiet\b/gi,
    /\bDig up dirt on friends\b/gi,
    /\bDirect email\b/gi,
    /\bDirect marketing\b/gi,
    /\bEliminate debt\b/gi,
    /\bExplode your business\b/gi,
    /\bFast viagra delivery\b/gi,
    /\bFor new customers only\b/gi,
    /\bForeclosure\b/gi,
    /\bFree\b/gi,
    /\bFree access money gift\b/gi,
    /\bFree bonus\b/gi,
    /\bFree cell phone\b/gi,
    /\bFree DVD\b/gi,
    /\bFree grant money\b/gi,
    /\bFree information\b/gi,
    /\bFree installation\b/gi,
    /\bFree Instant\b/gi,
    /\bFree iPhone\b/gi,
    /\bFree laptop\b/gi,
    /\bFree leads\b/gi,
    /\bFree Macbook\b/gi,
    /\bFree offer\b/gi,
    /\bFree priority mail\b/gi,
    /\bFree sample\b/gi,
    /\bFree website\b/gi,
    /\bFree!\b/gi,
    /\bGet\b/gi,
    /\bGift card\b/gi,
    /\bGift certificate\b/gi,
    /\bGift included\b/gi,
    /\bGive it away\b/gi,
    /\bGiving away\b/gi,
    /\bGiving it away\b/gi,
    /\bGold\b/gi,
    /\bGreat\b/gi,
    /\bGreat deal\b/gi,
    /\bGreetings of the day\b/gi,
    /\bGrowth hormone\b/gi,
    /\bGuarantee\b/gi,
    /\bGuaranteed deposit\b/gi,
    /\bGuaranteed income\b/gi,
    /\bGuaranteed payment\b/gi,
    /\bHave you been turned down?\b/gi,
    /\bHello (with no name included)\b/gi,
    /\bHidden charges\b/gi,
    /\bHidden costs\b/gi,
    /\bHidden fees\b/gi,
    /\bHigh score\b/gi,
    /\bHome based business\b/gi,
    /\bHome mortgage\b/gi,
    /\bHuman\b/gi,
    /\bHuman growth hormone\b/gi,
    /\bIf only it were that easy\b/gi,
    /\bImportant information\b/gi,
    /\bImportant notification\b/gi,
    /\bInstant weight loss\b/gi,
    /\bInsurance Lose weight\b/gi,
    /\bInternet marketing\b/gi,
    /\bInvestment decision\b/gi,
    /\bInvoice\b/gi,
    /\bIt’s effective\b/gi,
    /\bJob alert\b/gi,
    /\bJunk\b/gi,
    /\bLambo\b/gi,
    /\bLaser printer\b/gi,
    /\bLast Day\b/gi,
    /\bLegal\b/gi,
    /\bLegal notice\b/gi,
    /\bLife\b/gi,
    /\bLife insurance\b/gi,
    /\bLifetime access\b/gi,
    /\bLifetime deal\b/gi,
    /\bLimited\b/gi,
    /\bLimited amount\b/gi,
    /\bLimited number\b/gi,
    /\bLimited offer\b/gi,
    /\bLimited supply\b/gi,
    /\bLimited time offer\b/gi,
    /\bLimited time only\b/gi,
    /\bLoan\b/gi,
    /\bLong distance phone number\b/gi,
    /\bLong distance phone offer\b/gi,
    /\bLose weight\b/gi,
    /\bLose weight fast\b/gi,
    /\bLose weight spam\b/gi,
    /\bLottery\b/gi,
    /\bLower interest rate\b/gi,
    /\bLower interest rates\b/gi,
    /\bLower monthly payment\b/gi,
    /\bLower your mortgage rate\b/gi,
    /\bLowest insurance rates\b/gi,
    /\bLowest interest rate\b/gi,
    /\bLowest rate\b/gi,
    /\bLowest rates\b/gi,
    /\bLuxury\b/gi,
    /\bLuxury car\b/gi,
    /\bMail in order form\b/gi,
    /\bMain in order form\b/gi,
    /\bMark this as not junk\b/gi,
    /\bMass email\b/gi,
    /\bMedical\b/gi,
    /\bMedicine\b/gi,
    /\bMeet girls\b/gi,
    /\bMeet me\b/gi,
    /\bMeet singles\b/gi,
    /\bMeet women\b/gi,
    /\bMember\b/gi,
    /\bMember stuff\b/gi,
    /\bMessage contains disclaimer\b/gi,
    /\bMessage from\b/gi,
    /\bMillionaire\b/gi,
    /\bMillions\b/gi,
    /\bMLM\b/gi,
    /\bMulti-level marketing\b/gi,
    /\bName\b/gi,
    /\bNear you\b/gi,
    /\bNever before\b/gi,
    /\bNew\b/gi,
    /\bNew domain extensions\b/gi,
    /\bNigerian\b/gi,
    /\bNo age restrictions\b/gi,
    /\bNo catch\b/gi,
    /\bNo claim forms\b/gi,
    /\bNo cost\b/gi,
    /\bNo credit check\b/gi,
    /\bNo credit experience\b/gi,
    /\bNo deposit required\b/gi,
    /\bNo disappointment\b/gi,
    /\bNo experience\b/gi,
    /\bNo fees\b/gi,
    /\bNo gimmick\b/gi,
    /\bNo hidden\b/gi,
    /\bNo hidden costs\b/gi,
    /\bNo hidden fees\b/gi,
    /\bNo hidden сosts\b/gi,
    /\bNo interest\b/gi,
    /\bNo interests\b/gi,
    /\bNo inventory\b/gi,
    /\bNo investment\b/gi,
    /\bNo investment required\b/gi,
    /\bNo medical exams\b/gi,
    /\bNo middleman\b/gi,
    /\bNo obligation\b/gi,
    /\bNo payment required\b/gi,
    /\bNo purchase necessary\b/gi,
    /\bNo questions asked\b/gi,
    /\bNo selling\b/gi,
    /\bNo strings attached\b/gi,
    /\bNo-obligation\b/gi,
    /\bNominated bank account\b/gi,
    /\bNot intended\b/gi,
    /\bNot junk\b/gi,
    /\bNot scam\b/gi,
    /\bNot spam\b/gi,
    /\bNotspam\b/gi,
    /\bNumber 1\b/gi,
    /\bObligation\b/gi,
    /\bOff everything\b/gi,
    /\bOff shore\b/gi,
    /\bOffer extended\b/gi,
    /\bOffers\b/gi,
    /\bOffshore\b/gi,
    /\bOne hundred percent\b/gi,
    /\bOne-time\b/gi,
    /\bOnline biz opportunity\b/gi,
    /\bOnline degree\b/gi,
    /\bOnline income\b/gi,
    /\bOnline job\b/gi,
    /\bOpen\b/gi,
    /\bOpportunity\b/gi,
    /\bOpt-in\b/gi,
    /\bOrder\b/gi,
    /\bOrder shipped by\b/gi,
    /\bOrder status\b/gi,
    /\bOrders shipped by\b/gi,
    /\bOrders shipped by shopper\b/gi,
    /\bOutstanding value\b/gi,
    /\bOutstanding values\b/gi,
    /\bPassword\b/gi,
    /\bPasswords\b/gi,
    /\bPay your bills\b/gi,
    /\bPer day per week per year\b/gi,
    /\bPer month\b/gi,
    /\bPerfect\b/gi,
    /\bPerformance\b/gi,
    /\bPhone\b/gi,
    /\bPlease\b/gi,
    /\bPlease open\b/gi,
    /\bPresently\b/gi,
    /\bPrint form signature\b/gi,
    /\bPrint from signature\b/gi,
    /\bPrint out and fax\b/gi,
    /\bPriority mail\b/gi,
    /\bPrivately owned funds\b/gi,
    /\bPrizes\b/gi,
    /\bProblem with shipping\b/gi,
    /\bProblem with your order\b/gi,
    /\bProduced and sent out\b/gi,
    /\bProfit\b/gi,
    /\bPromise you\b/gi,
    /\bPurchase\b/gi,
    /\bPure Profits\b/gi,
    /\bQuotes\b/gi,
    /\bRate\b/gi,
    /\bReal thing\b/gi,
    /\bRebate\b/gi,
    /\bReduce debt\b/gi,
    /\bRefinance home\b/gi,
    /\bRefinanced home\b/gi,
    /\bRefund\b/gi,
    /\bRegarding\b/gi,
    /\bRemoval instructions\b/gi,
    /\bRemoves\b/gi,
    /\bRemoves wrinkles\b/gi,
    /\bReplica watches\b/gi,
    /\bRequest\b/gi,
    /\bRequest now\b/gi,
    /\bRequest today\b/gi,
    /\bRequires initial investment\b/gi,
    /\bRequires investment\b/gi,
    /\bReverses aging\b/gi,
    /\bRisk free\b/gi,
    /\bRolex\b/gi,
    /\bRound the world\b/gi,
    /\bS 1618\b/gi,
    /\bSafeguard notice\b/gi,
    /\bSale\b/gi,
    /\bSales\b/gi,
    /\bSave\b/gi,
    /\bSave $, Save €\b/gi,
    /\bSave big\b/gi,
    /\bSave big month\b/gi,
    /\bSave money\b/gi,
    /\bSave now\b/gi,
    /\bScore with babes\b/gi,
    /\bSearch engine optimisation\b/gi,
    /\bSection 301\b/gi,
    /\bSee for yourself\b/gi,
    /\bSeen on\b/gi,
    /\bSerious\b/gi,
    /\bSerious case\b/gi,
    /\bSerious offer\b/gi,
    /\bSerious only\b/gi,
    /\bSex\b/gi,
    /\bShop now\b/gi,
    /\bShopper\b/gi,
    /\bShopping spree\b/gi,
    /\bSnoring\b/gi,
    /\bSocial security number\b/gi,
    /\bSoon\b/gi,
    /\bSpam\b/gi,
    /\bSpam free\b/gi,
    /\bSpecial deal\b/gi,
    /\bSpecial discount\b/gi,
    /\bSpecial for you\b/gi,
    /\bSpecial offer\b/gi,
    /\bStainless steel\b/gi,
    /\bStock alert\b/gi,
    /\bStock disclaimer statement\b/gi,
    /\bStock pick\b/gi,
    /\bStocks stock pick stock alert\b/gi,
    /\bStop calling me\b/gi,
    /\bStop emailing me\b/gi,
    /\bStop further distribution\b/gi,
    /\bStop snoring\b/gi,
    /\bStrong buy\b/gi,
    /\bStuff on sale\b/gi,
    /\bSubject to\b/gi,
    /\bSubject to cash\b/gi,
    /\bSubscribe\b/gi,
    /\bSubscribe for free\b/gi,
    /\bSubscribe now\b/gi,
    /\bSuper promo\b/gi,
    /\bSupplies\b/gi,
    /\bTack action now\b/gi,
    /\bTalks about hidden charges\b/gi,
    /\bTalks about prizes\b/gi,
    /\bTells you it’s an ad\b/gi,
    /\bTerms\b/gi,
    /\bThe best rates\b/gi,
    /\bThe email asks for a credit card\b/gi,
    /\bThe following form\b/gi,
    /\bThey make a claim or claims that they're in accordance with spam law\b/gi,
    /\bThey try to keep your money no refund\b/gi,
    /\bThey’re just giving it away\b/gi,
    /\bThis isn't junk\b/gi,
    /\bThis isn't spam\b/gi,
    /\bThis isn’t a scam\b/gi,
    /\bThis isn’t junk\b/gi,
    /\bThis isn’t spam\b/gi,
    /\bTimeshare\b/gi,
    /\bTimeshare offers\b/gi,
    /\bTraffic\b/gi,
    /\bTrial unlimited\b/gi,
    /\bU.S. dollars\b/gi,
    /\bUndisclosed\b/gi,
    /\bUndisclosed recipient\b/gi,
    /\bUniversity diplomas\b/gi,
    /\bUnsecured credit\b/gi,
    /\bUnsecured debt\b/gi,
    /\bUnsolicited\b/gi,
    /\bUnsubscribe\b/gi,
    /\bUrgent response\b/gi,
    /\bUS dollars Euros\b/gi,
    /\bVacation\b/gi,
    /\bVacation offers\b/gi,
    /\bValium\b/gi,
    /\bViagra\b/gi,
    /\bVicodin\b/gi,
    /\bVIP\b/gi,
    /\bVisit our website\b/gi,
    /\bWants credit card\b/gi,
    /\bWarranty expired\b/gi,
    /\bWe hate spam\b/gi,
    /\bWe honor all\b/gi,
    /\bWebsite visitors\b/gi,
    /\bWeekend getaway\b/gi,
    /\bWeight loss\b/gi,
    /\bWhat’s keeping you?\b/gi,
    /\bWhile available\b/gi,
    /\bWhile in stock\b/gi,
    /\bWhile stocks last\b/gi,
    /\bWhile you sleep\b/gi,
    /\bWho really wins?\b/gi,
    /\bWin\b/gi,
    /\bWinner\b/gi,
    /\bWinning\b/gi,
    /\bWon\b/gi,
    /\bXanax\b/gi,
    /\bXXX\b/gi,
    /\bYou have been chosen\b/gi,
    /\bYou have been selected\b/gi,
    /\bYour chance\b/gi,
    /\bYour status\b/gi,
    /\bZero chance\b/gi,
    /\bZero percent\b/gi,
    /\bZero risk\b/gi,
  ],
  overpromise: [
    /\b#1\b/gi,
    /\b%\b/gi,
    /\b% free\b/gi,
    /\b% Satisfied\b/gi,
    /\b0%\b/gi,
    /\b0% risk\b/gi,
    /\b100%\b/gi,
    /\b100% free\b/gi,
    /\b100% more\b/gi,
    /\b100% off\b/gi,
    /\b100% satisfied\b/gi,
    /\b99.90%\b/gi,
    /\b99%\b/gi,
    /\bAccess for free\b/gi,
    /\bAdditional income\b/gi,
    /\bAmazed\b/gi,
    /\bAmazing\b/gi,
    /\bAmazing offer\b/gi,
    /\bAmazing stuff\b/gi,
    /\bBe amazed\b/gi,
    /\bBe surprised\b/gi,
    /\bBe your own boss\b/gi,
    /\bBelieve me\b/gi,
    /\bBest bargain\b/gi,
    /\bBest deal\b/gi,
    /\bBest offer\b/gi,
    /\bBest price\b/gi,
    /\bBest rates\b/gi,
    /\bBig bucks\b/gi,
    /\bBonus\b/gi,
    /\bBoss\b/gi,
    /\bCan’t live without\b/gi,
    /\bCancel\b/gi,
    /\bConsolidate debt\b/gi,
    /\bDouble your cash\b/gi,
    /\bDouble your income\b/gi,
    /\bDrastically reduced\b/gi,
    /\bEarn extra cash\b/gi,
    /\bEarn money\b/gi,
    /\bEliminate bad credit\b/gi,
    /\bExpect to earn\b/gi,
    /\bExtra\b/gi,
    /\bExtra cash\b/gi,
    /\bExtra income\b/gi,
    /\bFantastic\b/gi,
    /\bFantastic deal\b/gi,
    /\bFantastic offer\b/gi,
    /\bFAST\b/gi,
    /\bFast cash\b/gi,
    /\bFinancial freedom\b/gi,
    /\bFree access\b/gi,
    /\bFree consultation\b/gi,
    /\bFree gift\b/gi,
    /\bFree hosting\b/gi,
    /\bFree info\b/gi,
    /\bFree investment\b/gi,
    /\bFree membership\b/gi,
    /\bFree money\b/gi,
    /\bFree preview\b/gi,
    /\bFree quote\b/gi,
    /\bFree trial\b/gi,
    /\bFull refund\b/gi,
    /\bGet out of debt\b/gi,
    /\bGiveaway\b/gi,
    /\bGuaranteed\b/gi,
    /\bIncrease sales\b/gi,
    /\bIncrease traffic\b/gi,
    /\bIncredible deal\b/gi,
    /\bJoin billions\b/gi,
    /\bJoin millions\b/gi,
    /\bJoin millions of Americans\b/gi,
    /\bJoin thousands\b/gi,
    /\bLower rates\b/gi,
    /\bLowest price\b/gi,
    /\bMake money\b/gi,
    /\bMillion\b/gi,
    /\bMillion dollars\b/gi,
    /\bMiracle\b/gi,
    /\bMoney back\b/gi,
    /\bMonth trial offer\b/gi,
    /\bMore Internet Traffic\b/gi,
    /\bNumber one\b/gi,
    /\bOnce in a lifetime\b/gi,
    /\bOne hundred percent guaranteed\b/gi,
    /\bOne time\b/gi,
    /\bPennies a day\b/gi,
    /\bPotential earnings\b/gi,
    /\bPrize\b/gi,
    /\bPromise\b/gi,
    /\bPure profit\b/gi,
    /\bRisk-free\b/gi,
    /\bSatisfaction guaranteed\b/gi,
    /\bSave big money\b/gi,
    /\bSave up to\b/gi,
    /\bSpecial promotion\b/gi,
    /\bThe best\b/gi,
    /\bThousands\b/gi,
    /\bUnbeatable offer\b/gi,
    /\bUnbelievable\b/gi,
    /\bUnlimited\b/gi,
    /\bUnlimited trial\b/gi,
    /\bWonderful\b/gi,
    /\bYou will not believe your eyes\b/gi,
  ],
  money: [
    /[$$$]/gi,
    /\b€€€\b/gi,
    /\b£££\b/gi,
    /\b50% off\b/gi,
    /\bA few bob\b/gi,
    /\bAccept cash cards\b/gi,
    /\bAccept credit cards\b/gi,
    /\bAffordable\b/gi,
    /\bAffordable deal\b/gi,
    /\bAvoid bankruptcy\b/gi,
    /\bBad credit\b/gi,
    /\bBank\b/gi,
    /\bBankruptcy\b/gi,
    /\bBargain\b/gi,
    /\bBilling\b/gi,
    /\bBilling address\b/gi,
    /\bBillion\b/gi,
    /\bBillion dollars\b/gi,
    /\bBillionaire\b/gi,
    /\bCard accepted\b/gi,
    /\bCards accepted\b/gi,
    /\bCash\b/gi,
    /\bCash bonus\b/gi,
    /\bCash out\b/gi,
    /\bCash-out\b/gi,
    /\bCashcashcash\b/gi,
    /\bCasino\b/gi,
    /\bCents on the dollar\b/gi,
    /\bCheck\b/gi,
    /\bCheck or money order\b/gi,
    /\bClaim your discount\b/gi,
    /\bCost\b/gi,
    /\bCosts\b/gi,
    /\bCredit\b/gi,
    /\bCredit bureaus\b/gi,
    /\bCredit card\b/gi,
    /\bCredit card offers\b/gi,
    /\bCredit or Debit\b/gi,
    /\bDeal\b/gi,
    /\bDebt\b/gi,
    /\bDiscount\b/gi,
    /\bDollars\b/gi,
    /\bDouble your\b/gi,
    /\bDouble your wealth\b/gi,
    /\bEarn\b/gi,
    /\bEarn $\b/gi,
    /\bEarn cash\b/gi,
    /\bEarn extra income\b/gi,
    /\bEarn from home\b/gi,
    /\bEarn monthly\b/gi,
    /\bEarn per month\b/gi,
    /\bEarn per week\b/gi,
    /\bEarn your degree\b/gi,
    /\bEasy income\b/gi,
    /\bEasy terms\b/gi,
    /\bFinance\b/gi,
    /\bFinancial\b/gi,
    /\bFinancial advice\b/gi,
    /\bFinancial independence\b/gi,
    /\bFinancially independent\b/gi,
    /\bF r e e\b/gi,
    /\bFor free\b/gi,
    /\bFor just $\b/gi,
    /\bFor just $ (amount)\b/gi,
    /\bFor just $xxx\b/gi,
    /\bGet Money\b/gi,
    /\bGet your money\b/gi,
    /\bHidden assets\b/gi,
    /\bHuge discount\b/gi,
    /\bIncome\b/gi,
    /\bIncome from home\b/gi,
    /\bIncrease revenue\b/gi,
    /\bIncrease sales traffic\b/gi,
    /\bIncrease your chances\b/gi,
    /\bInitial investment\b/gi,
    /\bInstant earnings\b/gi,
    /\bInstant income\b/gi,
    /\bInsurance\b/gi,
    /\bInvestment\b/gi,
    /\bInvestment advice\b/gi,
    /\bLifetime\b/gi,
    /\bLoans\b/gi,
    /\bMake$\b/gi,
    /\bMoney\b/gi,
    /\bMoney making\b/gi,
    /\bMoney-back guarantee\b/gi,
    /\bMoney-making\b/gi,
    /\bMonthly payment\b/gi,
    /\bMortgage\b/gi,
    /\bMortgage rates\b/gi,
    /\bOffer\b/gi,
    /\bOne hundred percent free\b/gi,
    /\bOnly $\b/gi,
    /\bPrice\b/gi,
    /\bPrice protection\b/gi,
    /\bPrices\b/gi,
    /\bProfits\b/gi,
    /\bQuote\b/gi,
    /\bRates\b/gi,
    /\bRefinance\b/gi,
    /\bSave $\b/gi,
    /\bSerious cash\b/gi,
    /\bSubject to credit\b/gi,
    /\bUS dollars\b/gi,
    /\bWhy pay more?\b/gi,
    /\bYour income\b/gi,
  ],
  general: [
    /\bAcceptance\b/gi,
    /\bAccordingly\b/gi,
    /\bAccount-based marketing (ABM)\b/gi,
    /\bAccounts\b/gi,
    /\bAddresses\b/gi,
    /\bAddresses on CD\b/gi,
    /\bBeverage\b/gi,
    /\bConfidentiality on all orders\b/gi,
    /\bConfidentially on all orders\b/gi,
    /\bContent marketing\b/gi,
    /\bDear [email address]\b/gi,
    /\bDear [email/friend/somebody]\b/gi,
    /\bDear [first name]\b/gi,
    /\bDear [wrong name]\b/gi,
    /\bDigital marketing\b/gi,
    /\bDormant\b/gi,
    /\bEmail extractor\b/gi,
    /\bEmail harvest\b/gi,
    /\bEmail marketing\b/gi,
    /\bExtract email\b/gi,
    /\bForm\b/gi,
    /\bFreedom\b/gi,
    /\bFriend\b/gi,
    /\bHere\b/gi,
    /\bHidden\b/gi,
    /\bHome\b/gi,
    /\bHome based\b/gi,
    /\bHome employment\b/gi,
    /\bHome-based\b/gi,
    /\bHome-based business\b/gi,
    /\bHomebased business\b/gi,
    /\bIf you no longer wish to receive\b/gi,
    /\bImportant information regarding\b/gi,
    /\bIn accordance with laws\b/gi,
    /\bIncrease your sales\b/gi,
    /\bInternet market\b/gi,
    /\bLeave\b/gi,
    /\bLose\b/gi,
    /\bMaintained\b/gi,
    /\bMarketing\b/gi,
    /\bMarketing solution\b/gi,
    /\bMarketing solutions\b/gi,
    /\bMedium\b/gi,
    /\bMessage contains\b/gi,
    /\bMulti level marketing\b/gi,
    /\bNever\b/gi,
    /\bOne time mailing\b/gi,
    /\bOnline marketing\b/gi,
    /\bOnline pharmacy\b/gi,
    /\bOpt in\b/gi,
    /\bPer day\b/gi,
    /\bPer week\b/gi,
    /\bPre-approved\b/gi,
    /\bProblem\b/gi,
    /\bRemoval\b/gi,
    /\bRemove\b/gi,
    /\bReserves the right\b/gi,
    /\bReverses\b/gi,
    /\bSample\b/gi,
    /\bSatisfaction\b/gi,
    /\bScore\b/gi,
    /\bSearch engine\b/gi,
    /\bSearch engine listings\b/gi,
    /\bSearch engines\b/gi,
    /\bSent in compliance\b/gi,
    /\bSolution\b/gi,
    /\bStop\b/gi,
    /\bSuccess\b/gi,
    /\bTeen\b/gi,
    /\bTerms and conditions\b/gi,
    /\bWarranty\b/gi,
    /\bWeb traffic\b/gi,
    /\bWife\b/gi,
    /\bWork at home\b/gi,
    /\bWork from home\b/gi,
  ],
  profanity: [
    /\b2g1c\b/gi,
    /\b2 girls 1 cup\b/gi,
    /\bacrotomophilia\b/gi,
    /\balabama hot pocket\b/gi,
    /\balaskan pipeline\b/gi,
    /\banal\b/gi,
    /\banilingus\b/gi,
    /\banus\b/gi,
    /\bapeshit\b/gi,
    /\barsehole\b/gi,
    /\bass\b/gi,
    /\basshole\b/gi,
    /\bassmunch\b/gi,
    /\bauto erotic\b/gi,
    /\bautoerotic\b/gi,
    /\bbabeland\b/gi,
    /\bbaby batter\b/gi,
    /\bbaby juice\b/gi,
    /\bball gag\b/gi,
    /\bball gravy\b/gi,
    /\bball kicking\b/gi,
    /\bball licking\b/gi,
    /\bball sack\b/gi,
    /\bball sucking\b/gi,
    /\bbangbros\b/gi,
    /\bbareback\b/gi,
    /\bbarely legal\b/gi,
    /\bbarenaked\b/gi,
    /\bbastard\b/gi,
    /\bbastardo\b/gi,
    /\bbastinado\b/gi,
    /\bbbw\b/gi,
    /\bbdsm\b/gi,
    /\bbeaner\b/gi,
    /\bbeaners\b/gi,
    /\bbeaver cleaver\b/gi,
    /\bbeaver lips\b/gi,
    /\bbestiality\b/gi,
    /\bbig black\b/gi,
    /\bbig breasts\b/gi,
    /\bbig knockers\b/gi,
    /\bbig tits\b/gi,
    /\bbimbos\b/gi,
    /\bbirdlock\b/gi,
    /\bbitch\b/gi,
    /\bbitches\b/gi,
    /\bblack cock\b/gi,
    /\bblonde action\b/gi,
    /\bblonde on blonde action\b/gi,
    /\bblowjob\b/gi,
    /\bblow job\b/gi,
    /\bblow your load\b/gi,
    /\bblue waffle\b/gi,
    /\bblumpkin\b/gi,
    /\bbollocks\b/gi,
    /\bbondage\b/gi,
    /\bboner\b/gi,
    /\bboob\b/gi,
    /\bboobs\b/gi,
    /\bbooty call\b/gi,
    /\bbrown showers\b/gi,
    /\bbrunette action\b/gi,
    /\bbukkake\b/gi,
    /\bbulldyke\b/gi,
    /\bbullet vibe\b/gi,
    /\bbullshit\b/gi,
    /\bbung hole\b/gi,
    /\bbunghole\b/gi,
    /\bbusty\b/gi,
    /\bbutt\b/gi,
    /\bbuttcheeks\b/gi,
    /\bbutthole\b/gi,
    /\bcamel toe\b/gi,
    /\bcamgirl\b/gi,
    /\bcamslut\b/gi,
    /\bcamwhore\b/gi,
    /\bcarpet muncher\b/gi,
    /\bcarpetmuncher\b/gi,
    /\bchocolate rosebuds\b/gi,
    /\bcirclejerk\b/gi,
    /\bcleveland steamer\b/gi,
    /\bclit\b/gi,
    /\bclitoris\b/gi,
    /\bclover clamps\b/gi,
    /\bclusterfuck\b/gi,
    /\bcock\b/gi,
    /\bcocks\b/gi,
    /\bcoprolagnia\b/gi,
    /\bcoprophilia\b/gi,
    /\bcornhole\b/gi,
    /\bcoon\b/gi,
    /\bcoons\b/gi,
    /\bcreampie\b/gi,
    /\bcum\b/gi,
    /\bcumming\b/gi,
    /\bcunnilingus\b/gi,
    /\bcunt\b/gi,
    /\bdarkie\b/gi,
    /\bdate rape\b/gi,
    /\bdaterape\b/gi,
    /\bdeep throat\b/gi,
    /\bdeepthroat\b/gi,
    /\bdendrophilia\b/gi,
    /\bdick\b/gi,
    /\bdildo\b/gi,
    /\bdingleberry\b/gi,
    /\bdingleberries\b/gi,
    /\bdirty pillows\b/gi,
    /\bdirty sanchez\b/gi,
    /\bdoggie style\b/gi,
    /\bdoggiestyle\b/gi,
    /\bdoggy style\b/gi,
    /\bdoggystyle\b/gi,
    /\bdog style\b/gi,
    /\bdolcett\b/gi,
    /\bdomination\b/gi,
    /\bdominatrix\b/gi,
    /\bdommes\b/gi,
    /\bdonkey punch\b/gi,
    /\bdouble dong\b/gi,
    /\bdouble penetration\b/gi,
    /\bdp action\b/gi,
    /\bdry hump\b/gi,
    /\bdvda\b/gi,
    /\beat my ass\b/gi,
    /\becchi\b/gi,
    /\bejaculation\b/gi,
    /\berotic\b/gi,
    /\berotism\b/gi,
    /\bescort\b/gi,
    /\beunuch\b/gi,
    /\bfaggot\b/gi,
    /\bfecal\b/gi,
    /\bfelch\b/gi,
    /\bfellatio\b/gi,
    /\bfeltch\b/gi,
    /\bfemale squirting\b/gi,
    /\bfemdom\b/gi,
    /\bfigging\b/gi,
    /\bfingerbang\b/gi,
    /\bfingering\b/gi,
    /\bfisting\b/gi,
    /\bfoot fetish\b/gi,
    /\bfootjob\b/gi,
    /\bfrotting\b/gi,
    /\bfuck\b/gi,
    /\bfuck buttons\b/gi,
    /\bfuckin\b/gi,
    /\bfucking\b/gi,
    /\bfucktards\b/gi,
    /\bfudge packer\b/gi,
    /\bfudgepacker\b/gi,
    /\bfutanari\b/gi,
    /\bgang bang\b/gi,
    /\bgay sex\b/gi,
    /\bgenitals\b/gi,
    /\bgiant cock\b/gi,
    /\bgirl on\b/gi,
    /\bgirl on top\b/gi,
    /\bgirls gone wild\b/gi,
    /\bgoatcx\b/gi,
    /\bgoatse\b/gi,
    /\bgod damn\b/gi,
    /\bgokkun\b/gi,
    /\bgolden shower\b/gi,
    /\bgoodpoop\b/gi,
    /\bgoo girl\b/gi,
    /\bgoregasm\b/gi,
    /\bgrope\b/gi,
    /\bgroup sex\b/gi,
    /\bg-spot\b/gi,
    /\bguro\b/gi,
    /\bhand job\b/gi,
    /\bhandjob\b/gi,
    /\bhard core\b/gi,
    /\bhardcore\b/gi,
    /\bhentai\b/gi,
    /\bhomoerotic\b/gi,
    /\bhonkey\b/gi,
    /\bhooker\b/gi,
    /\bhot carl\b/gi,
    /\bhot chick\b/gi,
    /\bhow to kill\b/gi,
    /\bhow to murder\b/gi,
    /\bhuge fat\b/gi,
    /\bhumping\b/gi,
    /\bincest\b/gi,
    /\bintercourse\b/gi,
    /\bjack off\b/gi,
    /\bjail bait\b/gi,
    /\bjailbait\b/gi,
    /\bjelly donut\b/gi,
    /\bjerk off\b/gi,
    /\bjigaboo\b/gi,
    /\bjiggaboo\b/gi,
    /\bjiggerboo\b/gi,
    /\bjizz\b/gi,
    /\bjuggs\b/gi,
    /\bkike\b/gi,
    /\bkinbaku\b/gi,
    /\bkinkster\b/gi,
    /\bkinky\b/gi,
    /\bknobbing\b/gi,
    /\bleather restraint\b/gi,
    /\bleather straight jacket\b/gi,
    /\blemon party\b/gi,
    /\blolita\b/gi,
    /\blovemaking\b/gi,
    /\bmake me come\b/gi,
    /\bmale squirting\b/gi,
    /\bmasturbate\b/gi,
    /\bmenage a trois\b/gi,
    /\bmilf\b/gi,
    /\bmissionary position\b/gi,
    /\bmotherfucker\b/gi,
    /\bmound of venus\b/gi,
    /\bmr hands\b/gi,
    /\bmuff diver\b/gi,
    /\bmuffdiving\b/gi,
    /\bnambla\b/gi,
    /\bnawashi\b/gi,
    /\bnegro\b/gi,
    /\bneonazi\b/gi,
    /\bnigga\b/gi,
    /\bnigger\b/gi,
    /\bnig nog\b/gi,
    /\bnimphomania\b/gi,
    /\bnipple\b/gi,
    /\bnipples\b/gi,
    /\bnsfw images\b/gi,
    /\bnude\b/gi,
    /\bnudity\b/gi,
    /\bnympho\b/gi,
    /\bnymphomania\b/gi,
    /\boctopussy\b/gi,
    /\bomorashi\b/gi,
    /\bone cup two girls\b/gi,
    /\bone guy one jar\b/gi,
    /\borgasm\b/gi,
    /\borgy\b/gi,
    /\bpaedophile\b/gi,
    /\bpaki\b/gi,
    /\bpanties\b/gi,
    /\bpanty\b/gi,
    /\bpedobear\b/gi,
    /\bpedophile\b/gi,
    /\bpegging\b/gi,
    /\bpenis\b/gi,
    /\bphone sex\b/gi,
    /\bpiece of shit\b/gi,
    /\bpissing\b/gi,
    /\bpiss pig\b/gi,
    /\bpisspig\b/gi,
    /\bplayboy\b/gi,
    /\bpleasure chest\b/gi,
    /\bpole smoker\b/gi,
    /\bponyplay\b/gi,
    /\bpoof\b/gi,
    /\bpoon\b/gi,
    /\bpoontang\b/gi,
    /\bpunany\b/gi,
    /\bpoop chute\b/gi,
    /\bpoopchute\b/gi,
    /\bporn\b/gi,
    /\bporno\b/gi,
    /\bpornography\b/gi,
    /\bprince albert piercing\b/gi,
    /\bpthc\b/gi,
    /\bpubes\b/gi,
    /\bpussy\b/gi,
    /\bqueaf\b/gi,
    /\bqueef\b/gi,
    /\bquim\b/gi,
    /\braghead\b/gi,
    /\braging boner\b/gi,
    /\brape\b/gi,
    /\braping\b/gi,
    /\brapist\b/gi,
    /\brectum\b/gi,
    /\breverse cowgirl\b/gi,
    /\brimjob\b/gi,
    /\brimming\b/gi,
    /\brosy palm\b/gi,
    /\brosy palm and her 5 sisters\b/gi,
    /\brusty trombone\b/gi,
    /\bsadism\b/gi,
    /\bsantorum\b/gi,
    /\bscat\b/gi,
    /\bschlong\b/gi,
    /\bscissoring\b/gi,
    /\bsemen\b/gi,
    /\bsex\b/gi,
    /\bsexo\b/gi,
    /\bsexy\b/gi,
    /\bshaved beaver\b/gi,
    /\bshaved pussy\b/gi,
    /\bshemale\b/gi,
    /\bshibari\b/gi,
    /\bshit\b/gi,
    /\bshitblimp\b/gi,
    /\bshitty\b/gi,
    /\bshota\b/gi,
    /\bshrimping\b/gi,
    /\bskeet\b/gi,
    /\bslanteye\b/gi,
    /\bslut\b/gi,
    /\bs&m\b/gi,
    /\bsmut\b/gi,
    /\bsnatch\b/gi,
    /\bsnowballing\b/gi,
    /\bsodomize\b/gi,
    /\bsodomy\b/gi,
    /\bspic\b/gi,
    /\bsplooge\b/gi,
    /\bsplooge moose\b/gi,
    /\bspooge\b/gi,
    /\bspread legs\b/gi,
    /\bspunk\b/gi,
    /\bstrap on\b/gi,
    /\bstrapon\b/gi,
    /\bstrappado\b/gi,
    /\bstrip club\b/gi,
    /\bstyle doggy\b/gi,
    /\bsuck\b/gi,
    /\bsucks\b/gi,
    /\bsuicide girls\b/gi,
    /\bsultry women\b/gi,
    /\bswastika\b/gi,
    /\bswinger\b/gi,
    /\btainted love\b/gi,
    /\btaste my\b/gi,
    /\btea bagging\b/gi,
    /\bthreesome\b/gi,
    /\bthroating\b/gi,
    /\btied up\b/gi,
    /\btight white\b/gi,
    /\btit\b/gi,
    /\btits\b/gi,
    /\btitties\b/gi,
    /\btitty\b/gi,
    /\btongue in a\b/gi,
    /\btopless\b/gi,
    /\btosser\b/gi,
    /\btowelhead\b/gi,
    /\btranny\b/gi,
    /\btribadism\b/gi,
    /\btub girl\b/gi,
    /\btubgirl\b/gi,
    /\btushy\b/gi,
    /\btwat\b/gi,
    /\btwink\b/gi,
    /\btwinkie\b/gi,
    /\btwo girls one cup\b/gi,
    /\bundressing\b/gi,
    /\bupskirt\b/gi,
    /\burethra play\b/gi,
    /\burophilia\b/gi,
    /\bvagina\b/gi,
    /\bvenus mound\b/gi,
    /\bvibrator\b/gi,
    /\bviolet wand\b/gi,
    /\bvorarephilia\b/gi,
    /\bvoyeur\b/gi,
    /\bvulva\b/gi,
    /\bwank\b/gi,
    /\bwetback\b/gi,
    /\bwet dream\b/gi,
    /\bwhite power\b/gi,
    /\bwrapping men\b/gi,
    /\bwrinkled starfish\b/gi,
    /\bxx\b/gi,
    /\bxxx\b/gi,
    /\byaoi\b/gi,
    /\byellow showers\b/gi,
    /\byiffy\b/gi,
    /\bzoophilia\b/gi,
    /\b🖕\b/gi,
  ],
};

export default SpamWordsList;
