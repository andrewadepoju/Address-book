var app = new function() {
  this.el = document.getElementById('contacts');
  this.contacts = ['Taiwo Adepoju - 08012345678'];
  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'contact';
    if (data) {
      if (data > 1) {
        name = 'contacts';
      }
      el.innerHTML = data + ' ' + name ;
    } else {
      el.innerHTML = 'No ' + name;
    }
  };
  
  this.FetchAll = function() {
    var data = '';
    if (this.contacts.length > 0) {
      for (i = 0; i < this.contacts.length; i++) {
        data += '<div>';
        data += '<div class="menu-item">' + this.contacts[i] + '</div>';
        data += '<span class="menu-item"><button onclick="app.Edit(' + i + ')">Edit</button></span>';
        data += '<span class="menu-item"><button onclick="app.Delete(' + i + ')">Delete</button></span>';
        data += '</div>';
      }
    }
    this.Count(this.contacts.length);
    return this.el.innerHTML = data;
  };
  this.Add = function () {
    el = document.getElementById('add-name');
    // Get the value
    var contact = el.value;
    if (contact) {
      // Add the new value
      this.contacts.push(contact.trim());
      // Reset input value
      el.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };
  this.Edit = function (item) {
    var el = document.getElementById('edit-name');
    // Display value in the field
    el.value = this.contacts[item];
    // Display fields
    document.getElementById('extraInput').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      // Get value
      var contact = el.value;
      if (contact) {
        // Edit value
        self.contacts.splice(item, 1, contact.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };
  this.Delete = function (item) {
    // Delete the current row
    this.contacts.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };
  
}
app.FetchAll();
function CloseInput() {
  document.getElementById('extraInput').style.display = 'none';
}