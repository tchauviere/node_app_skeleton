<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="media/favicon.ico">

        <title>{% block title %}{% endblock %}</title>

        {% block css %}
            <link href="media/css/bootstrap.min.css" rel="stylesheet">
            <link href="media/css/main.css" rel="stylesheet">
        {% endblock %}

        {% block js %}
            <script src="media/js/libs/jquery-2.1.3.min.js"></script>
            <script src="media/js/libs/bootstrap.min.js"></script>
            <script src="{{server_address}}{{socket_io_lib}}"></script>
            <script data-main="media/js/app" src="media/js/libs/require.js"></script>
        {% endblock %}
    </head>

    <body>

        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Base App</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">Menu 1</a></li>
                <li><a href="#about">Menu 2</a></li>
                <li><a href="#contact">Menu 3</a></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Menu 4<span class="caret"></span></a>
                  <ul class="dropdown-menu country-dropdown" role="menu">
                    <li><a href="#">Sub-menu 1</a></li>
                  </ul>
                </li>
              </ul>
            </div><!--/.nav-collapse -->
            </div>
        </nav>

        <div class="container page-container">
            {% block content %}{% endblock %}
        </div><!-- /.container -->

    </body>
</html>

