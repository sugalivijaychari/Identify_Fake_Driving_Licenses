# Installation Instructions:

To develop smart contracts the software needed are - Node.js and NPM, truffle, testrpc or ganache-cli, remix ide, and meta mask. 
Usage of other software and their installation part will be up to the date.

## 1. Install Node.js and NPM
    
        * Download the appropriate Node.js software through the link: https://nodejs.org/en/download/
        * For the detailed installation process, check https://nodesource.com/blog/installing-nodejs-tutorial-windows/
    
## 2. Install Testrpc or Ganache-cli

        * Before using truffle, we should install choco, git and visual studio code.
        * Install choco through https://chocolatey.org/
        * Now install git through the command 'choco install git –y'
        * Now install Visual Studio Code through command 'choco install VisualStudioCode -y'
        * Now if you aren't installed node, install node via 'npm install -g npm'
        * Now do 'npm install -g -production windows-build-tools'
        * Recently, testrpc is updated with ganache-cli. Install ganache-cli by the command 'npm install -g ganache-cli'. Learn more on Ganache-cli through https://github.com/trufflesuite/ganache-cli
        
## 3. Install Truffle

        * Install by using command 'npm install -g truffle'
        * Follow https://truffleframework.com/tutorials/ to know more on the truffle, testrpc, and ganache-cli.
        
## 4. Metamask

        * Go to https://metamask.io/
        * You will find to add meta mask extension to your browser.
        * Click add extension.
        * Now you will get a window in the taskbar of your browser. Select Ropsten Test Network and create a new account.
        * Now you get your wallet appeared.
        * Now click on Buy option to buy the test ether for free through https://faucet.metamask.io/
            * Now click on - Request 1 ether from the faucet
            * This will be enough to play with contracts in the test network
            * If you want to add more, you can add with the same process in future
        * Now in your wallet, you will have 1 ether.

## 5. Remix IDE

        * Open https://remix.ethereum.org
        * This is the online environment in which you will be working with smart contracts by using solidity language.
        * Write your code here.
        * After writing code, you should go to -> Settings -> Select New Compiler Version
            * Note1: Make sure that you select right compiler version where you used in your contract code.
            * For Example, If you have written your code with 
                * pragma solidity ^0.4.13;
                * You should select below compiler version
                * 0.4.13+commit.fb4cb1a
            * Note2: Make sure that you check out the optimization for not getting any errors in future.
        * Now write your smart contract with functionalities you need to keep to your new Token.
        * Now you deploy the smart contract using Metamask.
        * Test your transaction status in ropsten test network via https://ropsten.etherscan.io/tx/[transaction address]
        * If it's successful, then your new token is ready.
	
# Development & Testing Instructions:

	* Copy and Paste the smart contract in Remix IDE. The smart contract path is: https://github.com/sugalivijaychari/Identify_Fake_Driving_Licenses/blob/master/contracts/Miniproject.sol
	* Set the compiler version as solidity 0.4.24.
	* Connect with Metamask.
	* Choose environment in Remix as Injected Web3.
	* Go to RUN tab, and deploy the contract.
	* Make sure EVM is optimized and limited gas is provided.
	* Proper user interface is provided in the Remix IDE. Play with the smart contract using it.
	* Remix IDE is just for developer conveinieince.
	* Open Command Prompt and initiate local network using Truffle.
	* Truffle is used to test, deploy, migrate the contracts.
	* Follow below commands:
		* truffle develop
		* truffle init
		* truffle compile
		* truffle migrate
		* truffle test
	* We can also develop some test scripts to test the smart contract. This testing is called as Audit testing.
	* Our future work is to create a Dapp for this after testing the smart contract.
	* Upto, we compiled the smart contract, deployed it in Ethereum Blockchain.
	* Verified and Validated using Etherscan.io



