'use strict';

angular.module('campaignTrackerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('form', {
        url: '/form',
        templateUrl: 'app/form/form.html',
        controller: 'FormCtrl'
      });
  })

  .factory('populateForm', function () {
    var fact = {};
    var uHouseRegions = [
      'Eastern Metropolitan', 
      'Eastern Victoria',
      'Northern Metropolitan', 
      'Northern Victoria',
      'South Eastern Metropolitan', 
      'Southern Metropolitan',
      'Western Metropolitan', 
      'Western Victoria'];

    var lHouseDistricts = {
      "Eastern Metropolitan" : [
        "Bayswater",
        "Box Hill",
        "Bulleen",
        "Croydon",
        "Eltham",
        "Ferntree Gully",
        "Forest Hill",
        "Ivanhoe",
        "Mount Waverley",
        "Ringwood",
        "Warrandyte"
      ],
      "Eastern Victoria" : [
        "Bass",
        "Evelyn",
        "Gembrook",
        "Gippsland East",
        "Gippsland South",
        "Hastings",
        "Monbulk",
        "Mornington",
        "Morwell",
        "Narracan",
        "Nepean"
      ],
      "Northern Metropolitan" : [
        "Broadmeadows",
        "Brunswick",
        "Bundoora",
        "Melbourne",
        "Mill Park",
        "Northcote",
        "Pascoe Vale",
        "Preston",
        "Richmond",
        "Thomastown",
        "Yuroke"
      ],
      "Northern Victoria" : [
        "Benambra",
        "Bendigo East",
        "Bendigo West",
        "Eildon",
        "Euroa",
        "Macedon",
        "Mildura",
        "Murray Plains",
        "Ovens Valley",
        "Shepparton",
        "Yan Yean"
      ],
      "South Eastern Metropolitan" : [
        "Carrum",
        "Clarinda",
        "Cranbourne",
        "Dandenong",
        "Frankston",
        "Keysborough",
        "Mordialloc",
        "Mulgrave",
        "Narre Warren North",
        "Narre Warren South",
        "Rowville"
      ],
      "Southern Metropolitan" : [
        "Albert Park",
        "Bentleigh",
        "Brighton",
        "Burwood",
        "Caulfield",
        "Hawthorn",
        "Kew",
        "Malvern",
        "Oakleigh",
        "Prahran",
        "Sandringham"
      ],
      "Western Metropolitan" : [
        "Altona",
        "Essendon",
        "Footscray",
        "Kororoit",
        "Niddrie",
        "St Albans",
        "Sunbury",
        "Sydenham",
        "Tarneit",
        "Werribee",
        "Williamstown"
      ],
      "Western Victoria" : [
        "Bellarine",
        "Buninyong",
        "Geelong",
        "Lara",
        "Lowan",
        "Melton",
        "Polwarth",
        "Ripon",
        "South Barwon",
        "South-West Coast",
        "Wendoree"
      ]
    };

    //TOCO: add district ppl
    var people = {
      'Eastern Metropolitan':['EMPerson1', 'EMPerson2', 
                              'EMPerson3', 'EMPerson4'],

      'Eastern Victoria':['EVPerson1', 'EVPerson2', 
                          'EVPerson3','EVPerson4'],

      'Northern Metropolitan':['NMPerson1', 'NMPerson2', 
                               'NMPerson3', 'MNPerson4'],

      'Northern Victoria':['NVPerson1', 'NVPerson2', 
                           'NVPerson3', 'NVPerson4'],

      'South Eastern Metropolitan':['SEMPerson1', 'SEMPerson2', 
                                    'SEMPerson3', 'SEMPerson4'],

      'Southern Metropolitan':['SMPerson1', 'SMPerson2',
                               'SMPerson3', 'SMPerson4'],

      'Western Metropolitan':['WMPerson1', 'WMPerson2', 
                              'WMPerson3', 'WMPerson4'],

      'Western Victoria':['Lloyd Davies', 'Maxwell Smith', 
                          'Laura Robertson', 'Andre Trosky',
                          'Bill from Torquay', 'Glenn',
                          'Clara Davies', 'Judy Cameron']

    };



    var nTeams = {
      'Eastern Metropolitan':['EMTeam1', 'EMTeam2', 
                              'EMTeam3', 'EMTeam4'],

      'Eastern Victoria':['EVTeam1', 'EVTeam2', 
                          'EVTeam3','EVTeam4'],

      'Northern Metropolitan':['NMTeam1', 'NMTeam2', 
                               'NMTeam3', 'MNTeam4'],

      'Northern Victoria':['NVTeam1', 'NVTeam2', 
                           'NVTeam3', 'NVTeam4'],

      'South Eastern Metropolitan':['SEMTeam1', 'SEMTeam2', 
                                    'SEMTeam3', 'SEMTeam4'],

      'Southern Metropolitan':['SMTeam1', 'SMTeam2',
                               'SMTeam3', 'SMTeam4'],

      'Western Metropolitan':['WMTeam1', 'WMTeam2', 
                              'WMTeam3', 'WMTeam4'],

      'Western Victoria':['Ocean Grove', 'Torquay', 
                          'Geelong', 'Lara',
                          'Werribee', 'Apollo Bay']
    };

    var aTypes = [
      'Door Knocking', 
      'Phone Banking', 
      'Volunteer Recruitment Phone Calling',
      'One On One',
      'Neighbourhood Team Meeting',
      'Volunteer House Gathering',
      'Stall',
      'Voter House Meeting',
      'Training Session'
    ]; 


    fact.regions = function () {
        return uHouseRegions;
    };
    fact.districts = function () {
        return lHouseDistricts;
    };
    fact.people = function () {
        return people;
    };
    fact.nTeams = function () {
        return nTeams;
    };
    fact.aTypes = function () {
        return aTypes;
    };
  

    return fact;
  });

