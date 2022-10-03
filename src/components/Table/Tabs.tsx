import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import FilterableListView from '../Table/List'
import SortableTable from '../Table/Table'
import data from '../Table/data.json'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { width } from '@mui/system';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, fontFamily: 'var(--first-font)', bgcolor: 'var(--dark-purple)', display: 'flex', height: 'calc(100% - 40px)' }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                    border: 2, borderColor: 'var(--white)', padding: '.5rem',
                    "& button": {padding: '8px 12px', minHeight: '40px'},
                    "& button.Mui-selected": { backgroundColor: 'var(--violet)', color: 'var(--dark-purple)', fontWeight: 'var(--font-bold)' }
                }}
                TabIndicatorProps={{ style: { background: 'none' } }}

            >
                <Tab
                    label={
                        <div className='tabs__label'>
                            <i className='bx bx-folder icon__label'></i>
                            <span>all</span>
                        </div>
                    }
                    {...a11yProps(0)}
                    sx={{ color: 'var(--violet)', fontFamily: 'var(--first-font)', textTransform: 'inherit', fontWeight: 'var(--font-bold)', alignItems: 'flex-start', width: '144px' }}
                    className="tab__button"
                />
                <Tab
                    label={
                        <div className='tabs__label'>
                            <i className='bx bx-folder icon__label'></i>
                            <span>javascript</span>
                        </div>
                    }
                    {...a11yProps(1)}
                    sx={{ color: 'var(--violet)', fontFamily: 'var(--first-font)', textTransform: 'inherit', fontWeight: 'var(--font-bold)', alignItems: 'flex-start', width: '144px' }}
                />
                <Tab
                    label={
                        <div className='tabs__label'>
                            <i className='bx bx-folder icon__label'></i>
                            <span>react</span>
                        </div>
                    }
                    {...a11yProps(2)}
                    sx={{ color: 'var(--violet)', fontFamily: 'var(--first-font)', textTransform: 'inherit', fontWeight: 'var(--font-bold)', alignItems: 'flex-start', width: '144px' }}
                />
                <Tab
                    label={
                        <div className='tabs__label'>
                            <i className='bx bx-folder icon__label'></i>
                            <span>java</span>
                        </div>
                    }
                    {...a11yProps(3)}
                    sx={{ color: 'var(--violet)', fontFamily: 'var(--first-font)', textTransform: 'inherit', fontWeight: 'var(--font-bold)', alignItems: 'flex-start', width: '144px' }}
                />
                <Tab label={
                    <div className='tabs__label'>
                        <i className='bx bx-folder icon__label'></i>
                        <span>tailwind</span>
                    </div>
                }
                    {...a11yProps(4)}
                    sx={{ color: 'var(--violet)', fontFamily: 'var(--first-font)', textTransform: 'inherit', fontWeight: 'var(--font-bold)', alignItems: 'flex-start', width: '144px' }}
                />
            </Tabs>
            <TabPanel value={value} index={0}>
                <FilterableListView
                    items={[
                        { key: "foo", name: "foo", value: 11 },
                        { key: "bar", name: "bar", value: 12 },
                        { key: "baz", name: "baz", value: 8 }
                    ]}
                    renderer={(item) => <div>{item.name}</div>}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <FilterableListView
                    items={[
                        { key: "foo", name: "foo", value: 11 },
                        { key: "bar", name: "bar", value: 12 },
                        { key: "baz", name: "baz", value: 8 }
                    ]}
                    renderer={(item) => <div>{item.name}</div>}
                />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <FilterableListView
                    items={[
                        { key: "foo", name: "foo", value: 11 },
                        { key: "bar", name: "bar", value: 12 },
                        { key: "baz", name: "baz", value: 8 }
                    ]}
                    renderer={(item) => <div>{item.name}</div>}
                />
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel>
        </Box>
    );
}