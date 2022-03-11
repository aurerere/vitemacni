import get from './src/getter';

const cmd = "Invoke-WebRequest 'https://teleservices.paris.fr/rdvtitres/jsp/site/Portal.jsp?page=appointmentsearch' " +
    "| Select-Object -Expand Content";

get(cmd);