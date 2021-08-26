FROM amazonlinux

RUN yum -y update
RUN yum -y install httpd
RUN yum -y install git


RUN git clone https://github.com/rkuzmyn/video-surveillance-site.git

RUN mv -v /video-surveillance-site/* ~ /var/www/html/

#COPY ./index.php /var/www/html/index.php



CMD ["/usr/sbin/httpd","-D","FOREGROUND"]

EXPOSE 80
