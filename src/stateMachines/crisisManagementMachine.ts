import { createMachine,interpret } from "xstate";
import {Fire_truck_in_crisis_Service} from '../services/Fire_truck_in_crisis_Service';
import { createConnection, getRepository } from 'typeorm';
import ormConfig from '../../ormconfig'; // Adjust the path if needed
import { getManager } from 'typeorm';


// export const funct = async () => {
//   const connection = await createDatabaseConnection();
//   const Fire_truck_in_crisis_Service1 = new Fire_truck_in_crisis_Service();
//   return Fire_truck_in_crisis_Service1;
// }

import { Fire_truck_in_crisis } from "../models/Fire_truck_in_crisis"
import { AppDataSource } from "../data-source"
import {Fire_truck} from "../models/Fire_truck"
import {Route} from "../models/Route"
import {Crisis} from "../models/Crisis"
 import {createDatabaseConnection} from '../database/createDatabaseConnection';

const func = async () => AppDataSource.initialize()
  .then(async () => {
   


    // const connection = await createDatabaseConnection();
    // const crisis = new Crisis();
    // crisis.crisis_id = 1; // Assuming you have a Crisis entity with an 'id' property
    // crisis.fire_truck_number = 1;
    // crisis.police_vehicle_number = 1;
    // crisis.isActive = true;
    // await AppDataSource.manager.save(crisis);

    //  const fireTruck = new Fire_truck();
    // fireTruck.fire_truck_name = 'Fire Truck 1';
    // await AppDataSource.manager.save(fireTruck);

    // const route = new Route();
    // route.route_name = 'Route 1';
    // await AppDataSource.manager.save(route);

    // const fire_truck_in_crisis1 = new Fire_truck_in_crisis();
    // fire_truck_in_crisis1.fire_truck_status = 'Active';

    // fire_truck_in_crisis1.crisis = crisis;
    // fire_truck_in_crisis1.fireTruck = fireTruck;
    // fire_truck_in_crisis1.route = route;

    // console.log('Before saving fire_truck_in_crisis1:', fire_truck_in_crisis1); // Add console.log statement

    // // Save the entity to the database
    // await AppDataSource.manager.save(fire_truck_in_crisis1);

    // console.log('fire_truck_in_crisis1 saved successfully'); // Add console.log statement

    // // Similarly, you can create and save another instance with different values
    // const fire_truck_in_crisis2 = new Fire_truck_in_crisis();
    // fire_truck_in_crisis2.crisis_id = 2; // Set the crisis_id to a valid value
    // fire_truck_in_crisis2.fire_truck_name = 'Fire Truck 2';
    // fire_truck_in_crisis2.route_name = 'Route 2';
    // fire_truck_in_crisis2.fire_truck_status = 'Inactive';




  


    // console.log("Post has been saved: ", fire_truck_in_crisis2)
  })
  .catch((error) => console.log("Error: ", error));

