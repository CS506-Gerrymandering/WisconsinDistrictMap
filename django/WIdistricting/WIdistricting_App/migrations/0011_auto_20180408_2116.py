# Generated by Django 2.0.2 on 2018-04-08 21:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('WIdistricting_App', '0010_auto_20180408_2107'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pre_district',
            old_name='votes',
            new_name='total_votes',
        ),
        migrations.AddField(
            model_name='pre_district',
            name='candidate',
            field=models.CharField(max_length=128, null=True),
        ),
        migrations.AddField(
            model_name='pre_district',
            name='office',
            field=models.CharField(max_length=64, null=True),
        ),
        migrations.AddField(
            model_name='pre_district',
            name='party',
            field=models.CharField(max_length=32, null=True),
        ),
        migrations.AddField(
            model_name='pre_district',
            name='year',
            field=models.IntegerField(null=True),
        ),
    ]
