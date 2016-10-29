use strict;
use warnings;
use Plack::Builder;

builder {
    enable 'Plack::Middleware::Static',
        path => qr{\.\w+},
        root => './public';
}