export const crisisManagementMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QCEDCBZAygOgPoEkA7ASwBcBiAMU1VwGMB7QwsO04p3AJzAEcBXOKQDaABgC6iUAAcGsMh0JSQAD0QBmAIyaALNgBMATgBshgByaLmgKz71OgDQgAnoiOjj2AOyizRzaLW6l5e+gC+YU5oWHhEZOQACjT0TCxsitx8grAiEsqy8uxMymoIWroGJuaW2rb2Tq4IRsbWBr7qtr5mhvpmEVEYONS0jMyspJCJyaNpRYSZAkJikkggBQrFq6Wmlt6Whl5mR5bqxg1uhh7evv6BwaH9INE4SSOp45PDKWPpnDyLOWW+TkGyUW0QOzMe26h2OZlO5yaJla+nanSOPT6kSeg2wqC4xHksFwEDApAAhsQADbEsAqOgAC3JhBg5By5ImuFkVOIdDAuAAbmAGbyqfzCPwALYAIzAXAA9M9sLAybgJTK5bgGAAzLkMHl8wXC0X8-78Yg8CAACiIExgXAAlEDVus5iVEABafTXU7GP36XqGQyaYwdREe6xQ6whaxBw5BmyGayPJX4wmEklkyk03B0xnM1nsznai380hcfh0ADWaqlsoVSpVpFrGq4Wt1JZ4uHLlZrZtL1ttYHtTryLpBbvBCGsQS82AOxi8Nl88c0iN0fu8OiDFiOoksWIGMVQDAYXAgxEIHMU2AAcnXNTq9Qb+UKRXR+GLMyWWBA2RTi1LbsK2rFt60VXEmzAx8OyAntQP7S0bUIO05VHFYZAnRR3QQLwdFaGxjFRHQA1OdRekRVFNGwbc42MGwLBIzQU1xE8zwvK85mwAAlBh+E5aQqWZTMhSpBhpElMAUPILg+OLM9n15V9jToMVYGdTDCmwqcdBIrcg1MHQ-CYwx1wCPRaPMdQtA8INk2xVNT3PS9ryYHi5P5QThNJUTxMk6SvnJKAeDgXByWlOTcE7MsQL7DyNLWLDNlAUpyj0ZpqisOpHBcRBQjnSNrLsJMZw6QwWOPJyONcwh3P4zyhPmHywDEiSpIoQLgrAULwsi7klKNd8v1k+qEtdbSUo0bR0qqXdajsHLGhCKF2nI9RRH3Mx6OMCqcDY5zOJvXj6q5RqRJavz2pkjyooU6LgN7dSx000EcN0708IMwwjP0EyzOsPQgx3Oxo1EfRrGYhzWKqlyuPvVt2yiuDYu-S9JiLTz9QGt8TWghtINVdV60R-rDRx1TTSyAdkNQx0xqSsFJtw-DsEI4jSNDCjcoQZd5yBkJtBqYwdF2vEYcOtzb2HBh2Bq8hCAYXBJTPU0brFbVcgwxKtOS1QpoqDK5psBbET8KN4XI4jdy8dRRf26q4el2WuOO+S21J5ShtC5rWv80g6rdxSyZUtTu0V2UuVkgpJhGwOPcGk0nq18bddKWpPB8LQdDByN40RUIPtorbhbMGcTDt8WarvJ3iCr13+W1BT4-J0OfculCA4bpuseDr3iRLFRPmSC9YCCkLiV6-ig893HY7AemdcZvWecIn1dBzsw8+5xdvV+ncvGMMG7HUcqocq9jYZvKWoBl2uXZuxv3Z7meKeJNu2o7+vbqfl8E9fpHB5-k6uPMKEUp7NxDqrUaSoFbNkvLgL+j8kZdnglWCe0hpCySFBAcQC9XpTk0CEUQNFjCbzMIEQh0YLD512BbS2thrBg10hXC+EtarX1vnXB+3df4t29mAXyH9-aIJ4djSB-diCAKoMkMe3UJ5gObBAr23B4pKngSIts91UHoMwQwbBuDnra3wUzNKlRTBG2yqbLwhhsCrX0AEb6EMjAsIOlXDhzsjrcM0cjR651fbtU7t-ZBMVfGkHDp5KOcgY5eOCQ9asSdgSLxwtoLwBFrBEXIRDVJhw1zcwCPYAwRdejWS2nYFxDsr41y4SdJBWjYpvwERdIRgTak+PiQAoetBZE9QUbE1BKjRqGJTkvVK00zGZXmvUbmPQbGFXIvubO8ItrlMvpLKp98al3TaWgvx7dhExLqb4genSSSEm6fIyKhyELxSGQzZJlDWbpN6BQ7J1Dpnwn0lZQ4qTfQrLYdXG+Hi3IaL6fU3ZzSQVXJ2ccoBMiuo9MudsgZExhAwJlrgdRMSlGJzChgrBkADHJzuQQ-K2BgiMPoqIDobN1xUuIdZaylglxUv0EuUWAARQk0gOSMkvFAcgULTmwG5aQRkkBUW4kFSPEVYqIC4DUsSUgTJ5hExgqC3sCxzSWnEBBGI0qeUMnVdWK0mByx8odAAbgAHpKiknxKAhqoVvy5Qa8Vtykk6VLlCbc1j-T2OzrkxowtqKnEuMfOwgRgwcpdaKkULJyDYopkKmVDJxVKkTV+fVsbIDyrgIq5VeMSbPz-sNKm2rdU4CzYyaeJawAmrNSyS1NrcR2v4A6mtfDnXCtdRAPBk4mY6FSZ4QwHQdB+vXoGxAAM9DaEuIQw+ARNDkWjd22NfLyCtvbRm72MbZUSpiNu5NPbcBdQ5JqJVwkFJZHJFSMOhanyHsQgSvtE1l6QmhAcI4u4ETcyXOoMlrLgjmCImOvCK6U3rs3Y67ZXaU1pslUiqtqa5WnomG2C98wr0CBvXe1VbYnyCqfTgl9qcITBihEuGEX6ThnG5hYYh0Ybal0jPhJdtsz44AAIJUlvdu2DPaBWId3ch-dOApXCZzQq7sBa8OI0I2WglFbsBIaNVWetBJG3WttQrNt0GUFgqQ26olHqmbwhDakqljFTChDMOuchc4gbmAPkfewotuO8eLZ2o92a-xQdU-xnzonsDidXbKk9PAz3oYLVh-gOGwn3tgvpjVRHCWJOMcvUxhsajGymY0A8nhgjbl0qQ0h3QdocewO5-z3nZUJs85AmrIn031eUYZuVUmMMJY7Q1lLSmVPbvU+arTLadNbpazitrJGRl5SMNgCw4N1BWYOFzPLJgKO0X3ALAGAM3M8eq21jdo3DV8ca-Bg942k1tfC2ASL0nL1tmvbe+LsmH0XdLQIAcqXxwmYyw48ZFiTbc2InOTQv0vWlyIvucIFXONcAJAKG9gmkugWlGJaskAlOo4YKBKFg3G1TZwu+yjn64Q-saL9Hw1wzaBFDKO+yR4uNw+IAjqk5A6AEiJBi4kysuwqiFDwAnU4if7FhN+2j5P0kOcjL0DJAMNoixh0zlndXeENax+jiAmO0c1gG6ajTUB0Jpf7W+8jH7Rc0covRb10vS6MtCOVhnlWlc3uwAkN7PVndUld+7ieSv12HvJErjHSpA-w8xqrr2eODfDZiH5k7ofmdGaN6+0oY76JzcuH4aywtwa2aB+SmiIYiKg98JoKNiv4cu7dxHnFCeWfe5r--OvkGjvdb7mFIPva0VKxVqduV8fCBytgRi+YVWnUd7D8R916XSizgKoO-JpPxduC0J4dorKiHHxsG5z3DexHt7r1Xn3E-mct-tcd4-dezs4AVj3rsV2B9yvgWPmDJ-9GC6ZsLqjS-1yXBRJZIqEiaxQ8HEGIWHSvL3SgV-Q-SA6Av3eNQVK-TXEPIPVTKPJtbTc-arJAj-ZeIyGwbwRiRlQIMdUyIHQIVoC2QMDcEiayHfCA7AKA5HHZGAxguA+HM-XTbAzvILW-HnfkK7cfZkIfdFZ-PbePTvL7F6Y3WfHQE+WxEdEwU4CNQdX-EwGiIGfCYWGnBXR3cA5nF3JgkJdpVgowuJFg+A-lPzIQng7vfgvvbAwfEfXAKrCQyfKQoxGQsjXYYnc3eEZfHmezPmfeQ+UiXQ0AvaBgSUQSMkDIJ8BgaUAAK3GET1gDZzEhVFwNKE3n-RLiMnIgPlOCXERCKjnHwiWXsWaFMAiGxAVlJHgFWGeGT1IwQAjGIUzj9D9W6GDACI9A3FsRCHolCBDEW2jFFgIBIFIGaOmyaAjWwBLlsD-0A10komDFyL3k3gPhSSTFFi+BmA+AgGmJwklz0DNmslECDFOFsFWNEDnFRD8EPkjQ6EXFFleG+FmEgCOKnBONZnBlRFjBHRaH0FWJaCp3IgcVY3Y0dzTE51JApGpFpHpGVRgC+NMzkJDVBz8FEDkPwi8EokYQY1RAFnMDBghz+RqlROXl0EWghH-QJLBlMBHRPguPJLhgfHw11ETU-AELAB-E+O+xn0QHek+UMmMnsTIPJ3BjJU+mLiMjLjGIq3tlWVqi-i8iakaX8RQkpLTh6DMjkPnEskWWGJ6FZKvnZLk0Q15LRkOIFK8IQDHWIX3DLl0jFLL3XAhg0J3BImFmCGCBAMclYTcXWVfWGRwiXBnSeWxI5nIjz0aB9QMAJJyJaEW16HpwiLFkDMdkBTvk8U2R-n3wmw1L2W1LyiIkeUhxIjsE5ljKnTMD0AsypTwiWXaFNLWWzOqTjmP3fj9haVEV7hxXiwjl0WjhtOkJT0QHo3LPZirJjMREXChAZXIhnF0kuNbPYWDOBSxS7KLIhS3Mb1DhhRLJ5kYRnXBidNzy3iWilM+kuPIUFi8DXIBU4Q2U7P3P4UER7JBXjzxT0X5LHJaP0BaE8EPkcVB0UPwnUBoRsQZX8CCA8AuMhmhMrizOfNzMDnH27PaiPKsDJUuEXFuMKJ3lNnULPKpV9GDG0GhyQszMqXbJfK7m8WYIaQ-ICUhVf0HIiXEiiVHM8PHIQFLmgrwp8EGKKOBPeRsToXsRtjBiTH9OhhorbNQs3LzP2x3M-IOVf0PNtL4t0GDDm1B22xEqIryUbMKR3B3GDQOEfPcRzOUvQtf0ws-g0qYtxV0WwSPMAsW1ZmznwqMrxJMvWjmyKk2MTFnXAwNT5SPJnFBPKO+jisGJrOZlyLLxkuxIhkCF2w8zfIC1lSPN0APgGKpRMFoOsnMF-wCDMsuPIiAPMEyv2wkx4tDIIW3GojHQCH9WPhPkSqJOIUc1uO3DKiXXoIMKpCPK0MoMz2Phz0jDs3sWwHpPwmzmCDAuGvr2rwLKb09zGvon-W6BuGzxIhmqBwDHNlKMKjwqhPTP0LWsv133Wv7M2o4JZDGrWPmIuOjAOtz0okHTnE6KIlMHWjsAfIrxGr3wetDlYNcNusnyPL9CuB8sYUUO+l0EolKvnBtwsB6E+lWsMPYJGrGoPjnByTkJsgBlMF-18GCNDBaHwjDQdyut3zMO0Tf1xpcub2eu0paMYQ6G8vaAuMBOuKBwYlsXhCMCMlIVIKooZoYKZrBUhr2xsJhs5pmL9GCFZmGLL3XiImsEojBnpU+nSSXQuMYgrmiLFDmERgSOSPSCFAaP-JmLrK0DJUxOInsGjDs3kNBx9X3EsCtlFgAFEnCnx2d0w7beKWjMtZpstLFuYioM40RtAOhwYFcIggA */
    context: {
      in_route_fsc: false,
      in_route_police: false,
      fire_trucks_fixed: false,
      fsc_route_approved: false,
      police_route_approved: false,
      police_vehicles_fixed: false,
      all_fire_trucks_arrived: false,
      all_fire_trucks_dispatched: false,
      all_police_vehicles_arrived: false,
      enough_fire_trucks_dispatched: false,
      all_police_vehicles_dispatched: false,
      enough_police_vehicles_dispatched: false,
    },
    id: "BCMS",
    initial: "_Init",
    states: {
      _Init: {
        on: {
          FSC_connection_request: {
            target: "FSC_connected",
            internal: false,
          },
          PSC_connection_request: {
            target: "PSC_connected",
            internal: false,
          },
        },
      },

      FSC_connected: {
        on: {
          PSC_connection_request: {
            target: "Crisis_details_exchange",
            internal: false,
          },
        },
      },

      PSC_connected: {
        on: {
          FSC_connection_request: {
            target: "Crisis_details_exchange",
            actions: "dispatch_fire_truck", 
            internal: false,
          },
        },
      },

      Crisis_details_exchange: {
        entry: [
          {
            type: "BCMS.to_be_killed",
          },
          {
            type: "BCMS.to_be_set(Long)",
          },
        ],
        on: {
          "state_police_vehicle_number/BCMS.set_number_of_police_vehicle_required(Integer)": {
            target: "#BCMS.Coordination.Number_of_police_vehicule_defined",
            actions : "set_number_of_police_vehicle_required",
            internal: false,
          },
          "state_fire_truck_number/BCMS.set_number_of_fire_truck_required(Integer)": {
            target: "#BCMS.Coordination.Number_of_fire_truck_defined",
            actions : 'set_number_of_fire_truck_required',
            internal: false,
          },
        },
      },

      Coordination: {
        initial: "Number_of_police_vehicule_defined",
        states: {
          Number_of_police_vehicule_defined: {
            on: {
              "state_fire_truck_number/BCMS.set_number_of_fire_truck_required(Integer)": {
                target: "Route_plan_development",
                actions : 'set_number_of_fire_truck_required',

                internal: false,
              },
            },
          },
          Route_plan_development: {
            on: {
              route_for_police_vehicles: {
                target:
                  "#BCMS.Coordination.Negotiation.Route_for_police_vehicles_development.Route_for_police_vehicles_fixed",
                internal: false,
              },
              FSC_agrees_about_fire_truck_route: {
                target: "#BCMS.Dispatching",
                internal: false,
              },
              FSC_agrees_about_police_vehicle_route: {
                target: "#BCMS.Dispatching",
                internal: false,
              },
              route_for_fire_trucks: {
                target:
                  "#BCMS.Coordination.Negotiation.Route_for_fire_trucks_development.Route_for_fire_trucks_fixed",
                internal: false,
              },
            },
          },
          Number_of_fire_truck_defined: {
            on: {
              "state_police_vehicle_number/BCMS.set_number_of_police_vehicle_required(Integer)": {
                target: "Route_plan_development",
                internal: false,
              },
            },
          },
          Negotiation: {
            states: {
              Route_for_police_vehicles_development: {
                initial: "Route_for_police_vehicles_to_be_proposed",
                states: {
                  Route_for_police_vehicles_to_be_proposed: {
                    on: {
                      route_for_police_vehicles: {
                        target: "Route_for_police_vehicles_fixed",
                        internal: false,
                      },
                    },
                  },
                  Route_for_police_vehicles_fixed: {
                    on: {
                      "FSC_disagrees_about_police_vehicle_route": {
                        target: "Route_for_police_vehicles_to_be_proposed",
                        internal: false,
                      },
                      "FSC_agrees_about_police_vehicle_route[BCMS.not_in_Route_for_fire_trucks_approved]":
                        {
                          target: "Route_for_police_vehicles_approved",
                          cond: "not_in_Route_for_fire_trucks_approved",
                          internal: false,
                        },
                      "FSC_agrees_about_police_vehicle_route[BCMS.in_Route_for_fire_trucks_approved]":
                        {
                          target: "#BCMS.Dispatching",
                          cond:'in_Route_for_fire_trucks_approved',
                          internal: false,
                        },
                    },
                  },
                  Route_for_police_vehicles_approved: {},
                },
              },
              Route_for_fire_trucks_development: {
                initial: "Route_for_fire_trucks_to_be_proposed",
                states: {
                  Route_for_fire_trucks_to_be_proposed: {
                    on: {
                      route_for_fire_trucks: {
                        target: "Route_for_fire_trucks_fixed",
                        internal: false,
                      },
                    },
                  },
                  Route_for_fire_trucks_fixed: {
                    on: {
                      "FSC_agrees_about_fire_truck_route": {
                        target: "#BCMS.Dispatching",
                        cond: 'in_Route_for_police_vehicles_approved',
                        internal: false,
                      },
                      "FSC_disagrees_about_fire_truck_route": {
                        target: "Route_for_fire_trucks_to_be_proposed",
                        internal: false,
                      },
                      "FSC_agrees_about_fire_truck_route[BCMS.not_in_Route_for_police_vehicles_approved]":
                        {
                          target: "Route_for_fire_trucks_approved",
                          cond: 'not_in_Route_for_police_vehicles_approved', 
                          internal: false,
                        },
                    },
                  },
                  Route_for_fire_trucks_approved: {},
                },
              },
            },
            on: {
              no_more_route_left: {
                target: "#BCMS.Dispatching",
                internal: false,
              },
            },
            type: "parallel",
          },
        },
      },

      Dispatching: {
        on: {
          "fire_truck_dispatched[BCMS.fire_truck_dispatched_less_than_number_of_fire_truck_required]/BCMS.dispatch_fire_truck(String);^BCMS.enough_fire_trucks_dispatched":
            {
              target: "Dispatching",
              actions: "dispatch_fire_truck",
              cond: 'fire_truck_dispatched_less_than_number_of_fire_truck_required',
              internal: false,
            },
          "police_vehicle_dispatched[BCMS.police_vehicle_dispatched_less_than_number_of_police_vehicle_required]/BCMS.dispatch_police_vehicle(String);^BCMS.enough_police_vehicles_dispatched":
            {
              target: "Dispatching",
              actions: "dispatch_police_vehicle",
              cond: 'police_vehicle_dispatched_less_than_number_of_police_vehicle_required',
              internal: true,
            },
          "enough_police_vehicles_dispatched[BCMS.police_vehicle_dispatched_greater_than_or_equal_to_number_of_police_vehicle_required]":
            {
              target: "All_police_vehicles_dispatched",
              actions: "enough_police_vehicles_dispatched",
              cond: 'police_vehicle_dispatched_greater_than_or_equal_to_number_of_police_vehicle_required',
              internal: false,
            },
          "enough_fire_trucks_dispatched[BCMS.fire_truck_dispatched_greater_than_or_equal_to_number_of_fire_truck_required]":
            {
              target: "All_fire_trucks_dispatched",
              actions: "enough_fire_trucks_dispatched",
              cond: 'fire_truck_dispatched_greater_than_or_equal_to_number_of_fire_truck_required',
              internal: false,
            },
        },
      },

      All_police_vehicles_dispatched: {
        on: {
          "fire_truck_dispatched[BCMS.fire_truck_dispatched_less_than_number_of_fire_truck_required]/BCMS.dispatch_fire_truck(String);^BCMS.enough_fire_trucks_dispatched":
            {
              target: "All_police_vehicles_dispatched",
              actions: "dispatch_fire_truck",
              cond:"fire_truck_dispatched_less_than_number_of_fire_truck_required",
              internal: true,
            },
          "enough_fire_trucks_dispatched[BCMS.fire_truck_dispatched_greater_than_or_equal_to_number_of_fire_truck_required]":
            {
              target: "Arrival",
              actions: "enough_police_vehicles_dispatched",
              cond: 'fire_truck_dispatched_greater_than_or_equal_to_number_of_fire_truck_required',
              internal: false,
            },
        },
      },

      All_fire_trucks_dispatched: {
        on: {
          "police_vehicle_dispatched[BCMS.police_vehicle_dispatched_less_than_number_of_police_vehicle_required]/BCMS.dispatch_police_vehicle(String);^BCMS.enough_police_vehicles_dispatched":
            {
              target: "All_fire_trucks_dispatched",
              actions: "dispatch_police_vehicle",
              cond:"police_vehicle_dispatched_less_than_number_of_police_vehicle_required",
              internal: true,
            },
          "enough_police_vehicles_dispatched[BCMS.police_vehicle_dispatched_greater_than_or_equal_to_number_of_police_vehicle_required]":
            {
              target: "Arrival",
              actions: "enough_police_vehicles_dispatched",
              cond: 'police_vehicle_dispatched_greater_than_or_equal_to_number_of_police_vehicle_required',
              internal: false,
            },
        },
      },

      Arrival: {
        states: {
          Police_vehicles_arrival: {
            initial: "Police_vehicles_arriving",
            states: {
              Police_vehicles_arriving: {
                on: {
                  "police_vehicle_arrived/BCMS.arrive_police_vehicle(String);^BCMS.enough_police_vehicles_arrived":
                    {
                      target: "Police_vehicles_arriving",
                      actions:"arrive_police_vehicle",
                      internal: true,
                    },
                  "enough_police_vehicles_arrived[BCMS.no_more_dispatched_police_vehicles_and_not_in_All_fire_trucks_arrived]":
                    {
                      target: "All_police_vehicles_arrived",
                      actions:"enough_police_vehicles_arrived",
                      cond :'no_more_dispatched_police_vehicles_and_not_in_All_fire_trucks_arrived',
                      internal: false,
                    },
                  "enough_police_vehicles_arrived[BCMS.no_more_dispatched_police_vehicles_and_in_All_fire_trucks_arrived]":
                    {
                      target: "#BCMS.Completion_of_objectives",
                      actions:"enough_police_vehicles_arrived",
                      cond: 'no_more_dispatched_police_vehicles_and_in_All_fire_trucks_arrived',
                      internal: false,
                    },
                },
              },
              All_police_vehicles_arrived: {},
            },
          },
          Fire_trucks_arrival: {
            initial: "Fire_trucks_arriving",
            states: {
              Fire_trucks_arriving: {
                on: {
                  "fire_truck_arrived/BCMS.arrive_fire_truck(String);^BCMS.enough_fire_trucks_arrived":
                    {
                      target: "Fire_trucks_arriving",
                      actions: "arrive_fire_truck",
                      internal: true,
                    },
                  "enough_fire_trucks_arrived[BCMS.no_more_dispatched_fire_trucks_and_not_in_All_police_vehicles_arrived]":
                    {
                      target: "All_fire_trucks_arrived",
                      actions: "enough_fire_trucks_arrived",
                      cond: 'no_more_dispatched_fire_trucks_and_not_in_All_police_vehicles_arrived',
                      internal: false,
                    },
                  "enough_fire_trucks_arrived[BCMS.no_more_dispatched_fire_trucks_and_in_All_police_vehicles_arrived]":
                    {
                      target: "#BCMS.Completion_of_objectives",
                      actions: "enough_fire_trucks_arrived",
                      cond:'no_more_dispatched_fire_trucks_and_in_All_police_vehicles_arrived',
                      internal: false,
                    },
                },
              },
              All_fire_trucks_arrived: {},
            },
          },
        },
        on: {
          "fire_truck_blocked/BCMS.block_fire_truck(String)": {
            target: "Crisis_details_exchange",
            actions:"block_fire_truck",
            internal: false,
          },

          "crisis_is_more_severe": {
            target: "Crisis_details_exchange",
            internal: false,
          },

          "police_vehicle_blocked/BCMS.block_police_vehicle(String)": {
            target: "Crisis_details_exchange",
            actions:"block_police_vehicle",
            internal: false,
          }
        },
        type: "parallel",
      },

      Completion_of_objectives: {
        on: {
          close: {
            target: "End_of_crisis",
            internal: false,
          },
        },
      },

      End_of_crisis: {
        type: "final",
      }
    },
    schema: {
      events: {} as
        | { type: "" }
        | { type: "close" }
        | { type: "no_more_route_left" }
        | { type: "crisis_is_more_severe" }
        | { type: "route_for_fire_trucks" }
        | { type: "FSC_connection_request" }
        | { type: "PSC_connection_request" }
        | { type: "route_for_police_vehicles" }
        | { type: "FSC_agrees_about_fire_truck_route" }
        | { type: "FSC_disagrees_about_fire_truck_route" }
        | { type: "FSC_agrees_about_police_vehicle_route" }
        | { type: "FSC_disagrees_about_police_vehicle_route" }
        | { type: "fire_truck_blocked/BCMS.block_fire_truck(String)" }
        | { type: "police_vehicle_blocked/BCMS.block_police_vehicle(String)" }
        | { type: "state_fire_truck_number/BCMS.set_number_of_fire_truck_required(Integer)" }
        | { type: "FSC_agrees_about_police_vehicle_route[BCMS.in_Route_for_fire_trucks_approved]" }
        | {
            type: "state_police_vehicle_number/BCMS.set_number_of_police_vehicle_required(Integer)";
          }
        | {
            type: "FSC_agrees_about_fire_truck_route[BCMS.not_in_Route_for_police_vehicles_approved]";
          }
        | {
            type: "FSC_agrees_about_police_vehicle_route[BCMS.not_in_Route_for_fire_trucks_approved]";
          }
        | {
            type: "fire_truck_arrived/BCMS.arrive_fire_truck(String);^BCMS.enough_fire_trucks_arrived";
          }
        | {
            type: "police_vehicle_arrived/BCMS.arrive_police_vehicle(String);^BCMS.enough_police_vehicles_arrived";
          }
        | {
            type: "enough_fire_trucks_arrived[BCMS.no_more_dispatched_fire_trucks_and_in_All_police_vehicles_arrived]";
          }
        | {
            type: "enough_fire_trucks_arrived[BCMS.no_more_dispatched_fire_trucks_and_not_in_All_police_vehicles_arrived]";
          }
        | {
            type: "enough_police_vehicles_arrived[BCMS.no_more_dispatched_police_vehicles_and_in_All_fire_trucks_arrived]";
          }
        | {
            type: "enough_police_vehicles_arrived[BCMS.no_more_dispatched_police_vehicles_and_not_in_All_fire_trucks_arrived]";
          }
        | {
            type: "enough_fire_trucks_dispatched[BCMS.fire_truck_dispatched_greater_than_or_equal_to_number_of_fire_truck_required]";
          }
        | {
            type: "enough_police_vehicles_dispatched[BCMS.police_vehicle_dispatched_greater_than_or_equal_to_number_of_police_vehicle_required]";
          }
        | {
            type: "fire_truck_dispatched[BCMS.fire_truck_dispatched_less_than_number_of_fire_truck_required]/BCMS.dispatch_fire_truck(String);^BCMS.enough_fire_trucks_dispatched";
          }
        | {
            type: "police_vehicle_dispatched[BCMS.police_vehicle_dispatched_less_than_number_of_police_vehicle_required]/BCMS.dispatch_police_vehicle(String);^BCMS.enough_police_vehicles_dispatched";
          },
      context: {} as {
        in_route_fsc: boolean;
        in_route_police: boolean;
        fire_trucks_fixed: boolean;
        fsc_route_approved: boolean;
        police_route_approved: boolean;
        police_vehicles_fixed: boolean;
        all_fire_trucks_arrived: boolean;
        all_fire_trucks_dispatched: boolean;
        all_police_vehicles_arrived: boolean;
        enough_fire_trucks_dispatched: boolean;
        all_police_vehicles_dispatched: boolean;
        enough_police_vehicles_dispatched: boolean;
      },
    },
    predictableActionArguments: true,
    preserveActionOrder: true,
  },
  {
    actions: {
      "BCMS.to_be_killed": (context, event) => {},
      "BCMS.to_be_set(Long)": (context, event) => {},
      "dispatch_fire_truck": async (context, event) => {
        console.log("Hi i'm here");
        func();
      },
      
      "dispatch_police_vehicle" : (context,event) => {
        console.log("INSERT INTO Police_vehicle_in_crisis VALUES") 
      },
      "set_number_of_fire_truck_required" : (context,event) => {
        console.log("UPDATE Crisis SET fire_truck_number ");
      },
      "set_number_of_police_vehicle_required" : (context,event) => {
        console.log("UPDATE Crisis SET police_vehicle_number =  ");
      },
      
      "enough_police_vehicles_dispatched" : (context,event) => {
        console.log("_BCMS_state_machine.run_to_completion(_Enough_police_vehicles_dispatched, com.pauware.pauware_engine.Core.AbstractStateMachine.Compute_invariants);")
      },
      "enough_fire_trucks_dispatched" : (context,event) => {
        console.log("BCMS_state_machine.run_to_completion(_Enough_fire_trucks_dispatched, com.pauware.pauware_engine.Core.AbstractStateMachine.Compute_invariants)")
      },
      "arrive_fire_truck" : (context,event) => {
        console.log("UPDATE Fire_truck_in_crisis SET fire_truck_status");
      },
      "enough_fire_trucks_arrived" : (context,event) => {   
        console.log("_BCMS_state_machine.run_to_completion(_Enough_fire_trucks_arrived, com.pauware.pauware_engine.Core.AbstractStateMachine.Compute_invariants);")
      },
      "arrive_police_vehicle" : (context,event) => {
        console.log("UPDATE Police_vehicle_in_crisis SET police_vehicle_status");
      },
      "enough_police_vehicles_arrived" : (context,event) => {
        console.log("_BCMS_state_machine.run_to_completion(_Enough_police_vehicles_arrived, com.pauware.pauware_engine.Core.AbstractStateMachine.Compute_invariants);")
      },
      "block_fire_truck" : (context,event) => {
        console.log("UPDATE Fire_truck_in_crisis SET fire_truck_status =");
      },
      "block_police_vehicle" : (context,event) => {
        console.log("UPDATE Police_vehicle_in_crisis SET police_vehicle_status =");
      }
      
    },
    services: {},
    guards: {
      in_Route_for_police_vehicles_approved: (context,event , {state}) => {
        return state.matches('_Route_for_police_vehicles_approved');
      },
      not_in_Route_for_police_vehicles_approved: (context, event , {state}) => {
        return !state.matches('_Route_for_police_vehicles_approved');
      },
      in_Route_for_fire_trucks_approved: (context, event , {state}) => {
        return state.matches('_Route_for_fire_trucks_approved');
      },
      not_in_Route_for_fire_trucks_approved: (context, event , {state}) => {
        return !state.matches('_Route_for_fire_trucks_approved');
      },
      fire_truck_dispatched_less_than_number_of_fire_truck_required: (context, event) => {
        return false;
      },
      police_vehicle_dispatched_less_than_number_of_police_vehicle_required: (context, event) => {
        return false;
      },
      police_vehicle_dispatched_greater_than_or_equal_to_number_of_police_vehicle_required: (context, event) => {
        return false;
      },
      fire_truck_dispatched_greater_than_or_equal_to_number_of_fire_truck_required: (context, event) => {
        return false;
      },
      no_more_dispatched_police_vehicles_and_not_in_All_fire_trucks_arrived: (context, event) => {
        return false;
      },
      no_more_dispatched_police_vehicles_and_in_All_fire_trucks_arrived: (context, event) => {
        return false;
      },
      no_more_dispatched_fire_trucks_and_not_in_All_police_vehicles_arrived: (context, event) => {
        return false;
      },
      no_more_dispatched_fire_trucks_and_in_All_police_vehicles_arrived: (context, event) => {
        return false;
      }

    },
    delays: {},
  },
);

