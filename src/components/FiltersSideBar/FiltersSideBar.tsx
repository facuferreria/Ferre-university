import { Accordion, AccordionDetails, AccordionSummary} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from '../Slider/Slider';
import './FiltersSideBar.scss'

interface SideFiltersProps {
  title: string;
  FilterComponent: JSX.Element;
}

function FiltersSideBar({title, FilterComponent}: SideFiltersProps) {
  return (
    <div>
        <Accordion disableGutters = {true} elevation={0}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <h4>{title}</h4>
            </AccordionSummary>
            <AccordionDetails>
              {FilterComponent}
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default FiltersSideBar