***

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [ABSTRACT](#abstract)
- [1: INTRODUCTION](#1-introduction)
	- [1.1: About Blockchain Technology:-](#11-about-blockchain-technology-)
	- [1.2: How much relevant is Blockchain Technology to the practical field?](#12-how-much-relevant-is-blockchain-technology-to-the-practical-field)
	- [1.3: Importance of the proposed study:-](#13-importance-of-the-proposed-study-)
- [2: IDENTIFICATION OF PROBLEM](#2-identification-of-problem)
	- [2.1: Brief background of the problem:-](#21-brief-background-of-the-problem-)
	- [2.2: Studies on this type of problem:-](#22-studies-on-this-type-of-problem-)
	- [2.3: Lead points for taking the present work:-](#23-lead-points-for-taking-the-present-work-)
	- [2.4: Definition of the problem:-](#24-definition-of-the-problem-)
- [3: PRE-ANALYSIS, METHODS, AND TASKS USED TO SOLVE](#3-pre-analysis-methods-and-tasks-used-to-solve)
	- [3.1: Structure of the existing system:-](#31-structure-of-the-existing-system-)
	- [3.2: Sources of data storage used in the existing system:-](#32-sources-of-data-storage-used-in-the-existing-system-)
	- [3.3: Accessibility and permissions:-](#33-accessibility-and-permissions-)
	- [3.4: Loopholes in the above-discussed system:-](#34-loopholes-in-the-above-discussed-system-)
	- [3.5: Suitable solutions:-](#35-suitable-solutions-)
	- [3.6: Method to solve the problem statement:-](#36-method-to-solve-the-problem-statement-)
	- [3.7: Tasks to implement the above method:-](#37-tasks-to-implement-the-above-method-)
- [4: WORKING DESCRIPTION OF PROJECT](#4-working-description-of-project)
	- [4.1: Softwares, tools, and dependencies used:-](#41-softwares-tools-and-dependencies-used-)
	- [4.2: Technologies involved:-](#42-technologies-involved-)
	- [4.3 Smart contract details:-](#43-smart-contract-details-)
- [5: RESULT, INTERPRETATION OF RESULT & FUTURE WORK](#5-result-interpretation-of-result-future-work)
	- [5.1: Result:-](#51-result-)
	- [5.2: Interpretation of the result:-](#52-interpretation-of-the-result-)
	- [5.3: Future work:-](#53-future-work-)
- [REFERENCES](#references)

<!-- /TOC -->

# ABSTRACT

In the modern generation, storing and monitoring the data is a huge challenge. Every organization should take care of security issues to protect the data. Most of the organizations use centralized servers and databases to save, control, monitor the data of an organization. This practice is not standardized as some of the factors affect to steal the data in centralized databases. Those factors can be distinguished as internal and external factors.

With respect to internal factors, we should observe clearly about the present situation happening with the maintenance of centralized servers. The entities or users who have accessibility to control the data i.e., an admin, and other authorized bodies have access to control and maintain the data. Let us assume the organization which is maintaining this centralized server belongs to any of the governmental bodies and the admin or other authorized persons are the employees in such a governmental institute. There comes a situation where admins or authorized persons uses their power of accessibility for their own benefits to change the data or information in such centralized servers. In this situation, it is very hard to find the victims as we trusted to particular centralized persons to control over the whole organization.

With respect to external factors, hackers by using more computational power can change the data present in centralized servers for their own benefits. Therefore, centralized servers and centralized authorization is not a standardized practice.

Many of the organizations in our country are maintaining their data in centralized servers. Hence protecting such centralized servers cost more. So, for most of the governmental organizations which are having demand are chosen to secure more and for rest, they aren’t. For example, aadhar maintenance is more secured than election cards, bus and rail tickets, license cards and many more. However, aadhar maintenance also vulnerable based on the above factors we discussed. In such kind of situations, adopting standardized and secured practices of storing, controlling and maintaining the data is important.

In this project, we have chosen one of the governmental systems, identified the most occurring problems in it and solved by adopting decentralized way authorization techniques and by using decentralized databases. [Blockchain [1]](https://bitcoin.org/bitcoin.pdf) is the technology which is a decentralized database, distributed network, permanent recordable ledger, and two-way encrypted system. We used this blockchain protocol to solve the issues found in identified problems.

Another major problem is smuggling luxury vehicles to our country from other countries. It happens due to a lack of data maintenance and putting trust in the centralized governing body. We came up with a solution to maintain the data of vehicle manufacturers, imported dates, vehicle owners, country of origin, date of manufacture, data of selling and buying, etc., to track whether a particular vehicle is smuggled or not using trusted and decentralized authority system.


***


# 1: INTRODUCTION

## 1.1: About Blockchain Technology:-

Blockchain technology is introduced to the world by a white paper “Bitcoin, a peer-to-peer cash system” written by Satoshi Nakamoto [[1]](https://bitcoin.org/bitcoin.pdf), an anonymous person or group persons. Blockchain technology is cumulative of all other technologies such as decentralized servers, distributed networks, smart contracts, digital signatures, cryptography, hash tables and more. All these technologies are underpinned technologies used in Bitcoin white paper.

Decentralized servers are the databases which are not a single entity. Groups of databases which is located in different places are synchronized as a single database is referred to as “Decentralized servers”. This means the data present in a database is replicated to many. The advantage of this is tampering of data is highly impossible as to tamper the data, it must do to all the replicated databases. The data remain as identical and unique where redundancy is not possible.

![Variance in Networks](https://github.com/sugalivijaychari/Identify_Fake_Driving_Licenses/blob/master/images/1_1.png)

[Fig. 1.1: Variance in networks [2]](https://www.edureka.co/blockchain-training?gclid=EAIaIQobChMIupS5ztSN3wIVVg4rCh1UAgk8EAAYASAAEgJ18_D_BwE)

A distributed network is a network having nodes or databases connected directly with each other nodes or databases. It is used to perform tasks accurately, effectively and efficiently. The trust is distributed among a group of persons in a distributed system. The power of accessibility won’t be centralized.

The smart contract is a program which is used to design the purpose of the system and is deployed in Blockchain to perform the instructions appropriated to the organization. It works as a trustful asset to function in a decentralized network. Only authorized users can do operations in the decentralized database. This is taken care of by smart contracts. The popular language which is used to code smart contract in Ethereum Blockchain is Solidity Programming Language.

Cryptography, hash tables, and digital signatures are factors of securitization of the Blockchain network. Popular hashing algorithms used are RSA and SHA256. Two-way encryption using private and public keys make a distributed system more secure.

## 1.2: How much relevant is Blockchain Technology to the practical field?

As our project need to adopt a decentralized way of authorization and decentralized servers, Blockchain Technology is more relevant to study and implement. To practically implement this system, we used to deploy smart contracts in any of the Blockchains. So, we have chosen Ethereum Blockchain is the best among private Blockchains to implement as they provide a platform to build and deploy smart contracts which are written in Solidity programming language on top of their Blockchain. Whereas, private Blockchains cost more to the service they provide compared to Ethereum Blockchain because Ethereum Blockchains have Main and Test networks. Test networks provide free ethers in which every transaction is done in Blockchain worth none. Transaction means an event happen through smart contracts we create.

![Classification of Ethereum Networks](https://github.com/sugalivijaychari/Identify_Fake_Driving_Licenses/blob/master/images/1_2.png)

Fig. 1.2: Classification of Ethereum Networks

As there are more developers who build smart contracts on top of Ethereum Blockchain to present their work with Decentralized network, Blockchain Technology is relevant to study and to implement in the practical field.

## 1.3: Importance of the proposed study:-

All the issues we have mentioned earlier can only be solved by studying the Blockchain Technology to our proposed study.

![Potential applications of Blockchain Technology](https://github.com/sugalivijaychari/Identify_Fake_Driving_Licenses/blob/master/images/1_3.png)

[Fig. 1.3: Potential applications of Blockchain Technology [2]](https://www.edureka.co/blockchain-training?gclid=EAIaIQobChMIupS5ztSN3wIVVg4rCh1UAgk8EAAYASAAEgJ18_D_BwE)

The fourth quadrant of the above figure Fig. 1.3 is “Identity Management”. Identity management is useful to solve the problems like aadhar maintenance, election cards, bus and rail tickets, license cards and many more. We can easily detect frauds and run governmental organizations securely.


***


# 2: IDENTIFICATION OF PROBLEM

## 2.1: Brief background of the problem:-

As we mentioned earlier in the abstract, the governmental organizations which deal with the issuance of important documents such as driving licenses, PAN cards, and voter identity cards which are maintained through centralized servers had a flaw in their system. These are the organizations which are not maintained with high security with a high budget, unlike aadhar data storages. There are many situations and incidents that frauds had created fake driving licenses, PAN cards and voter cards to get passport and bank loans. The proof of showing those incidents happen are placed here.
Note: Click to figures placed here to get into the official site news.

![News on Times of India showing Gang arrested in making fake ID cards](https://github.com/sugalivijaychari/Identify_Fake_Driving_Licenses/blob/master/images/2_1.png)

[Fig. 2.1: News of Times of India showing Gang arrested in making fake ID Cards [3]](https://timesofindia.indiatimes.com/city/gurgaon/gang-making-fake-id-cards-busted-one-arrested/articleshow/65801892.cms)

***

![News on Times of India showing two members caught on making fake identity cards](https://github.com/sugalivijaychari/Identify_Fake_Driving_Licenses/blob/master/images/2_2.png)
Fig. 2.2: News on Times of India showing two members caught on making fake identity cards [4]

From the above proofs, we can come to a point that fake documents are creating illegally and using for making passports, getting loans, etc., This is a serious allegation on Indian government in which there is a need to take care of the issue. Because it leads to huge problems for the Indian government.

Another major problem is smuggling luxury vehicles to our country from other countries. This is a serious issue for the government and imports and exports department. As this affects the economy rate of our country. We need to provide a solution to this problem. The proof of showing that smuggling of luxury vehicles caught is placed here.
Note: Click the image to get into the official site news

![Image showing on smuggling vehicles](https://github.com/sugalivijaychari/Identify_Fake_Driving_Licenses/blob/master/images/2_3.png)

[Fig. 2.3: News showing that smuggling luxury vehicles become a trend now overwhelming gold [5]](https://www.business-standard.com/article/specials/luxury-car-smuggling-goes-into-overdrive-197111501025_1.html)

## 2.2: Studies on this type of problem:-

The problems that our country is facing due to the creation of such fake identity cards and smuggling vehicles are mentioned below:

* They are used as proofs to generate fake passports.
* They are used to get bank loans.
* Citizens having fake identities may not pay taxes.
* Good way to terrorists to stay in our country showing fake documents.
* The easiest way to criminals escapes from our country.
* Fake identities make them do illegal activities such as robberies, smuggling, etc.,
* The financial benefits get from citizens to the government of India on introducing such kind of identity documents are reduced.
* The income of government is reduced due to this fake identity documents.
* With respect to the smuggling of luxury vehicles, it also affects the economy rate of our country.
* Payable taxes aren’t collected when they smuggle vehicles.
* Smuggled vehicles can be used for illegal activities.

## 2.3: Lead points for taking the present work:-

To reduce the problems on creating fake identity cards and smuggling vehicles, as per our observation that maintaining the data in centralized databases, centralized way of authorization and the flaw in the existing system, below are some of the lead points we should take care to overcome the problems gathered. They are:

* The flaw in the presently existing system should be resolved and should propose a certain system.
* Even a proposed system should be in decentralized authorization i.e., power must not be in the hands of a single person or some group of persons to control the whole system.
* The external technical factors should be resolved i.e., we should provide high security effectively and efficiently.
* We should use decentralized databases to maintain the data of all identity documents of individual governmental bodies like election card, fake license cards, etc.,
* The data must be maintained with advanced encryption techniques.
* The details must be recorded permanently i.e., once details stored in databases, no one can tamper, remove or delete, edit or modify such details.
* The most adaptable system should be introduced to find fake issuance cards and smuggled vehicles.

## 2.4: Definition of the problem:-

From the above studies, we considered the problem of fake driving license cards and identification of smuggled vehicles. The flaws and vulnerable methods used to maintain the data which are there in the existing system are considered as a problem statement.


***


# 3: PRE-ANALYSIS, METHODS, AND TASKS USED TO SOLVE

## 3.1: Structure of the existing system:-

To study on flaws of the existing system, it is important to analyze the existing structure to identify the fake driving license cards and smuggled vehicles in our day-to-daily life.
Two types of methods to create fake license cards which we considered are:
* Doing forgery of signatures, a model of driving license card and printing independently including victim photograph with any of the random unique license number.
* The other method possible is giving bribes to an officer in the RTO office to accept the fake application with fake details. (Taken example as the fake applicant is in Andhra Pradesh State, India.)

We generally know the process of checking driving license cards in Andhra Pradesh state. The person who drives the vehicle should show their driving license cards to the traffic police or other related authorities. The traffic police or other authority checks the name and address of the person in license card or sometimes the authority checks their database whether these details are genuine or not. If they found that the driving license is fake, then appropriate action is to be taken on a particular person who holds a fake driving license card.

Now consider the two methods of creating fake license cards. When fake driving license cards are created through the first method - forgery method, the victim is taken into action with no effort. But when those fake driving license cards are created through the second-mentioned method - giving bribes to the officer to approve their fake ones, it is very hard to find the victims who created their fake license cards. So, the problem is in the system where officers take bribes, or they are influenced, or they are frightened by victims to create fake license cards. This is because of using centralized databases, non-immutability of recording events done by officers, the power is centralized and lack of providing security.

Out of these reasons the effective reason is non-immutability of recording events done by officers. This means in our system, somehow in some places, there is no procedure to record the activities done by officers. Even at some, if there is a system which records all activities done by officers. It is not securely maintained. Because the centralized database we use doesn’t provide immutability. Immutability here demonstrates as once the data stored in databases, they must not be changed, modified or deleted.

When we consider the smuggling of vehicles, if we have the trustful data of vehicles, we can easily find a vehicle is smuggled or not.

## 3.2: Sources of data storage used in the existing system:-

Up to now, the whole data of vehicles aren’t maintained by any organization from its manufacturing time to till date. Even if some have the data, it is not trusted. Hence, we need to create a trustful decentralized database to solve the problem of finding smuggles vehicles.

The sources of data storage of driving license details come from Meeseva - https://ap.meeseva.gov.in and RTO office portal - http://www.aptransport.org in which Meeseva is used apply for driving license online and RTO portal is used to have the data of all driving licenses.
These two portals are maintained in centralized servers. Those details are mentioned below:
* Meeseva portal is maintained in SQL server. [Click here](http://apps.nic.in/apps/government/mee-seva-rapid-roll-out) [6] to view details or explore apps.nic.in.
* RTO portal is maintained in application server TOMCAT. [Click here](http://apps.nic.in/apps/government/vahan) [7] to view details or explore apps.nic.in.

## 3.3: Accessibility and permissions:-

There is a need to know the accessibility limits for a particular authority who maintain those servers. Below are such details mentioned:
Meeseva portal authorization to control driving license data:

* Citizen submits an application to Meeseva operator.
* Road transport officer is the approval authority.
* If road transport officer approves, certification output is given by Meeseva operator.

![Data accessibility in Mee Seva](https://github.com/sugalivijaychari/Identify_Fake_Driving_Licenses/blob/master/images/3_1.png)

[Fig. 3.1: Data accessibility in Meeseva portal [8]](https://ap.meeseva.gov.in/DeptPortal/Downloads/Mee%20Seva%20Hand%20book%20Final.pdf)

RTO portal authorization to control driving license data [[9]](http://www.aptransport.org/html/pdf/citizen-charter-transport-2013.pdf):
* Road transport office receives the request from Meeseva operator.
* After checking original documents of the applicant, either regional transport officer, road transport authority or deputy transport commissioner approves/disapproves the application and enter the same status in the database.

## 3.4: Loopholes in the above-discussed system:-

Loopholes in the above discussed existing system in the process of generating driving licenses to the applicant are mentioned below:

* Meeseva operator can enter the fake details in support of the applicant.
* RTO or officers who approve the original documents of application can change in favor of the applicant in their respective databases.

## 3.5: Suitable solutions:-

Above mentioned two points can happen because of the reasons we mentioned earlier. If there is a permanent recordable ledger, those two points won’t come into the picture. While using a decentralized database and distributed network like Blockchain, there is immutability provided to the data. This means Blockchain contains permanent data storage. No one can tamper, or no one can delete it. Of course, whenever we have the architecture to edit some fields of the data, the updated data is linked to the previous data we have in Blockchain.

## 3.6: Method to solve the problem statement:-

* We have to create a decentralized eco-system which consists of all user data with aadhar details.
* Creation of decentralized authorization.
* We can achieve this by creating decentralized governing bodies.
* These governing bodies belong to different departments like RTO, Meeseva, Traffic management department, etc.,
* Each member or officer in these governing bodies are added or removed by the approval of remaining members of that governing body. This fulfills the need for decentralized power.
* Each governing body is added or removed by a head governing body.
* That means the governing bodies like RTO, Meeseva, Traffic management department are added in this decentralized eco-system by the head governing body.
* After the formation of governing bodies, users or citizens can enroll into this eco-system and can request for vehicle registration.
* Vehicle registration can be approved by a particular department say RTO.
* RTO takes input as citizen details and license details and checks whether the details are correct or not.
* In this eco-system every activity done by every officer is recorded permanently in the ledger.
* Hence, there is no chance of changing the data of applicant to create fake driving license details as everything is tracked.
* Hence, every citizen personal and vehicle details are stored in our eco-system.
* Now, traffic management department, one of the governing bodies in our eco-system can check for details of a citizen whether particular person details are correct with particular vehicle details.
* If details are found wrong, then appropriate action is to be taken on that person.
* Hence if the government adopts this decentralized eco-system, no fake driving license creation is possible.
* When comes to smuggled vehicles, while registering a vehicle in our eco-system, the whole history of that vehicle is recorded in Blockchain and is verified by particular governing body say Imports and Exports department, etc.,
* As the data we have been verified and trusted, any officer who is eligible to check for smuggled vehicles can take input as vehicle number and person aadhar number and say whether the vehicle smuggled or not.

![Formation of governing bodies](https://github.com/sugalivijaychari/Identify_Fake_Driving_Licenses/blob/master/images/3_2.png)

Fig. 3.2: Formation of decentralized governing bodies

## 3.7: Tasks to implement the above method:-

* Write a smart contract to achieve the above-mentioned method in the solidity programming language.
* Choose a Blockchain network to deploy the smart contract.
* Get a Metamask wallet to make use of chosen Blockchain network.
* Create sample accounts and request for ethers in Faucet if the network is test-network.
* Deploy the contract.
* Form governing bodies.
* Create users and enter sample vehicles data.
* Verify and validate smart contract in Etherscan.io.
* Connect Etherscan.io with Metamask and check for the execution of the smart contract.
* Test the smart contract using Truffle and Ganache-cli.
* Prepare a Decentralized application for user-friendly application if needed.


***


# 4: WORKING DESCRIPTION OF PROJECT

## 4.1: Softwares, tools, and dependencies used:-

* Node.js,
* Microsoft Visual Studio dependencies,
* Solidity Compiler,
* Visual Studio Code,
* Remix ide,
* Metamask chrome extension,
* Ganache-cli,
* Truffle.

## 4.2: Technologies involved:-

* Blockchain fundamentals,
* Solidity, contract-oriented programming language,
* Web3.js,
* JavaScript,
* Dapps, Decentralized applications.

## 4.3 Smart contract details:-

* Blockchain network: Ropsten test network,
* Contract hash: 0xf1fca2a9eb9202351d5aa8b5b7da12306ba6be2a,
* Etherscan verification address: [Click here [16]](https://etherscan.io/) to view or explore Etherscan.io.


***


# 5: RESULT, INTERPRETATION OF RESULT & FUTURE WORK

## 5.1: Result:-

Successfully smart contract is created, deployed and verified. The whole implementation is done to solve the identified problem statement. By this, we get the details of every citizen who owns vehicles along with their vehicles data.

## 5.2: Interpretation of the result:-

* The data we have is used to sell for governments or other authorized organizations.
* The tax payment is achieved accurately.
* No fraudulent activities are entertained with driving license cards.
* No smuggled vehicles are imported.
* The country economy rate increases slightly by adopting this system.

## 5.3: Future work:-

We can even create a better user-friendly application by creating Dapp. Unlike the benefits to government, private organizations can also make use of this Blockchain technology. The companies of Cab services like Uber, Ola, and other private taxi services can adopt this technology for its permanent ledger feature and it’s distributed nature. One of the applications is that live tracking the location of the vehicle with a perfect timestamp. Whenever accidents happen, a victim can easily escape by saying that he hadn’t gone to a particular place at that time. Even company owners have their location data independently, it is not trusted. Whenever their live location is pushed into the Blockchain, a victim can no longer escape from the case. This can be implemented by using IOT for locations and integrating IoT with Blockchain by pushing the data comes from IoT devices [[21]](https://www.postscapes.com/blockchains-and-the-internet-of-things/) [[22]](https://gideonvos.wordpress.com/2017/12/20/gps-iot-blockchain-integration-to-erp/).


***


# REFERENCES

1. Satoshi Nakamoto, Bitcoin: A peer-to-peer electronic cash system, a white paper in 2008.
2. Edureka, https://www.edureka.co/blockchain-training?gclid=EAIaIQobChMIupS5ztSN3wIVVg4rCh1UAgk8EAAYASAAEgJ18_D_BwE, online certification course taken in 2017.
3. Times of India, https://timesofindia.indiatimes.com/city/gurgaon/gang-making-fake-id-cards-busted-one-arrested/articleshow/65801892.cms, online news sited in 2018.
4. Times of India, https://timesofindia.indiatimes.com/city/chennai/Two-held-for-making-fake-identity-cards-licenses/articleshow/3152797.cms, online news sited in 2008.
5. Business standard, https://www.business-standard.com/article/specials/luxury-car-smuggling-goes-into-overdrive-197111501025_1.html, online news sited in 2013.
6. National Informatics Centre, Government of India, http://apps.nic.in/apps/government/mee-seva-rapid-roll-out.
7. National Informatics Centre, Government of India, http://apps.nic.in/apps/government/vahan.
8. Meeseva Handbook, Government of Andhra Pradesh, https://ap.meeseva.gov.in/DeptPortal/Downloads/Mee%20Seva%20Hand%20book%20Final.pdf.
9. Citizen Charter, Government of Andhra Pradesh, http://www.aptransport.org/html/pdf/citizen-charter-transport-2013.pdf.
10. Solidity Open Source, https://solidity.readthedocs.io/en/v0.4.25/.
11. Ethereum Community, https://readthedocs.org/projects/ethereum-homestead/.
12. Dapps, Ethereum community, http://ethdocs.org/en/latest/contracts-and-transactions/developer-tools.html.
13. Truffle framework, https://truffleframework.com/.
14. Gavin Wood, Ethereum yellow paper, https://ethereum.github.io/yellowpaper/paper.pdf sited in 2018.
15. Ethereum Community, Remix browser, https://remix.readthedocs.io/en/latest/.
16. Etherscan, https://etherscan.io/.
17. Metamask, https://metamask.io/.
18. Web3.js, Open docs, https://web3js.readthedocs.io/en/1.0/.
19. Coursera Buffalo University, Specialization on Blockchain, https://www.coursera.org/specializations/blockchain, taken in 2018.
20. New Zealand Transport Agency, https://vehicleinspection.nzta.govt.nz/virms/entry-certification/pre-reg-and-vin/vehicle-attributes/recording-vehicle-attributes, sited in 2013.
21. Post capes, https://www.postscapes.com/blockchains-and-the-internet-of-things/.
22. Xalentis, https://gideonvos.wordpress.com/2017/12/20/gps-iot-blockchain-integration-to-erp/


***
