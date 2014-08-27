'use strict';

angular.module('campaignTrackerApp')
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
    var organizerPeople = {
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
                          'Bill from Torquay', 'Glen Smith',
                          'Clara Davies', 'Judy Cameron', 'Gail Russell']

    };


    //TOCO: add district ppl
    var dataEntryPeople = {
      'Eastern Metropolitan':['DataEMPerson1', 'DataEMPerson2', 
                              'DataEMPerson3', 'DataEMPerson4'],

      'Eastern Victoria':['DataEVPerson1', 'DataEVPerson2', 
                          'DataEVPerson3','DataEVPerson4'],

      'Northern Metropolitan':['DataNMPerson1', 'DataNMPerson2', 
                               'DataNMPerson3', 'DataMNPerson4'],

      'Northern Victoria':['DataNVPerson1', 'DataNVPerson2', 
                           'DataNVPerson3', 'DataNVPerson4'],

      'South Eastern Metropolitan':['DataSEMPerson1', 'DataSEMPerson2', 
                                    'DataSEMPerson3', 'DataSEMPerson4'],

      'Southern Metropolitan':['DataSMPerson1', 'DataSMPerson2',
                               'DataSMPerson3', 'DataSMPerson4'],

      'Western Metropolitan':['DataWMPerson1', 'DataWMPerson2', 
                              'DataWMPerson3', 'DataWMPerson4'],

      'Western Victoria':['Data Lloyd Davies', 'Data Maxwell Smith', 
                          'DataAndre Trosky',
                          'Data Bill from Torquay', 'Data Glen Smith',
                          'Data Clara Davies', 'Data Judy Cameron']
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
                          'Werribee', 'Apollo Bay', 'Ballarat']
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
    fact.organizerPeople = function () {
        return organizerPeople;
    };
    fact.dataEntryPeople = function () {
        return dataEntryPeople;
    };
    fact.nTeams = function () {
        return nTeams;
    };
    fact.aTypes = function () {
        return aTypes;
    };
  

    return fact;
  });

