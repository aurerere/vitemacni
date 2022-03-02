const { JSDOM } = require("jsdom");

const html = `<div class="col-sm-12">
        <div class="container">        \t
            <div class="row">
\t\t\t\t<div class="col-xs-12">
\t\t\t\t\t<div class="formGroupContainer messageContainer" id="message-carto"></div>
\t\t\t\t</div>
                <div class="col-xs-12">
\t\t\t\t\t\t\t\t<h3>Appointment Map</h3>
\t\t\t\t\t\t\t\t<p><a href="jsp/site/Portal.jsp?page=appointmentsearch&amp;view=search&amp;category=titres&amp;nb_consecutive_slots=1&amp;role=none#rdv_liste">Display the first available slots</a></p><p class="visible-xs">The map is only available for big screens</p>
\t\t\t   </div>
            </div>
            <div class="row">
                <div id="map_col" class="hidden-xs col-sm-12 col-md-12" style="position:relative; display:none;">
                    <div class="row">
                        <div id="map" class="col-xs-12">
                            <div class="leaflet-appointment-search" style="height:520px;"></div>
                            <a class="btn btn-primary btn-sm" id="tgSearchForm" href="#"><i class="fa fa-chevron-left hidden-xs hidden-sm"></i><i class="fa fa-angle-double-down hidden-md hidden-lg"></i><span class="hidden-xs hidden-sm"> Search</span></a>
                        </div>
                    </div>
                    <div class="row text-center" id="occupancyRate">
                        <div class="col-xs-4">
                            <p style="margin: 5px 0px;">
                                <img src="/web/20220225110728im_/https://teleservices.paris.fr:443/rdvtitres/js/plugins/leaflet/leaflet/images/marker_hole.png"> : Occupation &lt; 70%
                            </p>
                        </div>
                        <div class="col-xs-4">
                            <p style="margin: 5px 0px;">
                                <img src="/web/20220225110728im_/https://teleservices.paris.fr:443/rdvtitres/js/plugins/leaflet/leaflet/images/marker_hole_yellow.png"> : Occupation &lt; 90%
                            </p>
                        </div>
                        <div class="col-xs-4">
                            <p style="margin: 5px 0px;">
                                <img src="/web/20220225110728im_/https://teleservices.paris.fr:443/rdvtitres/js/plugins/leaflet/leaflet/images/marker_hole_red.png"> : Occupation &gt; 90%
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4" id="searchForm">
                    <div class="form-horizontal">
                        <legend>Simple Search</legend>
                        <div class="form-group">
                            <div class="col-xs-12">
                                <form method="post" action="jsp/site/Portal.jsp?page=appointmentsearch&amp;category=titres" style="display:inline-block">
                                    <input name="to_date" value="04/03/2022" type="hidden">
                                    <button type="submit" class="btn btn-primary btn-sm" name="view_search">7 days</button>
                                </form>
                                <form method="post" action="jsp/site/Portal.jsp?page=appointmentsearch&amp;category=titres" style="display:inline-block">
                                    <input name="to_date" value="11/03/2022" type="hidden">
                                    <button type="submit" class="btn btn-primary btn-sm" name="view_search">14 days</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <fieldset>
                        <legend id="advanced_search_button">Advanced Search <i class="fa fa-cogs"></i></legend>
                        <form name="search" method="post" action="jsp/site/Portal.jsp?page=appointmentsearch&amp;category=titres">
                            <input name="page" value="appointmentsearch" type="hidden">
                            <input name="role" value="none" type="hidden">
                            <div id="advanced_search">
                                <div class="form-group">
                                    <label>Date</label>
                                    <div class="row" style="margin-bottom:3px;">
                                        <div class="col-sm-6">    
                                            <label for="from_date" class="sr-only">From</label>
                                            <div class="input-group">
                                                <span class="input-group-addon">From</span>
                                                <input class="form-control" id="from_date" name="from_date" type="text" value="">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
<!-- WARNING : macro comboWithParams is deprecated -->
\t<select id="from_time" name="from_time" class="form-control" additionalparameters="">
\t
\t\t\t\t\t<option selected="selected" value="06:00">06h00</option>
\t\t\t\t\t<option value="09:00">09h00</option>
\t\t\t\t\t<option value="12:00">12h00</option>
\t\t\t\t\t<option value="15:00">15h00</option>
\t\t\t\t\t<option value="18:00">18h00</option>
\t\t\t\t\t<option value="21:00">21h00</option>
\t</select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label for="to_date" class="sr-only">
                                                To
                                            </label>
                                            <div class="input-group">
                                                <span class="input-group-addon">To</span>
                                                <input class="form-control" id="to_date" name="to_date" type="text" value="">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
<!-- WARNING : macro comboWithParams is deprecated -->
\t<select id="to_time" name="to_time" class="form-control" additionalparameters="">
\t
\t\t\t\t\t<option value="06:00">06h00</option>
\t\t\t\t\t<option value="09:00">09h00</option>
\t\t\t\t\t<option value="12:00">12h00</option>
\t\t\t\t\t<option value="15:00">15h00</option>
\t\t\t\t\t<option value="18:00">18h00</option>
\t\t\t\t\t<option selected="selected" value="21:00">21h00</option>
\t</select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Schedule</label>
                                    <div class="row">
                                        <div class="col-sm-6">
<!-- WARNING : macro comboWithParams is deprecated -->
\t<select id="from_day_minute" name="from_day_minute" class="form-control" additionalparameters="">
\t
\t\t\t\t\t<option selected="selected" value="360">06h00</option>
\t\t\t\t\t<option value="540">09h00</option>
\t\t\t\t\t<option value="720">12h00</option>
\t\t\t\t\t<option value="900">15h00</option>
\t\t\t\t\t<option value="1080">18h00</option>
\t\t\t\t\t<option value="1260">21h00</option>
\t</select>
                                        </div>
                                        <div class="col-sm-6">
<!-- WARNING : macro comboWithParams is deprecated -->
\t<select id="to_day_minute" name="to_day_minute" class="form-control" additionalparameters="">
\t
\t\t\t\t\t<option value="360">06h00</option>
\t\t\t\t\t<option value="540">09h00</option>
\t\t\t\t\t<option value="720">12h00</option>
\t\t\t\t\t<option value="900">15h00</option>
\t\t\t\t\t<option value="1080">18h00</option>
\t\t\t\t\t<option selected="selected" value="1260">21h00</option>
\t</select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                \t<label>Number of person</label>
                                    <div class="row">
                                    \t<div class="col-sm-6">
\t\t<input class="form-control" type="number" name="nb_consecutive_slots" value="1" min="1" max="6">
\t                                    </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>
                                        Day of Week
                                    </label>
                                    <div class="checkbox">
                                        <div class="row">
                                                        <div class="col-sm-6">
                                                        <label for="document_type" class="col-xs-12">
                                                            <input checked="" class="checkbox" type="checkbox" name="days_of_week" value="1">
                                                            &nbsp;Monday (3)
                                                        </label>
                                                        
                                                        
                                                        <label for="document_type" class="col-xs-12">
                                                            <input checked="" class="checkbox" type="checkbox" name="days_of_week" value="2">
                                                            &nbsp;Tuesday (1)
                                                        </label>
                                                        
                                                        
                                                        <label for="document_type" class="col-xs-12">
                                                            <input checked="" class="checkbox" type="checkbox" name="days_of_week" value="3">
                                                            &nbsp;Wednesday (0)
                                                        </label>
                                                        
                                                        
                                                        <label for="document_type" class="col-xs-12">
                                                            <input checked="" class="checkbox" type="checkbox" name="days_of_week" value="4">
                                                            &nbsp;Thursday (0)
                                                        </label>
                                                        </div>
                                                        <div class="col-sm-6">
                                                        <label for="document_type" class="col-xs-12">
                                                            <input checked="" class="checkbox" type="checkbox" name="days_of_week" value="5">
                                                            &nbsp;Friday (0)
                                                        </label>
                                                        
                                                        
                                                        <label for="document_type" class="col-xs-12">
                                                            <input checked="" class="checkbox" type="checkbox" name="days_of_week" value="6">
                                                            &nbsp;Saturday (0)
                                                        </label>
                                                        
                                                        
                                                        <label for="document_type" class="col-xs-12">
                                                            <input checked="" class="checkbox" type="checkbox" name="days_of_week" value="7">
                                                            &nbsp;Sunday (0)
                                                        </label>
                                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary btn-sm" name="action_search" value="Search">
                                        Search
                                    </button>
                                    <button type="submit" class="btn btn-danger btn-sm" name="action_clear" value="Erase">
                                        Erase
                                    </button>
                                </div>
                            </div>
                        </form>
                    </fieldset>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
\t\t\t\t\t\t\t\t<h3 id="rdv_liste">First available slots</h3>
\t\t\t\t\t\t\t\t<div class="nextAvailableAppointments">
                                    <div>
                                        <div><h4>Service titres d'identité du  8ème arrondissement</h4></div>
                                        <div>
                                            <div>
                                                    <p><!-- Adress :  -->3 rue de Lisbonne, 75008 PARIS</p>
                                                <p class="emphasize_default">Next available slots :</p>
                                                <ul>
                                                    <li>
                                                        <a title="28 February 2022 09:15" href="https://web.archive.org/web/20220225110728/https://teleservices.paris.fr/rdvtitres/jsp/site/Portal.jsp?page=appointment&amp;view=getViewAppointmentForm&amp;id_form=33&amp;starting_date_time=2022-02-28T09:15&amp;anchor=step3&amp;nbPlacesToTake=1" id="link_rdvtitres_33_appointment_first_slot">28 February 2022 09:15</a>
                                                    </li>
                                                    <li>
                                                        <a title="28 February 2022 09:30" href="https://web.archive.org/web/20220225110728/https://teleservices.paris.fr/rdvtitres/jsp/site/Portal.jsp?page=appointment&amp;view=getViewAppointmentForm&amp;id_form=33&amp;starting_date_time=2022-02-28T09:30&amp;anchor=step3&amp;nbPlacesToTake=1">28 February 2022 09:30</a>
                                                    </li>
                                                    <li>
                                                        <a title="28 February 2022 11:30" href="https://web.archive.org/web/20220225110728/https://teleservices.paris.fr/rdvtitres/jsp/site/Portal.jsp?page=appointment&amp;view=getViewAppointmentForm&amp;id_form=34&amp;starting_date_time=2022-02-28T11:30&amp;anchor=step3&amp;nbPlacesToTake=1">28 February 2022 11:30</a>
                                                    </li>
                                                </ul>
                                                <p>0 other schedule available</p>
                                                <!-- <p><span class="emphasize_default">Number of free places :</span> 4 (Filling Rate : 43%)</p> -->
                                            </div>
                                            <div>
                                                <a id="link_rdvtitres_33_appointment_full_calendar" class="btn btn-primary btn-sm" href="https://web.archive.org/web/20220225110728/https://teleservices.paris.fr/rdvtitres/jsp/site/Portal.jsp?page=appointment&amp;view=getViewAppointmentCalendar&amp;id_form=33&amp;nbPlacesToTake=1">See the full calendar</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div><h4>Service titres d'identité de Louvre</h4></div>
                                        <div>
                                            <div>
                                                    <p><!-- Adress :  -->4 place du Louvre, 75001 PARIS</p>
                                                <p class="emphasize_default">Next available slots :</p>
                                                <ul>
                                                    <li>
                                                        <a title="22 March 2022 09:00" href="https://web.archive.org/web/20220225110728/https://teleservices.paris.fr/rdvtitres/jsp/site/Portal.jsp?page=appointment&amp;view=getViewAppointmentForm&amp;id_form=28&amp;starting_date_time=2022-03-22T09:00&amp;anchor=step3&amp;nbPlacesToTake=1" id="link_rdvtitres_28_appointment_first_slot">22 March 2022 09:00</a>
                                                    </li>
                                                </ul>
                                                <p>0 other schedule available</p>
                                                <!-- <p><span class="emphasize_default">Number of free places :</span> 1 (Filling Rate : 50%)</p> -->
                                            </div>
                                            <div>
                                                <a id="link_rdvtitres_28_appointment_full_calendar" class="btn btn-primary btn-sm" href="https://web.archive.org/web/20220225110728/https://teleservices.paris.fr/rdvtitres/jsp/site/Portal.jsp?page=appointment&amp;view=getViewAppointmentCalendar&amp;id_form=28&amp;nbPlacesToTake=1">See the full calendar</a>
                                            </div>
                                        </div>
                                    </div>
\t\t\t\t\t\t\t\t</div>
                </div>
            </div>
        </div>
    </div>`

const res = new JSDOM(html);

console.log(res.window.document.querySelector('.nextAvailableAppointments').innerHTML);