# Generated by Django 2.0.2 on 2018-03-19 22:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('WIdistricting_App', '0007_auto_20180313_1452'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pre_District',
            fields=[
                ('district_id', models.IntegerField(primary_key=True, serialize=False)),
                ('population', models.IntegerField(null=True)),
                ('blue_votes', models.IntegerField(null=True)),
                ('red_votes', models.IntegerField(null=True)),
                ('votes', models.IntegerField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Pre_District_Plan',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, null=True)),
                ('year', models.IntegerField(null=True)),
                ('map_id', models.IntegerField(null=True)),
                ('target_population', models.DecimalField(decimal_places=5, max_digits=5, null=True)),
            ],
        ),
    ]