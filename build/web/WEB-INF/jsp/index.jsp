<%@ page contentType="text/html; charset=utf-8" language="java" import="java.sql.*" errorPage="" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>PAQUEADERO</title>
        <script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
        
    </head>
    <body bgcolor="#000000">
        <script src=<%@ include file = "funciones.js" %>></script>
        <table width="100%" >
            <tr>
                <td valign="top">
                    <div id="frameMaps">
                        <img id="mapImage"/>   
                    </div>
                </td>
                <td valign="top">
                    <font color="#D4D4D4">
                        <div class="span3">Parking A </div>
                        <div id="parq_A">
                            <p>&nbsp;&nbsp;&nbsp;Dir:  </p>
                            <p>&nbsp;&nbsp;&nbsp;Tel:  </p>
                            <p>&nbsp;&nbsp;&nbsp;Libres: 25/30 </p>
                            <p>&nbsp;&nbsp;&nbsp;Reservar | Pagar </p>
                            <p>&nbsp;&nbsp;&nbsp;Reservar para después </p>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                        </div>
                        <li>Parking B </li>
                        <li>Parking C </li>
                        <li>Parking D </li>
                        <li>Parking E </li>
                        <li>Parking F </li>            
                    </font>
                </td>
            </tr>
            <tr>
                <td valign="top">&nbsp;</td>
                <td valign="top">&nbsp;</td>
            </tr>
        </table>
        <input type="button" onclick="getLocation();"/>
        <input type="text" id="txtF" />
        <input type="button" onclick="zoomIn();" value="+"/>
        <input type="button" onclick="zoomOut();" value="-"/>
    </body>
</html>
