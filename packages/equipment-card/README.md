# @tractorzoom/equipment-card

Equipment Details Card

[Live Examples](https://component-library-git-master-tractorzoomdevs.vercel.app/equipment-card)

## Install

```
npm i --save @tractorzoom/equipment-card
```

Make sure you have peer dependencies installed.

### Equipment Card Props

| value                   | required | description                                                            |
| ----------------------- | -------- | ---------------------------------------------------------------------- |
| auctionDate             | no       | string for auction date of equipment; used as fallback for `saleDate`  |
| distance                | no       | number for distance of equipment                                       |
| handleOpen              | yes      | function that is called when card is clicked                           |
| handleEquipmentSelected | yes      | function that is called when equipment selection button is clicked     |
| id                      | yes      | string or number identifier for piece of equipment                     |
| imageUrl                | yes      | string url for image of equipment                                      |
| loading                 | no       | render loading skeleton card                                           |
| make                    | yes      | string for make name of equipment                                      |
| makeImageUrl            | yes      | string url used as fallback if there is an error when using `imageUrl` |
| model                   | yes      | string for model of equipment                                          |
| onVisible               | no       | called for the first time the card becomes 70% visible                 |
| price                   | yes      | number for sold price of equipment                                     |
| saleDate                | no       | string for sale date of equipment                                      |
| selectedEquipmentSet    | yes      | Set of ids of currently selected equipment                             |
| shouldHaveDataTour      | no       | boolean for if `data-tour` attributes should be added                  |
| state                   | no       | string for state of equipment                                          |
| style                   | no       | object of styles to be applied to the root card                        |
| year                    | no       | number for year of equipment                                           |

## Contributing

We welcome improvements and fixes via PRs. Review the contributing guidelines in the repository readme for how to get started.