// Create a service for the crisisManagementMachine
const service = interpret(crisisManagementMachine).onTransition((state) => {
  console.log(state.value);
});

// Start the service
service.start();
// Send events to the crisisManagementMachine
service.send('PSC_connection_request');
service.send('FSC_connection_request'); 

// service.send('state_fire_truck_number/BCMS.set_number_of_fire_truck_required(Integer)');
// service.send('state_police_vehicle_number/BCMS.set_number_of_police_vehicle_required(Integer)');
// service.send('FSC_disagrees_about_fire_truck_route'); 
// service.send('route_for_fire_trucks'); 
// service.send('FSC_agrees_about_fire_truck_route[BCMS.not_in_Route_for_police_vehicles_approved]'); 
// service.send('FSC_agrees_about_fire_truck_route'); 
// service.send('fire_truck_dispatched[BCMS.fire_truck_dispatched_less_than_number_of_fire_truck_required]/BCMS.dispatch_fire_truck(String);^BCMS.enough_fire_trucks_dispatched');

// service.send('enough_police_vehicles_dispatched[BCMS.police_vehicle_dispatched_greater_than_or_equal_to_number_of_police_vehicle_required]'); 
// service.send('enough_fire_trucks_dispatched[BCMS.fire_truck_dispatched_greater_than_or_equal_to_number_of_fire_truck_required]'); 
// service.send('crisis_is_more_severe'); 
// service.send('enough_police_vehicles_arrived[BCMS.no_more_dispatched_police_vehicles_and_in_All_fire_trucks_arrived]'); 

