import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


const monthly = 'Monthly';
const annual = 'Annual';
const packages = [
    {
        title: 'Basic',
        price: 35,
        payments: monthly,
        img: 'https://via.placeholder.com/150',
        description: 'This',
        features: [
            'Leak Repair',
            'Drywall Patch',
            'HVAC Filter Replacement(yearly)',
            'Rain Gutter Cleaning(Yearly)',
            'Softener Salt Delivery(Monthly)',
        ]
        },
        {
        title: 'Standard',
        price: 60,
        payments: monthly,
        img: 'https://via.placeholder.com/150',
        description: 'This',


        features: [
            'Leak Repair',
            'Drywall Patch',
            'HVAC Filter Replacement(yearly)',
            'Rain Gutter Cleaning(Yearly)',
            'Softener Salt Delivery(Monthly)',
            'Window Washing(2 times a year)',
            'Garbage Can Cleaning(Yearly)',
            'Chimney Sweep'
        ]
        },
        {
        title: 'Premium',
        price: 100,
        payments: monthly,
        description: 'This',

        img: 'https://via.placeholder.com/150',

        features: [
            'Leak Repair',
            'Drywall Patch',
            'HVAC Filter Replacement(yearly)',
            'Rain Gutter Cleaning(Yearly)',
            'Softener Salt Delivery(Monthly)',
            'Window Washing(4 times a year)',
            'Garbage Can Cleaning(Yearly)',
            'Chimney Sweep',
            'Carpet Cleaning(yearly)',
            'Pressure Wash Sidewalks(Spring)'
        ]
        },
        
    ]
const SpringAndFallSpecials = [
    {
        title: 'Spring Special',
        price: 500,
        payments: annual,
        description: 'This',

        img: 'https://via.placeholder.com/150',

        features: [
            'HVAC Filter Replacement(yearly)',
            'Rain Gutter Cleaning(Yearly)',
            'Window Washing(Yearly)',
            'Garbage Can Cleaning(Yearly)',
            'Carpet Cleaning(yearly)',
            'Pressure Wash Sidewalks(Spring)',
        ]
    },
    {
        title: 'Fall Special',
        price: 200,
        payments: annual,
        description: 'This',

        img: 'https://via.placeholder.com/150',

        features: [
            'Rain Gutter Cleaning(Yearly)',
            'Window Washing(Yearly)',
            'Chimney Sweep',
            
        ]
    },
]
    
const buildAPlanOptions = [
        {
        title: 'Leak Repair',
        price: 5,
        description: 'This',

        img: 'https://via.placeholder.com/150',
        },
        {
        title: 'Window Washing(4 times a year)',
        price: 10,
        description: 'This',

        img: 'https://via.placeholder.com/150',

        },
        {
        title: 'Carpet Cleaning(2 times a year)',
        price: 15,
        description: 'This',

        img: 'https://via.placeholder.com/150',

        },
        {
            title: 'Softener Salt Delivery(monthly)',
            price: 10,
            description: 'This',

            img: 'https://via.placeholder.com/150',

        },
        {
            title: 'Drywall Patch',
            price: 10,
            description: 'This',

            img: 'https://via.placeholder.com/150',

        },
        {
            title: 'Rain Gutter Cleaning(2 times a year)',
            price: 10,
            description: 'This',

            img: 'https://via.placeholder.com/150',

        },
        {
            title: 'Chimney Sweep',
            price: 5,
            description: 'This',

            img: 'https://via.placeholder.com/150',

        },
        {
            title: 'HVAC Filter Replacement(yearly)',
            price: 5,
            description: 'This',

            img: 'https://via.placeholder.com/150',

        },
        {
            title: 'Pressure Wash Sidewalks(Spring)',
            price: 10,
            description: 'This',

            img: 'https://via.placeholder.com/150',

        },
        {
            title: 'Garbage Can Cleaning(yearly',
            price: 5,
            description: 'This',

            img: 'https://via.placeholder.com/150',

        }
]

const ProductContent = () => {
    const [alignment, setAlignment] = React.useState<string | null>('left');
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };


  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };
    const renderedpackages = packages.map((packageItem) => {
        return (
            <div>
                <h1>{packageItem.title}</h1>
                <h2>{packageItem.price}</h2>
                <h3>{packageItem.payments}</h3>
                <ul>
                    {packageItem.features.map((feature) => {
                        return (
                            <li>{feature}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    )
    const renderedSpringAndFallSpecials = SpringAndFallSpecials.map((packageItem) => {
        return (
            <div>
                <h1>{packageItem.title}</h1>
                <h2>{packageItem.price}</h2>
                <h3>{packageItem.payments}</h3>
                <ul>
                    {packageItem.features.map((feature) => {
                        return (
                            <li>{feature}</li>
                        )
                    })}
                </ul>
            </div>
        )
    })
    const renderedBuildAPlanOptions = buildAPlanOptions.map((packageItem) => {
        return (
            <div key={packageItem.title}>
                <h1>{packageItem.title}</h1>
                <h2>{packageItem.price}</h2>
            </div>
        )
    })
    const renderedpackagesCards = packages.map((packageItem) => {
        return (
            <div key={packageItem.title} className='m-10 grow'>
            <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={packageItem.title}
        subheader=""
      />
      <CardMedia
        component="img"
        height="150"
        image={packageItem.img}
        alt={packageItem.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {packageItem.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <ul>
            <Typography paragraph>{packageItem.features.map((feature)=>{
                return(
                    <li>{feature}</li>
                )
            }
)}

           
          
          </Typography>
          </ul>
          
        </CardContent>
      </Collapse>
    </Card>
    </div>
        )})

    

    return (
        <div>
            <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        {alignment === 'left'?  <CheckIcon/>: null}
            Monthly Subscriptions packages
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
      {alignment === 'center'?  <CheckIcon/>: null}

            Build your own service Package
            
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
      {alignment === 'right'?  <CheckIcon/>: null}

            Spring and Fall specials
      </ToggleButton>
    </ToggleButtonGroup>
    <div className='flex justify-center items-center'>
        {alignment === 'left'? renderedpackagesCards: null}
        {alignment === 'center'? renderedBuildAPlanOptions: null}
        {alignment === 'right'? renderedSpringAndFallSpecials: null}

    </div>
    
        </div>
    );
}
export default ProductContent;