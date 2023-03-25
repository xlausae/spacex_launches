interface Launch {
  flight_number: number;
  mission_name: string;
  mission_id: any[];
  upcoming: boolean;
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: number;
  rocket: Rocket;
  ships: any[];
  telemetry: Telemetry;
  launch_site: Launchsite;
  launch_success: boolean;
  launch_failure_details: Launchfailuredetails;
  links: Links;
  details: string;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  timeline: Timeline;
}

interface Timeline {
  webcast_liftoff: number;
}

interface Links {
  mission_patch: string;
  mission_patch_small: string;
  reddit_campaign?: any;
  reddit_launch?: any;
  reddit_recovery?: any;
  reddit_media?: any;
  presskit?: any;
  article_link: string;
  wikipedia: string;
  video_link: string;
  youtube_id: string;
  flickr_images: any[];
}

interface Launchfailuredetails {
  time: number;
  altitude?: any;
  reason: string;
}

interface Launchsite {
  site_id: string;
  site_name: string;
  site_name_long: string;
}

interface Telemetry {
  flight_club?: any;
}

interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  first_stage: Firststage;
  second_stage: Secondstage;
  fairings: Fairings;
}

interface Fairings {
  reused: boolean;
  recovery_attempt: boolean;
  recovered: boolean;
  ship?: any;
}

interface Secondstage {
  block: number;
  payloads: Payload[];
}

interface Payload {
  payload_id: string;
  norad_id: any[];
  reused: boolean;
  customers: string[];
  nationality: string;
  manufacturer: string;
  payload_type: string;
  payload_mass_kg: number;
  payload_mass_lbs: number;
  orbit: string;
  orbit_params: Orbitparams;
}

interface Orbitparams {
  reference_system: string;
  regime: string;
  longitude?: any;
  semi_major_axis_km?: any;
  eccentricity?: any;
  periapsis_km: number;
  apoapsis_km: number;
  inclination_deg: number;
  period_min?: any;
  lifespan_years?: any;
  epoch?: any;
  mean_motion?: any;
  raan?: any;
  arg_of_pericenter?: any;
  mean_anomaly?: any;
}

interface Firststage {
  cores: Core[];
}

interface Core {
  core_serial: string;
  flight: number;
  block?: any;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  land_success?: any;
  landing_intent: boolean;
  landing_type?: any;
  landing_vehicle?: any;
}