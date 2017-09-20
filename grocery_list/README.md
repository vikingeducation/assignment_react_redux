As a user, I want to...

Add a new item to my grocery list. The item should have a name/description and an optional fields for amount and category.
Indicate an item has been purchased.
Set filters for purchased/not purchased/all, categories/all.
Set sort by name/description.

Shoppinglist reducer:

Item object:
{
  name: string,
  description: string,
  amount: integer,
  category: string,
  purchased: boolean
}

Actions:
Add item to listener

Filter/sorting reducer:

Filter/sort item:
{
  purchasedFilter: purchased/not purchased/all
  categoriesFilter: specificCategory/all
  sort: name/description
}

Updating filters
Updating sorting
