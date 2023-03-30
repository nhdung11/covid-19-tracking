import { Typography } from "@mui/material";
import { sortBy } from "lodash";
import moment from "moment";
import { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./apis";
import CountrySelector from "./Components/CountrySelector";
import Highlight from "./Components/Highlight";
import Summary from "./Components/Summary";
import 'moment/locale/vi';
import '@fontsource/roboto';
import { Container } from "@mui/system";

moment.locale('vi')
function App() {

  const [countries, setCountries] = useState([])
  const [selectedCountryId, setSelectedCountryId] = useState('')
  const [report, setReport] = useState([])
  useEffect(() => {
    getCountries().then(res => {
      const countries = sortBy(res.data, 'Country')
      setCountries(countries)
      console.log(res)
      setSelectedCountryId('vn')
    });
  }, []);

  const handleOnchange = (e) => {
    setSelectedCountryId(e.target.value)
  };
  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(country => country.ISO2.toLowerCase() === selectedCountryId);
      getReportByCountry(Slug).then((res) => {
        setReport(res.data)
        // console.log(res.data)
      })
    }
  }, [countries, selectedCountryId])

  return (
    <Container sx={{marginTop: 5}}>
      <Typography variant="h2" component="h2">Số liệu COVID-19</Typography>
      <Typography>{moment().format("LLL")}</Typography>
      <CountrySelector countries={countries} handleOnchange={handleOnchange} value={selectedCountryId}/>
      <Highlight report = {report}/>
      <Summary report = {report} countryId={selectedCountryId}/>
    </Container>
  );
}

export default App;
