const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-gray-600">Start building your amazing project here!</p>
      </div>
    </div>
  );
};

export default Index;

<form id="ps_subscribe_form" action="https://api.postscript.io/subscribe/form" method="post">
    <div class="logo-container">
        <a href="{{ routes.root_url }}" aria-current="page" class="logo-link w-inline-block w--current">
            {% if settings.shop_screen_logo %}
                <img style="width: {{ settings.shop_screen_logo_size }}px;" src="{{ settings.shop_screen_logo | image_url: width: settings.shop_screen_logo_size }}" alt="" class="logo">
            {% else %}
                <img src="{{ 'Supreme-dummy.png' | asset_url }}" alt="" class="logo">
            {% endif %}
        </a>
        <div class="date-time-container">
            <div class="date" style="color: {{ section.settings.index_date_color }}">{{ 'tn7d8e379f' | t }}</div>
            <div class="time" style="color: {{ section.settings.index_time_color }}">{{ 't589b2285' | t }}</div>
        </div>
    </div>
    <h3 id="ps__sent-message" class="password-success-message" style="display: none; margin-top: 15px; color: {{ section.settings.email_form_success_msg_color }}">{{ section.settings.email_form_success_msg }}</h3>
    <h3 class="password-email-header" style="margin-top: 15px; color: {{ section.settings.email_form_h_color }}">{{ section.settings.email_form_h_txt }}</h3>
    <p class="password-email-txt" id="password-email-txt" style="color: {{ section.settings.email_form_p_color }}">{{ section.settings.email_form_p_txt }}</p>
    <div class="email" id="email_input_container">
      <input id="ps__shop_id" name="shop_id" type="hidden" value="294745"/> 
      <input id="ps__keyword_id" name="keyword_id" type="hidden" value="348285"/>
      <input 
        style="color: {{ section.settings.email_form_input_placeholder_color }}; background-color: {{ section.settings.email_form_input_color }}; border:1px solid {{ section.settings.email_form_input_color }};  box-shadow: 1px 3px 5px #0000001a; padding: 6px;" 
        id="ps__phone-subscribe" 
        name="phone" 
        type="tel" 
        pattern="[0-9]{10}"
        placeholder="Phone Number (10 digits)" 
        required
        autofocus
      />
    </div>  
    <input 
        class="password-email-btn btn" 
        id="password-email-btn" 
        style="border: none; line-height: normal; background-color: {{ section.settings.email_form_btn_color }}; color: {{ section.settings.email_form_btn_txt_color }}; cursor: pointer; width: auto;" 
        type="submit" 
        value="Submit" 
    />
    <p id="thank_you_message" style="display: none;">VIP Status Acquired! Check your Texts for the Password.</p>
</form>

<script>
document.getElementById('ps_subscribe_form').addEventListener('submit', function(e) {
    e.preventDefault();

    const phone = document.getElementById('ps__phone-subscribe').value;
    // Format phone number to remove any non-numeric characters
    const formattedPhone = phone.replace(/\D/g, '');
    
    if(formattedPhone.length !== 10) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }

    const formData = new FormData();
    formData.append('shop_id', document.getElementById('ps__shop_id').value);
    formData.append('keyword_id', document.getElementById('ps__keyword_id').value);
    formData.append('phone', formattedPhone);

    fetch('https://api.postscript.io/subscribe/form', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        document.getElementById('thank_you_message').style.display = 'block';
        document.getElementById('password-email-txt').style.display = 'none';
        document.getElementById('email_input_container').style.display = 'none';
        document.getElementById('password-email-btn').style.display = 'none';
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting your phone number. Please try again.');
    });
});
</script>
<p onClick="openPass()" style="color: {{ section.settings.store_owner_text_color }}; cursor: pointer;" id="store-owner" class="store-owner-link">Click Here to Enter Password</p>
{%- form "storefront_password",  class: "utility-page-form w-password-page" -%}
  <form action="/.wf_auth" method="post" id="email-form" name="email-form" data-name="Email Form" class="utility-page-form w-password-page">
          
  <div id="pw-form" class="pw-form" style="position: absolute; left: 50%; transform: translateX(-50%) translateY(0); bottom: 0; margin-bottom: 10px;">
          <input style="border:1px solid #e2e2e2;  box-shadow: 1px 3px 5px #0000001a; height:25px; width:154px; background-color:{{ section.settings.password_input_color }}; color:{{ section.settings.password_input_text_color }};" type="password" class="text-field-2 w-password-page w-input" autofocus="true" maxlength="256" name="password" data-name="field" placeholder="password" id="pass">
          <input style="padding: 0; line-height: 0; height: 25px; width:154px; background-color:{{ section.settings.password_submit_bg }}; color: {{ section.settings.password_submit_text_color }};" type="submit" value="Enter" data-wait="Please wait..." class="submit-button w-password-page w-button">
  </div>
  {%- unless form_success -%}
          <div class="w-password-page w-form-fail {% if form.errors %}form-has-errors{% endif %}">
          <div>
            {%- render "form-errors", form_errors: form_errors -%}
          </div>
          </div>
          {%- endunless -%}
      {%- assign form_success = form.posted_successfully? -%}{%- assign form_errors = form.errors -%}{%- render "form-general-script", form_success: form_success, form_errors: form_errors -%}
  </form>
{%- endform -%}
    </div>
  <script>
  const storeOwner = document.getElementById("pw-form");
  function openPass(){
    storeOwner.style.display = "block";
  }
