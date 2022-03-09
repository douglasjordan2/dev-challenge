## Liquid Challenge

1. Describe how you would make a line of text in a homepage section editable from theme customization and how you would access this in liquid.

   ```
   <span>{{ section.settings.homepage_text }}</span>

   {% schema %}
      {
        "name": "Homepage Section",
        "settings": [
            {
                "type": "text",
                "id": "homepage_text",
                "label": "Homepage Text"
            }
        ]
      }
   {% endschema %}

   ```

2. How would you add the collection featured image as a banner on the collection liquid template?
   This would depend on if I should load it as a background image or an image element. Either way, to get the right image from liquid, I would use `collection.featured_image`.

3. Using liquid code and HTML, create a simple pagination container, "< 1 2 ... 5 >".

   ```
   {% paginate collection.products by 5 %}

     <div>
       {% if paginate.previous.is_link %}
         <a href="{{ paginate.previous.url }}">{{ paginate.previous.title }}</a>
       {% endif %}
       {% if paginate.next.is_link %}
         <a href="{{ paginate.next.url }}">{{ paginate.next.title }}</a>
       {% endif %}
     </div>
   {% endpaginate %}
   ```

4. Using liquid code, access the product named "Blue T-Shirt". Store the id, title, handle, price, url, and image in variables.

   ```
   {% for p in collections["all-products"].products %}
     {% if p.title == 'Blue T-Shirt' %}
       {% assign product = p %}
     {% endif %}
   {% endfor %}

   {% assign id = product.id %}
   {% assign title = product.title %}
   {% assign handle = product.handle %}
   {% assign price = product.price %}
   {% assign url = product.url %}
   {% assign image = product.featured_image %}

   ```

5. Using liquid code, create a key:value array using the list below. Loop through the array. Upon key type, store the value in a variable to be used later:

   - fruit:apple
   - vegetable:carrot
   - cloth:t-shirt
   - denim:jeans

   Assuming the above is in a variable called 'string'.

   ```
   {% assign list = string | newline_to_br | replace: '-', '', | replace: ' ', '' | split: '<br />' %}
   {% for obj in list %}
     {% assign key = obj | split: ':' | first %}
     {% assign value = obj | split: ':' | last %}

     {{ value }}
   {% endfor %}
   ```