</script>
{% schema %}
  {
    "name": "PJ Settings (Classic)",
    "settings": [
      {
      "type": "header",
      "content": "Background Image"
    },
    {
      "type": "image_picker",
      "id": "desktop_bg_image",
      "label": "Desktop"
    },
    {
      "type": "checkbox",
      "id": "show_background_image",
      "label": "Show On Desktop",
      "default": true
    },
    {
      "type": "image_picker",
      "id": "mobile_bg_image",
      "label": "Mobile"
    },
       {
      "type": "checkbox",
      "id": "show_background_image_mobile",
      "label": "Show On Mobile",
      "default": true
    },
      {
      "type": "header",
      "content": "Video Background"
    },
    {
      "type": "paragraph",
      "content": "Displays on both desktop and mobile. Note: On iPhones, if 'Low Battery Mode' is enabled, the background will not autoplay. These are guidelines set by Apple."
    },
    {
      "type": "text",
      "id": "video_url",
      "label": "Background Video URL"
    },
    {
      "type": "checkbox",
      "id": "show_background_video",
      "label": "Show Background Video",
      "default": false
    },
    {
      "type": "header",
      "content": "Background Color"
    },
    {
      "type": "color",
      "id": "bg_color",
      "label": "Desktop",
      "default": "#ffffff"
    },
     {
      "type": "color",
      "id": "bg_color_mobile",
      "label": "Mobile",
      "default": "#ffffff"
    },

    {
      "type": "header",
      "content": "Background Overlays"
    },
    {
      "type": "paragraph",
      "content": "Use these settings to set a blended color overlay over your background."
    },
    {
      "type": "header",
      "content": "Desktop"
    },
    {
      "type": "color",
      "id": "overlay_top_color",
      "label": "Overlay Desktop Color (Top)",
      "default": "#000000"
    },
    {
    "type": "range",
    "id": "overlay_top_opacity",
    "min": 0,
    "max": 1,
    "step": 0.1,
    "unit": "px",
    "label": "Overlay Desktop Opacity (Top)",
    "default": 0
    },
    {
      "type": "color",
      "id": "overlay_bottom_color",
      "label": "Overlay Desktop Color (Bottom)",
      "default": "#000000"
    },
    {
  "type": "range",
  "id": "overlay_bottom_opacity",
  "min": 0,
  "max": 1,
  "step": 0.1,
  "unit": "px",
  "label": "Overlay Desktop Opacity (Bottom)",
  "default":0
},
      {
      "type": "header",
      "content": "Mobile"
    },
  {
      "type": "color",
      "id": "overlay_top_color_mobile",
      "label": "Overlay Mobile Color (Top)",
      "default": "#000000"
    },
    {
  "type": "range",
  "id": "overlay_top_opacity_mobile",
  "min": 0,
  "max": 1,
  "step": 0.1,
  "unit": "px",
  "label": "Overlay Mobile Opacity (Top)",
  "default": 0
},
    {
      "type": "color",
      "id": "overlay_bottom_color_mobile",
      "label": "Overlay Mobile Color (Bottom)",
      "default": "#000000"
    },
    {
  "type": "range",
  "id": "overlay_bottom_opacity_mobile",
  "min": 0,
  "max": 1,
  "step": 0.1,
  "unit": "px",
  "label": "Overlay Mobile Opacity (Bottom)",
  "default":0
},
      {
      "type": "color",
      "id": "index_date_color",
      "label": "Date Color",
      "default": "#000"
    },
     {
      "type": "color",
      "id": "index_time_color",
      "label": "Time Color",
      "default": "#000"
    },
      {
        "type": "header",
        "content": "Store Login"
      },
      {
        "type": "color",
        "id": "store_owner_text_color",
        "label": "Store Owner Label Color",
        "default": "#000"
      },
      {
        "type": "color",
        "id": "password_input_color",
        "label": "Password Input BG Color",
        "default": "#FFFFFF"
      },
      {
        "type": "color",
        "id": "password_input_text_color",
        "label": "Password Text Color",
        "default": "#000"
      },
      {
        "type": "color",
        "id": "password_submit_bg",
        "label": "Submit Button BG",
        "default": "#FE060A"
      },
      {
        "type": "color",
        "id": "password_submit_text_color",
        "label": "Submit Button Text",
        "default": "#FFFFFF"
      },
      {
        "type": "header",
        "content": "Email Form Signup"
      },
      {
        "type": "text",
        "id": "email_form_h_txt",
        "label": "Form Header",
        "default": "Store is closed rn man..."
      },
      {
        "type": "textarea",
        "id": "email_form_p_txt",
        "label": "Form Content",
        "default": "Some example text of what you could possibly write so you can collect emails for your site while it is closed."
      },
      {
        "type": "text",
        "id": "email_form_input_label_txt",
        "label": "Email Field Label",
        "default": "Email"
      },
      {
        "type": "text",
        "id": "email_form_input_placeholder_txt",
        "label": "Email Input Placeholder Text",
        "default": "example@gmail.com"
      },
      {
        "type": "text",
        "id": "email_form_btn_txt",
        "label": "Submit Button Text",
        "default": "Subscribe"
      },
      {
        "type": "text",
        "id": "email_form_success_msg",
        "label": "Success Message",
        "default": "Thank you!"
      },
      {
        "type": "header",
        "content": "Email Form Colors"
      },
      {
        "type": "color",
        "id": "email_form_h_color",
        "label": "Header Color",
        "default": "#000"
      },
      {
        "type": "color",
        "id": "email_form_bg_color",
        "label": "BG Color",
        "default": "#FFFFFF"
      },
      {
        "type": "color",
        "id": "email_form_p_color",
        "label": "Content Text Color",
        "default": "#000"
      },
      {
        "type": "color",
        "id": "email_form_input_label_color",
        "label": "Email Label Color",
        "default": "#000"
      },
      {
        "type": "color",
        "id": "email_form_input_placeholder_color",
        "label": "Placeholder Text Color",
        "default": "#000"
      },
      {
        "type": "color",
        "id": "email_form_input_color",
        "label": "Email Field Input Color",
        "default": "#FFF"
      },
      {
        "type": "color",
        "id": "email_form_success_msg_color",
        "label": "Success Message Color",
        "default": "#000"
      },
      {
        "type": "color",
        "id": "email_form_btn_color",
        "label": "Submit Button Color",
        "default": "#FE060A"
      },
      {
        "type": "color",
        "id": "email_form_btn_txt_color",
        "label": "Submit Button Text Color",
        "default": "#FFF"
      },
      {
        "type": "range",
        "id": "email_form_bg_color_opacity",
        "label": "Email Form Opacity",
        "min": 0,
        "max": 1,
        "unit": "%",
        "step": 0.1,
        "default": 1
      },
      {
      "type": "checkbox",
      "id": "enable_box_shadow",
      "label": "Show Box Shadow",
      "default": true
    }
    ]
  }
{% endschema %}

{% stylesheet %}
{% endstylesheet %}

{% javascript %}
{% endjavascript %}
